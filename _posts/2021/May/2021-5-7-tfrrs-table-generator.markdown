---
layout: single
title:  "Collegiate Track and Field Data, Summarized"
date:   2021-05-15 05:04:00 -0800
excerpt: "Some data analysis. Project updates daily to weekly depending on my availability."
categories: 
  - data science
  - pinned

toc: true
---


# Statistical Updates - Collegiate Track and Field 

By Colin FitzGerald

*Author's Note: This page will be updated weekly as new data becomes available.* 

*Page last updated: 5/16/2021 at 10:09 P.M.*

As I watched the times go up on the board, I couldn't believe my eyes. 

> "That many guys broke 3:40?!"


I couldn't believe it. Then again, maybe I could. 

With the release of Nike's new Dragonfly and Air Zoom Victory spikes, the running world has experienced a new depth of speed across the board. The shockingness of the results of each meet parallel those of 2017, when Nike first released the Vaporfly. 

When new shoe technology is released, people are quick to question the credibility of performance. 
> Are we experiencing advancements in diet, coaching, and training that account for the sheer depth and difference in times?
> Is there a new miracle drug?
> How can we explain this insanity?

Those are all questions I, among others, ask myself as a fan of track and field. 

This year's depth across distance events from 800 meters to 10,000 has been remarkable. 
Times that used to be considered "other-worldly" are now commonly run in a prelim heat.

Go back to the 2016 Olympic Trials.

 The very best runners lined up and went toe to toe in the final of the men's 1500m. The result? A commanding win by Matthew Centrowitz. The time? 3:34.09, with a 53.95 final lap. 

By comparison, Yared Nuguse just soloed a 3:34.68 in the prelims of the Men's 1500m at ACC's. 

That got me thinking, is there any way that I can prove that the results of this year are statistically different than those of the past? 

I went to work and created the project below, which shows the different statistics from 800m to 10,000m, starting in 2012 and ending with this year. 

The project and this page will be updated over time as I continue to do work and develop more overall functionality of the project. Here is what I have so far: 

# The Project 
 

The TFRRS website has an archive page that contains the NCAA Track and Field Outdoor Final Qualifying lists for every year since 2012. 

The following functions reproduce those tables from the TFRRS website into pandas dataframes that can be directly manipulated for the purpose of data visualization. 

I decided to do the data collection process this way so that I do not have to download each dataset to my computer, but rather I can pull it for each year directly to python. 

I spent time studying the TFRRS website in order to properly configure my web scraper. The following functions are a cleaned and robust version of several python jupyter notebooks.  

The first function below generates the URL on the TFRRS website. You input a year as a string, and the function will search the TFRRS archive HTML for the correct link to the outdoor performance list for that year. 


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


The event_dictionary maps the TFRRS website HTML "div" classes to their respective disciplines. The event_code_generator is the function that, as you will see later in the code, implements that dictionary. Having the event dictionary allows our table generator to be more robust and abstract. 

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
The table generator function generates a table from the URL created from the input year. However, the table is a bunch of gobbldy-gook html, so we need a couple more functions to recover the original table. I also created a separate one for the year 2021, because that data is still updating as the season completes. This way, as meets are completed and new data is uploaded to TFRRS, my functions will automatically update. 

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
The twenty_twenty_one table generator was built specifically for this year, because that information is contained on a different base URL, and is currently updating on a weekly or daily basis. 

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

The split minutes and seconds function turns the time string into a float. For example, a time such as "3:39.7" would be converted to 219.7. The reason for this is that it makes the data visualization process easier. The function by itself does not make much sense because it is used in conjunction with the table formatter function. 


```python
def split_minutes_and_seconds(time_str):
        """Get Seconds from time."""
        split_list = (time_str.split(":"))
        return int(split_list[0])*60 + float(split_list[1])
```
The table formatter creates the tables themselves. 

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
The TFRRS table generator function combines all of the above functions to properly create the table for a specific year and event. 

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

Heres an example: 


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




Now that we have all of the functions written, let's look at cleaned kernel density plots for each event, 800m to 10,000m, compared from 2012 until now. 

For these kernel density plots, we need to compile a list of the times for each event for each year. We will store each year's data in an array. Finally, we will produce arrays for each year.   


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

The code cell above generates all of the times for every year, from events 800m - 10,000m. It works properly. This is verified by the summary statistics print-out for each event. Now it's time to generate the proper values for each year.  


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

## 800m Kernel Density 






    
![png](/assets/images/Web Scraper/output_20_1.png)
    


