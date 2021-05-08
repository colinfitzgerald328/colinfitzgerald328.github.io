---
layout: single
title:  "Creating a Web Scraper to Support Statistical Endeavors "
date:   2021-04-26 05:04:00 -0800
excerpt: "Implementing a Web Scraper in Python so I can generate tables from the TFRRS website automatically rather than having to store them locally."
categories: 

  - pinned

toc: true
--- 

```python
#importing all of the necessary modules
from datascience import * 
from bs4 import BeautifulSoup
import requests
import pandas as pd
import numpy as np
import re
import matplotlib.pyplot as plt 
%matplotlib inline 
from urllib.request import Request, urlopen 
from bs4 import BeautifulSoup as soup
from ipywidgets import widgets, interactive
import seaborn as sns 
from ipywidgets.embed import embed_minimal_html
```

# Creating a Robust Table Generator for Historical TFRRS Data, 2012- Present 

*Author's Note: This page will be updated weekly as new data becomes available.*

**Page last updated: 5/7/2021 at 9:50 P.M.**


The TFRRS website has an archive page that contains the NCAA Track and Field Outdoor Final Qualifying lists for the years 2012, until now. The following functions reproduce those tables from the TFRRS website into pandas dataframes that can be directly manipulated for the purpose of data visualization. I decided to do the data collection process this way so that I do not have to download each dataset to my computer, but rather I can pull it for each year directly to python. The process is somewhat clean. I spent time studying the TFRRS website in order to properly configure my web scraper. The following functions are a cleaned and robust version of several python jupyter notebooks. 

The first function below generates the URL on the TFRRS website. You input a year as a string, and the function will search the TFRRS archive HTML for the correct link to the outdoor performance list for that year. 

# URL Generator Function

```python
def url_generator(year): 
    base_url = "https://www.tfrrs.org/archives.html"
    req = Request(base_url, headers = {'User-Agent': 'Mozilla/5.0'})
    webpage = urlopen(req).read()
    page_soup = soup(webpage, "html.parser")
    url_search = page_soup.find_all("a", text=re.compile(year + " " + "Outdoor"))
    refined_url = url_search[0]["href"].strip("//").partition(")")
    return "http://" + refined_url[0] + refined_url[1]
```



The following snippet below is a dictionary that maps a user input's event to the corresponding HTML div class. 

```python
event_dictionary = {"100m": "row Men 6", 
                    "200m": "row Men 7", 
                    "400m": "row Men 11", 
                    "800m": "row Men 12", 
                    "1500m": "row Men 13", 
                    "5000m": "row Men 21", 
                    "10,000m": "row Men 22"}

def event_code_generator(str): 
    return event_dictionary[str]
```
# Table Generator Function 

The **table generator** function generates a table from the URL created from the input year. However, the table is a bunch of gobbldy-gook html, so we need a couple more functions to recover the original table. I also created a separate one for the year 2021, because that data is still updating as the season completes. This way, as meets are completed and new data is uploaded to TFRRS, my functions will automatically update. 

```python
def table_generator(url, event): 
    url_to_search = url
    div_class = event_code_generator(event)
    req_generator = Request(url_to_search, headers = {'User-Agent': 'Mozilla/5.0'})
    webpage_generator = urlopen(req_generator).read()
    page_soup_generator = soup(webpage_generator, "html.parser")
    html_class = page_soup_generator.find_all("div", class_ = div_class)
    for i in html_class: 
        table_html_format = i.find("table")
    return table_html_format
```


```python
def twenty_twenty_one_table_generator(event): 
    url_to_search = "https://www.tfrrs.org/lists/3191/2021_NCAA_Division_I_Outdoor_Qualifying/2021/o?gender=m"
    div_class = event_code_generator(event)
    req_generator = Request(url_to_search, headers = {'User-Agent': 'Mozilla/5.0'})
    webpage_generator = urlopen(req_generator).read()
    page_soup_generator = soup(webpage_generator, "html.parser")
    html_class = page_soup_generator.find_all("div", class_ = div_class)
    for i in html_class: 
        table_html_format = i.find("table")
    return table_html_format
```
# Split Minutes and Seconds Function 

The **split minutes and seconds** function turns the time string into a float. For example, a time such as "3:39.7" would be converted to 219.7. The reason for this is that it makes the data visualization process easier. The function by itself does not make much sense because it is used in conjunction with the table formatter function. 


```python
def split_minutes_and_seconds(time_str):
        """Get Seconds from time."""
        split_list = (time_str.split(":"))
        return int(split_list[0])*60 + float(split_list[1])
```

# Table Formatter

