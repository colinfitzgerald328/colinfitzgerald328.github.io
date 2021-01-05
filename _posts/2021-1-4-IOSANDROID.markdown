---
layout: post
title:  "iOS and Android App Analysis"
date:   2021-1-4 22:01:30 -0800
categories: jekyll update
---

# iOS and Android Data Analysis
By Colin FitzGerald. January 4, 2021.


This was my first formal data science "exploration" project. I did this project through [DataQuest](https://www.dataquest.io/).
While quite fledgling in nature, I was aware I was taking foundations of Data Science (Data 8) and Computational Structures in Data Science (CS88) in the fall. I had not used python before so this project was my introduction to the language.

### This project is meant to analyze iOS and Android app data and its connection to company revenue.
 The revenue for this "specific company" comes from user-ad interaction. This means the more users who use our app — the more users that see and engage with the ads, the better. Our goal for this project is to analyze data to help our developers understand what type of apps are likely to attract more users.

# Goal for this Project
My goal for this project is to better understand Python and to get a taste of the tools of data science and data analysis. Eventually, I hope to be able to write my own projects in python.  


```python
from csv import reader

### The Google Play data set ###
opened_file = open('googleplaystore.csv')
read_file = reader(opened_file)
android = list(read_file)
android_header = android[0]
column_names_android = android_header
android = android[1:]

### The App Store data set ###

opened_file = open('AppleStore.csv')
read_file = reader(opened_file)
ios = list(read_file)
ios_header = ios[0]
column_names_ios = ios_header
ios = ios[1:]
```


```python
def explore_data(dataset, start, end, rows_and_columns=False):
    dataset_slice = dataset[start:end]    
    for row in dataset_slice:
        print(row)
        print('\n') # adds a new (empty) line after each row

    if rows_and_columns:
        print('Number of rows:', len(dataset))
        print('Number of columns:', len(dataset[0]))

explore_data(android, 1, 6, True)
print('\n')

```

    ['Coloring book moana', 'ART_AND_DESIGN', '3.9', '967', '14M', '500,000+', 'Free', '0', 'Everyone', 'Art & Design;Pretend Play', 'January 15, 2018', '2.0.0', '4.0.3 and up']


    ['U Launcher Lite – FREE Live Cool Themes, Hide Apps', 'ART_AND_DESIGN', '4.7', '87510', '8.7M', '5,000,000+', 'Free', '0', 'Everyone', 'Art & Design', 'August 1, 2018', '1.2.4', '4.0.3 and up']


    ['Sketch - Draw & Paint', 'ART_AND_DESIGN', '4.5', '215644', '25M', '50,000,000+', 'Free', '0', 'Teen', 'Art & Design', 'June 8, 2018', 'Varies with device', '4.2 and up']


    ['Pixel Draw - Number Art Coloring Book', 'ART_AND_DESIGN', '4.3', '967', '2.8M', '100,000+', 'Free', '0', 'Everyone', 'Art & Design;Creativity', 'June 20, 2018', '1.1', '4.4 and up']


    ['Paper flowers instructions', 'ART_AND_DESIGN', '4.4', '167', '5.6M', '50,000+', 'Free', '0', 'Everyone', 'Art & Design', 'March 26, 2017', '1.0', '2.3 and up']


    Number of rows: 10841
    Number of columns: 13




The google play dataset has duplicate entries, so we will remove the row at index number 10,472. That index is missing data.


We create two empty lists of which we will add unique apps and duplicate apps.

The for loop below takes in the app name,
which is at index number zero in the android data set
if it is already in the unique apps list, then
it will add the name to the duplicate apps list.


```python
del android[10472]
```


```python
duplicate_apps = []
unique_apps = []


for app in android:
    column_name = app[0]
    if column_name in unique_apps:
        duplicate_apps.append(column_name)
    else:
        unique_apps.append(column_name)

print(duplicate_apps[:10])    
print(len(duplicate_apps))

print('Expected length:', len(android) - 1181)


```

    ['Quick PDF Scanner + OCR FREE', 'Box', 'Google My Business', 'ZOOM Cloud Meetings', 'join.me - Simple Meetings', 'Box', 'Zenefits', 'Google Ads', 'Google My Business', 'Slack']
    1181
    Expected length: 9659


We are not going to remove the duplicates randomly.
The higher the number of reviews, the more recent
the data should be. Rather than removing duplicates randomly, we'll only keep the row with the highest number of reviews and remove the other entries for any given app.


```python
reviews_max = {}

for app in android:
    name = app[0]
    n_reviews = float(app[3])
    if name in reviews_max and reviews_max[name] < n_reviews:
        reviews_max[name] = n_reviews
    elif name not in reviews_max:
        reviews_max[name] = n_reviews


print(len(reviews_max))

android_clean = []
already_added = []

for app in android:
    name = app[0]
    n_reviews = float(app[3])
    if (reviews_max[name] == n_reviews) and (name not in already_added):
        android_clean.append(app)
        already_added.append(name)

explore_data(android_clean, 0, 5, True)


```

    9659
    ['Photo Editor & Candy Camera & Grid & ScrapBook', 'ART_AND_DESIGN', '4.1', '159', '19M', '10,000+', 'Free', '0', 'Everyone', 'Art & Design', 'January 7, 2018', '1.0.0', '4.0.3 and up']


    ['U Launcher Lite – FREE Live Cool Themes, Hide Apps', 'ART_AND_DESIGN', '4.7', '87510', '8.7M', '5,000,000+', 'Free', '0', 'Everyone', 'Art & Design', 'August 1, 2018', '1.2.4', '4.0.3 and up']


    ['Sketch - Draw & Paint', 'ART_AND_DESIGN', '4.5', '215644', '25M', '50,000,000+', 'Free', '0', 'Teen', 'Art & Design', 'June 8, 2018', 'Varies with device', '4.2 and up']


    ['Pixel Draw - Number Art Coloring Book', 'ART_AND_DESIGN', '4.3', '967', '2.8M', '100,000+', 'Free', '0', 'Everyone', 'Art & Design;Creativity', 'June 20, 2018', '1.1', '4.4 and up']


    ['Paper flowers instructions', 'ART_AND_DESIGN', '4.4', '167', '5.6M', '50,000+', 'Free', '0', 'Everyone', 'Art & Design', 'March 26, 2017', '1.0', '2.3 and up']


    Number of rows: 9659
    Number of columns: 13


Now we need to remove the strings that are of foreign characters. To do this, we will isolate the unicode number of each character with a for loop, running through each character of a word one at a time, and checking whether or not the value exceeds 127, or the upper limit of English characters. However, we must be careful to account for emojis and special characters like the trademark symbol.  


```python
def string_check(string):
    non_asc = 0
    for character in string:
        if ord(character) > 127:
            non_asc += 1
    if non_asc > 3:
        return False  

    return True

print(string_check('Instagram'))
print(string_check('a奇艺PPS -《欢乐颂2》电视剧热播'))
print(string_check('Docs To Go™ Free Office Suite'))
print(string_check('Instachat 😜'))
```

    True
    False
    True
    True



```python
android_english_apps = []

ios_english_apps = []

for app in android_clean:
    name = app[0]
    if string_check(name):  
        android_english_apps.append(app)


for app in ios:
    name = app[1]
    if string_check(name):  
        ios_english_apps.append(app)

explore_data(android_english_apps, 0, 3, True)
print('\n')
explore_data(ios_english_apps, 0, 3, True)
```

    ['Photo Editor & Candy Camera & Grid & ScrapBook', 'ART_AND_DESIGN', '4.1', '159', '19M', '10,000+', 'Free', '0', 'Everyone', 'Art & Design', 'January 7, 2018', '1.0.0', '4.0.3 and up']


    ['U Launcher Lite – FREE Live Cool Themes, Hide Apps', 'ART_AND_DESIGN', '4.7', '87510', '8.7M', '5,000,000+', 'Free', '0', 'Everyone', 'Art & Design', 'August 1, 2018', '1.2.4', '4.0.3 and up']


    ['Sketch - Draw & Paint', 'ART_AND_DESIGN', '4.5', '215644', '25M', '50,000,000+', 'Free', '0', 'Teen', 'Art & Design', 'June 8, 2018', 'Varies with device', '4.2 and up']


    Number of rows: 9614
    Number of columns: 13


    ['284882215', 'Facebook', '389879808', 'USD', '0.0', '2974676', '212', '3.5', '3.5', '95.0', '4+', 'Social Networking', '37', '1', '29', '1']


    ['389801252', 'Instagram', '113954816', 'USD', '0.0', '2161558', '1289', '4.5', '4.0', '10.23', '12+', 'Photo & Video', '37', '0', '29', '1']


    ['529479190', 'Clash of Clans', '116476928', 'USD', '0.0', '2130805', '579', '4.5', '4.5', '9.24.12', '9+', 'Games', '38', '5', '18', '1']


    Number of rows: 6183
    Number of columns: 16



```python
android_final = []
ios_final = []

for app in android_english_apps:
    price = app[7]
    if price == '0':
        android_final.append(app)

for app in ios_english_apps:
    price = app[4]
    if price == '0.0':
        ios_final.append(app)

print(len(android_final))
print(len(ios_final))
```

    8864
    3222


As we mentioned in the introduction, our aim is to determine the kinds of apps that are likely to attract more users because our revenue is highly influenced by the number of people using our apps.

To minimize risks and overhead, our validation strategy for an app idea is comprised of three steps:

1. Build a minimal Android version of the app, and add it to Google Play.
2. If the app has a good response from users, we develop it further.
3. If the app is profitable after six months, we build an iOS version of the app and add it to the App Store.

Because our end goal is to add the app on both Google Play and the App Store, we need to find app profiles that are successful on both markets. For instance, a profile that works well for both markets might be a productivity app that makes use of gamification.

Some columns we may use to generate frequency tables to determine which are the most common genres on the market are:

The number of installs (available in the android dataset) or the content rating (iOS and android).



```python
def freq_table(dataset, index):

    app_percentages = {}

    for row in dataset[1:]:
        app_name = str(row[index])
        if app_name in app_percentages:
            app_percentages[app_name] += 1
        else:
            app_percentages[app_name] = 1

    total_number = sum(app_percentages.values())
    for i in app_percentages:
        app_percentages[i] /= total_number
        app_percentages[i] *= 100

    return app_percentages


print(freq_table(android_clean, 1))

def display_table(dataset, index):
    table = freq_table(dataset, index)
    table_display = []
    for key in table:
        key_val_as_tuple = (table[key], key)
        table_display.append(key_val_as_tuple)

    table_sorted = sorted(table_display, reverse = True)
    for entry in table_sorted:
        print(entry[1], ':', entry[0])
```

    {'BEAUTY': 0.5487678608407538, 'PRODUCTIVITY': 3.8724373576309796, 'ENTERTAINMENT': 0.9008076206253882, 'EDUCATION': 1.1078898322634085, 'FAMILY': 19.403603230482503, 'PARENTING': 0.6212466349140608, 'COMICS': 0.5798301925864567, 'HEALTH_AND_FITNESS': 2.9819838475874922, 'DATING': 1.7601987989231724, 'COMMUNICATION': 3.26154483329882, 'BUSINESS': 4.348726444398427, 'SPORTS': 3.36508593911783, 'NEWS_AND_MAGAZINES': 2.629944087802858, 'FINANCE': 3.57216815075585, 'FOOD_AND_DRINK': 1.1596603851729135, 'TOOLS': 8.583557672395942, 'BOOKS_AND_REFERENCE': 2.2986125491820255, 'TRAVEL_AND_LOCAL': 2.2675502174363222, 'VIDEO_PLAYERS': 1.6980741354317663, 'LIBRARIES_AND_DEMO': 0.8697452888796852, 'MEDICAL': 4.089873679850901, 'PHOTOGRAPHY': 2.909505073514185, 'PERSONALIZATION': 3.8931455787947815, 'LIFESTYLE': 3.8206668047214745, 'WEATHER': 0.8179747359701802, 'GAME': 9.79498861047836, 'SHOPPING': 2.091530337544005, 'SOCIAL': 2.4746324290743424, 'AUTO_AND_VEHICLES': 0.8800993994615862, 'EVENTS': 0.662663077241665, 'ART_AND_DESIGN': 0.6212466349140608, 'MAPS_AND_NAVIGATION': 1.356388486229033, 'HOUSE_AND_HOME': 0.755850072478774}



```python
display_table(ios_final, 11)
```

    Games : 58.180689226948154
    Entertainment : 7.885749767153058
    Photo & Video : 4.967401428127911
    Education : 3.6634585532443342
    Social Networking : 3.2598571872089415
    Shopping : 2.607885749767153
    Utilities : 2.5147469729897547
    Sports : 2.1421918658801617
    Music : 2.049053089102763
    Health & Fitness : 2.018006830176964
    Productivity : 1.7385904998447685
    Lifestyle : 1.5833592052157717
    News : 1.334989133809376
    Travel : 1.2418503570319777
    Finance : 1.11766532132878
    Weather : 0.8692952499223843
    Food & Drink : 0.8072027320707855
    Reference : 0.55883266066439
    Business : 0.5277864017385905
    Book : 0.43464762496119214
    Navigation : 0.18627755355479667
    Medical : 0.18627755355479667
    Catalogs : 0.12418503570319776


# iOS App Analysis

What is the most common genre? Games by far. More than half of the app genres are Games!! The runner-up is entertainment, which makes sense intuitively.

The general impression of the iOS app store is that most of the apps are designed for entertainment purposes.

Based on this frequency alone, it seems pretty logical to recommend the game category if one was to create an app.

Now we will display the genre category data  for the Google Play Store.


```python
display_table(android_final, 9)
```


```python
display_table(android_final, 1)
```

    FAMILY : 18.910075595170937
    GAME : 9.725826469592688
    TOOLS : 8.462146000225657
    BUSINESS : 4.592124562789123
    LIFESTYLE : 3.9038700214374367
    PRODUCTIVITY : 3.8925871601038025
    FINANCE : 3.7007785174320205
    MEDICAL : 3.5315355974275078
    SPORTS : 3.396141261423897
    PERSONALIZATION : 3.317161232088458
    COMMUNICATION : 3.2381812027530184
    HEALTH_AND_FITNESS : 3.0802211440821394
    PHOTOGRAPHY : 2.944826808078529
    NEWS_AND_MAGAZINES : 2.798149610741284
    SOCIAL : 2.6627552747376737
    TRAVEL_AND_LOCAL : 2.335552296062281
    SHOPPING : 2.245289405393208
    BOOKS_AND_REFERENCE : 2.1437436533904997
    DATING : 1.8616721200496444
    VIDEO_PLAYERS : 1.7939749520478394
    MAPS_AND_NAVIGATION : 1.399074805370642
    FOOD_AND_DRINK : 1.241114746699763
    EDUCATION : 1.1621347173643235
    ENTERTAINMENT : 0.9590432133589079
    LIBRARIES_AND_DEMO : 0.9364774906916393
    AUTO_AND_VEHICLES : 0.9251946293580051
    HOUSE_AND_HOME : 0.8236488773552973
    WEATHER : 0.8010831546880289
    EVENTS : 0.7108202640189552
    PARENTING : 0.6544059573507841
    ART_AND_DESIGN : 0.6318402346835158
    COMICS : 0.6205573733498815
    BEAUTY : 0.5979916506826132


# Google Play Store Analysis

The most common genre for the google play store is "Family." Games and tools are the next most common apps. Based on this information, I would recommend the category Family, as it is a clear outlier of a percentage.

Compared to the iOS app store, the google play store has a more balanced dynamic. Whereas the iOS app store heavily favors games and entertainment based apps, the google play store only has one clear outlier. The rest of the genres fall in line at similar percentages.

### The frequency tables we just generated reveal the most frequent app genres, not the genres that have the most users.


```python
prime_genre = freq_table(ios_final, 11)



for genre in prime_genre:
    total = 0
    len_genre = 0
    for app in ios_final:
        genre_app = app[11]
        if genre_app == genre:            
            number_of_ratings = float(app[5])
            total += number_of_ratings
            len_genre += 1
    avg_number_of_ratings = total / len_genre
    print(genre, ':', avg_number_of_ratings)

```

    News : 21248.023255813954
    Medical : 612.0
    Music : 57326.530303030304
    Education : 7003.983050847458
    Business : 7491.117647058823
    Photo & Video : 28441.54375
    Utilities : 18684.456790123455
    Food & Drink : 33333.92307692308
    Entertainment : 14029.830708661417
    Social Networking : 71548.34905660378
    Travel : 28243.8
    Shopping : 26919.690476190477
    Productivity : 21028.410714285714
    Navigation : 86090.33333333333
    Catalogs : 4004.0
    Sports : 23008.898550724636
    Book : 39758.5
    Games : 22788.6696905016
    Reference : 74942.11111111111
    Lifestyle : 16485.764705882353
    Health & Fitness : 23298.015384615384
    Finance : 31467.944444444445
    Weather : 52279.892857142855


# Results Analysis

App profile recommendation: Navigation.


```python
category_freq = freq_table(android_final, 1)

for category in category_freq:
    total = 0
    len_category = 0

    for app in android_final:
        category_app = app[1]
        if category_app == category:
            number_of_installs = (app[5])
            number_of_installs = number_of_installs.replace('+', '')
            number_of_installs = number_of_installs.replace(',', '')
            number_of_installs = float(number_of_installs)
            total += number_of_installs
            len_category += 1

    avg_number_of_installs = total / len_category
    print(category, ':', avg_number_of_installs)
```

    BEAUTY : 513151.88679245283
    PRODUCTIVITY : 16787331.344927534
    ENTERTAINMENT : 11640705.88235294
    EDUCATION : 1833495.145631068
    FAMILY : 3695641.8198090694
    PARENTING : 542603.6206896552
    COMICS : 817657.2727272727
    HEALTH_AND_FITNESS : 4188821.9853479853
    DATING : 854028.8303030303
    COMMUNICATION : 38456119.167247385
    BUSINESS : 1712290.1474201474
    SPORTS : 3638640.1428571427
    NEWS_AND_MAGAZINES : 9549178.467741935
    FINANCE : 1387692.475609756
    FOOD_AND_DRINK : 1924897.7363636363
    TOOLS : 10801391.298666667
    BOOKS_AND_REFERENCE : 8767811.894736841
    TRAVEL_AND_LOCAL : 13984077.710144928
    VIDEO_PLAYERS : 24727872.452830188
    LIBRARIES_AND_DEMO : 638503.734939759
    MEDICAL : 120550.61980830671
    PHOTOGRAPHY : 17840110.40229885
    PERSONALIZATION : 5201482.6122448975
    LIFESTYLE : 1437816.2687861272
    WEATHER : 5074486.197183099
    GAME : 15588015.603248259
    SHOPPING : 7036877.311557789
    SOCIAL : 23253652.127118643
    AUTO_AND_VEHICLES : 647317.8170731707
    EVENTS : 253542.22222222222
    ART_AND_DESIGN : 1986335.0877192982
    MAPS_AND_NAVIGATION : 4056941.7741935486
    HOUSE_AND_HOME : 1331540.5616438356


# App Recommendation for Google Play

Again, productivity and entertainment seem to be the categories of apps with the most possible potential. Once again, the stats confimsheer intuition  


```python

```