The kernel density for the 800m, years 2012-2021. 







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
      <th>2012</th>
      <th>2013</th>
      <th>2014</th>
      <th>2015</th>
      <th>2016</th>
      <th>2017</th>
      <th>2018</th>
      <th>2019</th>
      <th>2021</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>count</th>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.00000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
    </tr>
    <tr>
      <th>mean</th>
      <td>50.500000</td>
      <td>108.741600</td>
      <td>109.148700</td>
      <td>108.85960</td>
      <td>108.378000</td>
      <td>108.189200</td>
      <td>108.419100</td>
      <td>108.629700</td>
      <td>108.754000</td>
      <td>108.403100</td>
    </tr>
    <tr>
      <th>std</th>
      <td>29.011492</td>
      <td>1.044447</td>
      <td>0.850278</td>
      <td>0.96219</td>
      <td>1.061886</td>
      <td>1.155218</td>
      <td>1.211719</td>
      <td>1.154088</td>
      <td>1.128423</td>
      <td>1.019719</td>
    </tr>
    <tr>
      <th>min</th>
      <td>1.000000</td>
      <td>104.750000</td>
      <td>106.200000</td>
      <td>105.35000</td>
      <td>105.580000</td>
      <td>104.630000</td>
      <td>103.730000</td>
      <td>103.250000</td>
      <td>104.760000</td>
      <td>105.160000</td>
    </tr>
    <tr>
      <th>25%</th>
      <td>25.750000</td>
      <td>108.240000</td>
      <td>108.670000</td>
      <td>108.47750</td>
      <td>107.717500</td>
      <td>107.335000</td>
      <td>107.765000</td>
      <td>108.040000</td>
      <td>108.275000</td>
      <td>107.927500</td>
    </tr>
    <tr>
      <th>50%</th>
      <td>50.500000</td>
      <td>109.030000</td>
      <td>109.290000</td>
      <td>109.19500</td>
      <td>108.545000</td>
      <td>108.500000</td>
      <td>108.745000</td>
      <td>108.990000</td>
      <td>108.925000</td>
      <td>108.755000</td>
    </tr>
    <tr>
      <th>75%</th>
      <td>75.250000</td>
      <td>109.495000</td>
      <td>109.810000</td>
      <td>109.56500</td>
      <td>109.252500</td>
      <td>109.142500</td>
      <td>109.302500</td>
      <td>109.452500</td>
      <td>109.610000</td>
      <td>109.190000</td>
    </tr>
    <tr>
      <th>max</th>
      <td>100.000000</td>
      <td>109.890000</td>
      <td>110.210000</td>
      <td>109.90000</td>
      <td>109.730000</td>
      <td>109.690000</td>
      <td>109.830000</td>
      <td>109.870000</td>
      <td>110.060000</td>
      <td>109.530000</td>
    </tr>
  </tbody>
</table>
</div>



### 800m Analysis
2020 is not included because of the pandemic year. As results continue to be run and we head into the post season, let's take note. While the average of this year is not an outlier compared to years past, the depth of the percentiles shows a shift down, to a concentration of faster times. Right now, this year's data is most comparable to 2016. 

## 1500m Kernel Density  






    
![png](/assets/images/Web Scraper/output_25_1.png)
    


The kernel density for the 1500m, years 2012-2021.







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
      <th>2012</th>
      <th>2013</th>
      <th>2014</th>
      <th>2015</th>
      <th>2016</th>
      <th>2017</th>
      <th>2018</th>
      <th>2019</th>
      <th>2021</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>count</th>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
    </tr>
    <tr>
      <th>mean</th>
      <td>50.500000</td>
      <td>223.449200</td>
      <td>223.508700</td>
      <td>223.412600</td>
      <td>222.748600</td>
      <td>222.981800</td>
      <td>223.132800</td>
      <td>222.998600</td>
      <td>223.486600</td>
      <td>220.620800</td>
    </tr>
    <tr>
      <th>std</th>
      <td>29.011492</td>
      <td>1.957686</td>
      <td>1.774577</td>
      <td>1.811622</td>
      <td>1.611957</td>
      <td>1.605672</td>
      <td>1.659264</td>
      <td>2.259134</td>
      <td>2.174883</td>
      <td>2.130243</td>
    </tr>
    <tr>
      <th>min</th>
      <td>1.000000</td>
      <td>216.770000</td>
      <td>218.530000</td>
      <td>216.340000</td>
      <td>218.350000</td>
      <td>217.740000</td>
      <td>215.990000</td>
      <td>215.010000</td>
      <td>217.200000</td>
      <td>214.680000</td>
    </tr>
    <tr>
      <th>25%</th>
      <td>25.750000</td>
      <td>222.592500</td>
      <td>222.247500</td>
      <td>222.602500</td>
      <td>221.987500</td>
      <td>222.275000</td>
      <td>222.355000</td>
      <td>222.402500</td>
      <td>222.927500</td>
      <td>218.990000</td>
    </tr>
    <tr>
      <th>50%</th>
      <td>50.500000</td>
      <td>223.970000</td>
      <td>224.185000</td>
      <td>223.895000</td>
      <td>223.185000</td>
      <td>223.470000</td>
      <td>223.220000</td>
      <td>223.805000</td>
      <td>224.430000</td>
      <td>221.165000</td>
    </tr>
    <tr>
      <th>75%</th>
      <td>75.250000</td>
      <td>224.980000</td>
      <td>224.930000</td>
      <td>224.780000</td>
      <td>224.010000</td>
      <td>224.220000</td>
      <td>224.367500</td>
      <td>224.597500</td>
      <td>224.895000</td>
      <td>222.430000</td>
    </tr>
    <tr>
      <th>max</th>
      <td>100.000000</td>
      <td>225.790000</td>
      <td>225.680000</td>
      <td>225.330000</td>
      <td>224.610000</td>
      <td>224.930000</td>
      <td>225.440000</td>
      <td>225.220000</td>
      <td>225.620000</td>
      <td>223.150000</td>
    </tr>
  </tbody>