```python
def table_formatter(table): 
    headings = ["Rank", "Name", "Year", "School", "Time", "Meet", "Year"]
    # the head will form our column names
    body = table.find_all("tr")
    # Head values (Column names) are the first items of the body list
    body_rows = body[1:] # All other items becomes the rest of the rows
    all_rows = [] # will be a list for list for all rows
    for row_num in range(len(body_rows)): # A row at a time
        row = [] # this will old entries for one row
        for row_item in body_rows[row_num].find_all("td"): #loop through all row entries
            # row_item.text removes the tags from the entries
            # the following regex is to remove \xa0 and \n and comma from row_item.text
            # xa0 encodes the flag, \n is the newline and comma separates thousands in numbers
            aa = re.sub("(\xa0)|(\n)|,","",row_item.text)
            aa_stripped = aa.strip()
            #append aa to row - note one row entry is being appended
            row.append(aa_stripped)
        # append one row to all_rows
        all_rows.append(row)
        new_df = pd.DataFrame(data=all_rows,columns=headings)
        new_df["Time"] = [i[:7] for i in new_df["Time"]]
        new_df["Time"] = [split_minutes_and_seconds(i) for i in new_df["Time"]]
    return new_df
```
# TFRRS Table Generator 

```python
def tfrrs_table_generator(year, event): 
    if year == "2021": 
        table_created = twenty_twenty_one_table_generator(event)
        table_formatted = table_formatter(table_created)
    else: 
        url = url_generator(year)
        table_created = table_generator(url, event)
        table_formatted = table_formatter(table_created)
    return table_formatted

tfrrs_table_generator("2012", "1500m")
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Rank</th>
      <th>Name</th>
      <th>Year</th>
      <th>School</th>
      <th>Time</th>
      <th>Meet</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>Lalang Lawi</td>
      <td></td>
      <td>Arizona</td>
      <td>216.77</td>
      <td>Payton Jordan Cardinal Invitational</td>
      <td>Apr 29 2012</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2</td>
      <td>O'Hare Chris</td>
      <td>JR-3</td>
      <td>Tulsa</td>
      <td>217.95</td>
      <td>Payton Jordan Cardinal Invitational</td>
      <td>Apr 29 2012</td>
    </tr>
    <tr>
      <th>2</th>
      <td>3</td>
      <td>van Ingen Erik</td>
      <td>SR-4</td>
      <td>Binghamton</td>
      <td>218.06</td>
      <td>Virginia Challenge</td>
      <td>May 12 2012</td>
    </tr>
    <tr>
      <th>3</th>
      <td>4</td>
      <td>Leslie Cory</td>
      <td>SR-4</td>
      <td>Ohio State</td>
      <td>219.00</td>
      <td>Payton Jordan Cardinal Invitational</td>
      <td>Apr 29 2012</td>
    </tr>
    <tr>
      <th>4</th>
      <td>5</td>
      <td>Hammond Michael</td>
      <td>SR-4</td>
      <td>Virginia Tech</td>
      <td>219.22</td>
      <td>Payton Jordan Cardinal Invitational</td>
      <td>Apr 29 2012</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>95</th>
      <td>96</td>
      <td>Shawel Johnathan</td>
      <td>SR-4</td>
      <td>Notre Dame</td>
      <td>225.65</td>
      <td>GVSU 2nd to Last Chance Meet</td>
      <td>May 11 2012</td>
    </tr>
    <tr>
      <th>96</th>
      <td>97</td>
      <td>Goose Mitch</td>
      <td>SR-4</td>
      <td>Iona</td>
      <td>225.70</td>
      <td>Princeton Larry Ellis Invitational</td>
      <td>Apr 20 2012</td>
    </tr>
    <tr>
      <th>97</th>
      <td>98</td>
      <td>Vaziri Shyan</td>
      <td>FR-1</td>
      <td>UC Santa Barbara</td>
      <td>225.71</td>
      <td>Big West Track &amp; Field Championships</td>
      <td>May 11 2012</td>
    </tr>
    <tr>
      <th>98</th>
      <td>99</td>
      <td>Kalinowski Grzegorz</td>
      <td>SO-2</td>
      <td>Eastern Michigan</td>
      <td>225.73</td>
      <td>54th Annual Mt. SAC Relays</td>
      <td>Apr 19 2012</td>
    </tr>
    <tr>
      <th>99</th>
      <td>100</td>
      <td>Dowd Kevin</td>
      <td></td>
      <td>Virginia Tech</td>
      <td>225.79</td>
      <td>Wolfpack Last Chance (College)</td>
      <td>May 13 2012</td>
    </tr>
  </tbody>
</table>
<p>100 rows × 7 columns</p>
</div>



The code above is sufficient to create plots for all of the archives, and the year 2021. 

The **TFRRS table generator** is the final product of the functions listed above. It uses the url generator, table creator, and table formatter functions all together to reproduce the dataset from the TFRRS website, in cleaned form. The code below will be used to generate the birth dates of each athlete. This code is still under construction as I research a definitive way to efficiently aquire the birth date of each athlete.  


```python
input_year = widgets.Dropdown(
    options=["2021", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012"],
    value='2019',
    description='Year of Density',
)

input_event = widgets.Dropdown(
    options=["100m", "200m", "400m", "800m", "1500m", "5000m", "10,000m"],
    value='100m',
    description='Year of Density',
)

def plotit(input_year, input_event): 
    data = tfrrs_table_generator(input_year, input_event)
    sns.kdeplot(data=data, x="Time")
    
    
interactive(plotit, input_year = input_year, input_event = input_event)

#code needs to be updated to account for events such as 100m, errors because of the string converter. Will do so in a future push. Haven't done as of yet though. 
```


    interactive(children=(Dropdown(description='Year of Density', index=1, options=('2021', '2019', '2018', '2017'…


The above code generates an interactive widget that you can use to view kernel densities of each year. Since this is written in python and exported to html/ markdown, it is not possible to show its functionality in this posting. However, in the future I plan to make that possible. 

Now that we have all of the functions written, let's look at cleaned kernel density plots for each event, 800m to 10,000m, compared from 2012 until now. 

**Note: Kernel density estimation is to be used with caution. A more precise mode of analysis can be done other ways, such as using histograms or scikit learn. I chose to use this method for ease of use.** 

For these kernel density plots, we need to compile a list of the times for each event for each year. We will store each year's data in an array. We will compile a large list of all of the numbers. Let's hope that our array is not destroyed in the making.  


# Data Matix

```python
def y_value_generator(event): 
    rank = np.arange(1, 101, 1)
    base_df = pd.DataFrame(data = rank, columns = ["Rank"])
    for i in range(2012, 2020): 
        year = str(i)
        y_values = tfrrs_table_generator(year, event)["Time"]
        base_df[year] = y_values
    twenty_one = tfrrs_table_generator("2021", event)["Time"]
    base_df["2021"] = twenty_one
    return base_df
```

Well, I guess that worked. Now it's time to make each year's matrix. 


```python
#generate all the values for the years from 2012 until now, for the 800m 
eight_hundred = y_value_generator("800m")
#generate all the values for the years from 2012 until now, for the 1500m
fifteen_hundred = y_value_generator("1500m")
#generate all the values for the years from 2012 until now, for the 5000m
five_thousand = y_value_generator("5000m")
#generate all the values for the years from 2012 until now, for the 10,000m
ten_thousand = y_value_generator("10,000m")
```
# 800M Kernel Density 

Here's the kernel density for the 800m, years 2012-2021. 2020 is discluded because of the pandemic year. 


```python
ax = sns.kdeplot(
   data=eight_hundred, x="2012",
   fill=True, common_norm=False, palette="crest",
   alpha=.3, linewidth=2, legend = True 
)

for i in range(2013, 2020): 
    sns.kdeplot(data=eight_hundred, x=str(i),ax = ax, fill = True, palette = "crest", alpha = .3, linewidth = 2, legend = True)

sns.kdeplot(data = eight_hundred, x = "2021", ax = ax, fill = True, palette = "crest", alpha = .3, linewidth = 2, legend = True)

legend_list = ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2021"]
ax.legend(legend_list)
ax.set_title("800m Time")
```




    Text(0.5, 1.0, '800m Time')




    
![png](/assets/images/Web Scraper/output_20_1.png)
    
# 1500M Kernel Density

Here's the kernel density for the 1500m, years 2012-2021. 2020 is discluded because of the pandemic year. 


```python
ax = sns.kdeplot(
   data=fifteen_hundred, x="2012",
   fill=True, common_norm=False, palette="crest",
   alpha=.3, linewidth=2, legend = True 
)

for i in range(2013, 2020): 
    sns.kdeplot(data=fifteen_hundred, x=str(i),ax = ax, fill = True, palette = "crest", alpha = .3, linewidth = 2, legend = True)

sns.kdeplot(data = fifteen_hundred, x = "2021", ax = ax, fill = True, palette = "crest", alpha = .3, linewidth = 2, legend = True)

legend_list = ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2021"]
ax.legend(legend_list)
ax.set_title("1500m Time")
```




    Text(0.5, 1.0, '1500m Time')




    
![png](/assets/images/Web Scraper/output_22_1.png)
    
# 5000M Kernel Density

Here's the kernel density for the 5000m, years 2012-2021. 2020 is discluded because of the pandemic year. 


```python
ax = sns.kdeplot(
   data=five_thousand, x="2012",
   fill=True, common_norm=False, palette="crest",
   alpha=.3, linewidth=2, legend = True 
)

for i in range(2013, 2020): 
    sns.kdeplot(data=five_thousand, x=str(i),ax = ax, fill = True, palette = "crest", alpha = .3, linewidth = 2, legend = True)

sns.kdeplot(data = five_thousand, x = "2021", ax = ax, fill = True, palette = "crest", alpha = .3, linewidth = 2, legend = True)

legend_list = ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2021"]
ax.legend(legend_list)
ax.set_title("5000m Time")
```




    Text(0.5, 1.0, '5000m Time')




    
![png](/assets/images/Web Scraper/output_24_1.png)
    
# 10,000M Kernel Density 

Here's the kernel density for the 10,00m, years 2012-2021. 2020 is discluded because of the pandemic year. 

```python
ax = sns.kdeplot(
   data=ten_thousand, x="2012",
   fill=True, common_norm=False, palette="crest",
   alpha=.3, linewidth=2, legend = True 
)

for i in range(2013, 2020): 
    sns.kdeplot(data=ten_thousand, x=str(i),ax = ax, fill = True, palette = "crest", alpha = .3, linewidth = 2, legend = True)

sns.kdeplot(data = ten_thousand, x = "2021", ax = ax, fill = True, palette = "crest", alpha = .3, linewidth = 2, legend = True)

legend_list = ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2021"]
ax.legend(legend_list)
ax.set_title("10,000m Time")
```




    Text(0.5, 1.0, '10,000m Time')




    
![png](/assets/images/Web Scraper/output_26_1.png)
    
# Final Remarks

The following code below is part of a larger project. I am in the process of generating independent/explanatory variables for this project, as I want to go more in depth in the future to test the impact of the spikes. I have finals coming up so, naturally, I cannot fully dedicate my time to a project such as this. 


```python
#create a unique url for each athlete in the above dataframe 
def world_athletics_name_creator(df, column_name): 
    name_list = []
    for i in range(0, len(df[column_name])):
        split_name = df[column_name][i].split(" ")
        url_name = split_name[1] + "+" + split_name[0]
        url_name = url_name + "&countryCode=&disciplineCode=&gender=&environment="
        name_list.append(url_name)
    return name_list 
```


```python
#append a base url to the unique athlete's url and produce a final list of those 
def world_athletics_url_generator(list, base_url):
    final_list = []
    for i in range(0, len(list)): 
        final_url = base_url + list[i] 
        final_list = np.append(final_list, final_url)
    return final_list 
```


```python
#use each athlete's generated url to scrape the birth date from their profile.
def world_athletics_dob_list_maker(arr): 
    final_births_list = []
    for i in range(0, len(arr)):
        page = requests.get(arr[i])
        soup = BeautifulSoup(page.content, "html.parser")
        records_table = soup.find_all("table", attrs={"class": "records-table"})
        table1 = records_table[0]
        # the head will form our column names
        body = table1.find_all("tr")
        # Head values (Column names) are the first items of the body list
        head = body[0] # 0th item is the header row
        body_rows = body[1:] # All other items becomes the rest of the rows
        headings = []
        for item in head.find_all("th"): # loop through all th elements
            # convert the th elements to text and strip "\n"
                item = str(item)
                cleaned = item.replace("<th>\n", "")
                even_further = cleaned.replace("\n                    </th>", "")
                final = even_further.strip()
            # append the clean column name to headings
                headings.append(final)
        all_rows = [] # will be a list for list for all rows
        for row_num in range(len(body_rows)): # A row at a time
            row = [] # this will old entries for one row
            for row_item in body_rows[row_num].find_all("td"): #loop through all row entries
                # row_item.text removes the tags from the entries
                # the following regex is to remove \xa0 and \n and comma from row_item.text
                # xa0 encodes the flag, \n is the newline and comma separates thousands in numbers
                aa = re.sub("(\xa0)|(\n)|,","",row_item.text)
                aa_stripped = aa.strip()
                #append aa to row - note one row entry is being appended
                row.append(aa_stripped)
            # append one row to all_rows
            all_rows.append(row)
        new_df = pd.DataFrame(data=all_rows,columns=headings)
        birth_date = new_df["Date of Birth"][0]
        final_births_list = np.append(final_births_list, birth_date)
    return final_births_list
```