</table>
</div>



### 1500m Analysis

2020 is not included because of the pandemic year. The striking characteristics of this graph explain the summary statistics below. This distribution looks as though it has been shifted to the left. Not surprisingly, as verified by the summary statistics, the 75th, 50th, and 25th percentiles have been shifted down. The slowest time in the array for 2021 is over two seconds ahead of that of 2019.

## 5,000m Kernel Density 






    
![png](/assets/images/Web Scraper/output_30_1.png)
    


The kernel density for the 5000m, years 2012-2021. 







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
      <th>2012</th>
      <th>2013</th>
      <th>2014</th>
      <th>2015</th>
      <th>2016</th>
      <th>2017</th>
      <th>2018</th>
      <th>2019</th>
      <th>2021</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>count</th>
      <td>100.000000</td>
      <td>100.00000</td>
      <td>100.000000</td>
      <td>100.00000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
    </tr>
    <tr>
      <th>mean</th>
      <td>50.500000</td>
      <td>833.05800</td>
      <td>834.613000</td>
      <td>833.60200</td>
      <td>832.736000</td>
      <td>832.357000</td>
      <td>833.640000</td>
      <td>831.041000</td>
      <td>831.195000</td>
      <td>821.896000</td>
    </tr>
    <tr>
      <th>std</th>
      <td>29.011492</td>
      <td>10.80636</td>
      <td>10.625248</td>
      <td>9.40652</td>
      <td>9.044129</td>
      <td>8.876655</td>
      <td>8.766822</td>
      <td>10.151828</td>
      <td>9.936428</td>
      <td>8.773674</td>
    </tr>
    <tr>
      <th>min</th>
      <td>1.000000</td>
      <td>798.40000</td>
      <td>795.300000</td>
      <td>806.90000</td>
      <td>800.300000</td>
      <td>804.200000</td>
      <td>797.500000</td>
      <td>798.700000</td>
      <td>805.000000</td>
      <td>799.900000</td>
    </tr>
    <tr>
      <th>25%</th>
      <td>25.750000</td>
      <td>828.00000</td>
      <td>830.400000</td>
      <td>828.90000</td>
      <td>830.250000</td>
      <td>828.725000</td>
      <td>829.600000</td>
      <td>822.850000</td>
      <td>825.525000</td>
      <td>816.425000</td>
    </tr>
    <tr>
      <th>50%</th>
      <td>50.500000</td>
      <td>836.85000</td>
      <td>837.900000</td>
      <td>836.00000</td>
      <td>834.400000</td>
      <td>834.850000</td>
      <td>835.750000</td>
      <td>832.650000</td>
      <td>834.400000</td>
      <td>824.700000</td>
    </tr>
    <tr>
      <th>75%</th>
      <td>75.250000</td>
      <td>841.62500</td>
      <td>842.225000</td>
      <td>840.47500</td>
      <td>839.150000</td>
      <td>838.800000</td>
      <td>840.275000</td>
      <td>839.750000</td>
      <td>839.375000</td>
      <td>828.650000</td>
    </tr>
    <tr>
      <th>max</th>
      <td>100.000000</td>
      <td>844.30000</td>
      <td>846.400000</td>
      <td>845.10000</td>
      <td>844.400000</td>
      <td>842.400000</td>
      <td>844.200000</td>
      <td>843.500000</td>
      <td>843.300000</td>
      <td>832.100000</td>
    </tr>
  </tbody>
</table>
</div>



### 5,000m Analysis

2020 is not included because of the pandemic year. Once again, we see what looks like a kernel density plot that had a linear transformation applied to it. The graph looks like someone physically picked it up and moved it. Compared to 2019, the 2021 75th percentile is about 5.1 seconds faster, the 50th is about 9.1, and the 25th is 9 seconds faster. 

## 10,000m Kernel Density 






    
![png](/assets/images/Web Scraper/output_35_1.png)
    


The kernel density for the 10,000m, years 2012-2021. 






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
      <th>2012</th>
      <th>2013</th>
      <th>2014</th>
      <th>2015</th>
      <th>2016</th>
      <th>2017</th>
      <th>2018</th>
      <th>2019</th>
      <th>2021</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>count</th>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
    </tr>
    <tr>
      <th>mean</th>
      <td>50.500000</td>
      <td>1757.587000</td>
      <td>1766.814000</td>
      <td>1754.033000</td>
      <td>1756.877000</td>
      <td>1758.971000</td>
      <td>1755.463000</td>
      <td>1756.511000</td>
      <td>1746.805000</td>
      <td>1733.517000</td>
    </tr>
    <tr>
      <th>std</th>
      <td>29.011492</td>
      <td>28.643347</td>
      <td>19.773306</td>
      <td>22.069459</td>
      <td>21.690103</td>
      <td>17.572248</td>
      <td>22.791127</td>
      <td>22.929263</td>
      <td>21.014883</td>
      <td>21.015766</td>
    </tr>
    <tr>
      <th>min</th>
      <td>1.000000</td>
      <td>1647.900000</td>
      <td>1672.300000</td>
      <td>1656.700000</td>
      <td>1674.200000</td>
      <td>1672.700000</td>
      <td>1684.900000</td>
      <td>1684.400000</td>
      <td>1691.300000</td>
      <td>1667.200000</td>
    </tr>
    <tr>
      <th>25%</th>
      <td>25.750000</td>
      <td>1749.250000</td>
      <td>1760.375000</td>
      <td>1744.350000</td>
      <td>1745.875000</td>
      <td>1749.650000</td>
      <td>1740.050000</td>
      <td>1748.475000</td>
      <td>1735.625000</td>
      <td>1722.050000</td>
    </tr>
    <tr>
      <th>50%</th>
      <td>50.500000</td>
      <td>1766.700000</td>
      <td>1771.950000</td>
      <td>1757.300000</td>
      <td>1759.800000</td>
      <td>1759.700000</td>
      <td>1761.750000</td>
      <td>1760.000000</td>
      <td>1753.300000</td>
      <td>1737.700000</td>
    </tr>
    <tr>
      <th>75%</th>
      <td>75.250000</td>
      <td>1775.775000</td>
      <td>1780.275000</td>
      <td>1771.575000</td>
      <td>1775.625000</td>
      <td>1772.800000</td>
      <td>1773.800000</td>
      <td>1774.075000</td>
      <td>1763.325000</td>
      <td>1750.675000</td>
    </tr>
    <tr>
      <th>max</th>
      <td>100.000000</td>
      <td>1787.900000</td>
      <td>1787.600000</td>
      <td>1778.900000</td>
      <td>1786.600000</td>
      <td>1782.300000</td>
      <td>1783.400000</td>
      <td>1782.600000</td>
      <td>1772.200000</td>
      <td>1759.500000</td>
    </tr>
  </tbody>
</table>
</div>



### 10,000m Analysis

2020 is not included because of the pandemic year. 

Once again, the 75th, 50th, and 25th percentiles have been shifted, by 12, 9, and 7 seconds, respectively. Check out the charts and study them for a little bit, and see if you notice anything interesting that you think I might have missed. 

## Final Remarks 

I've been analyzing this data since April and it's been a joy to run the kernel density plots each week. It's always a joyous feeling to make predictions and see them come to life in real world scenarios. 

I was talking the ear off of my family members since the first indoor races of the season, telling them that I thought that the spikes would blow open track and field times. According to the data, we are witnessing a new era in track and field. 

While I still give much credit to the athletes for working extremely hard during quarantine, Nike has also done an amazing job with innovation. 

The addition of ZoomX foam to spikes has been transformational, and I think the outdoor seasons in years to come should be quite thrilling. I feel quite confident in saying that I think a world record is possible in the 1500m this year. 

I figured that the new spikes would cause a linear transformation to the dataset densities, and that has been corroborated by each and every plot. It's truly astounding. 

> If you found something in this project interesting, have a criticism/ suggestion on what I can improve, or would like to collaborate on a project, feel free to shoot me an email, colinfitzgerald@berkeley.edu. 

Have a great day. I hope you enjoyed reading this, and thank you for your time. 






[Back to Top](#){: .btn .btn--inverse}