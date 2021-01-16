---
layout: single
title:  "Data Science Analysis of Running Form"
date:   2021-01-21 05:04:00 -0800
excerpt: "My first project implementing simple data science analysis of GPS data."
categories: 
  - tutorial
  - pinned

toc: true
---

# Analyzing the Correlation Between Running Stride Length and Average Pace Per Mile


```python
from datascience import *
%matplotlib inline
import matplotlib.pyplot as plots
plots.style.use('fivethirtyeight')
import numpy as np
```

# Importing the Data

The data generating process was as follows: I went on my run. Once I finished my run, I saved it. I uploaded the run to my iPhone via bluetooth. Once the running data uploaded, I exported a CSV file of the data to my computer.

Here is a link to the [google sheets version](https://drive.google.com/file/d/1lkrTW4mS5EdYcq0NKE17-w8q00bJJj8y/view?usp=sharing) of the data. For reference, the watch I used to collect this data is the [COROS Pace 2](https://www.coros.com/pace2.php). 

As a side note, this statistical analysis only takes into account one run. In the future I plan to run a more comprehensive analysis because it is essential to have a variety of data to truly prove a statistical relationship. However, this is a good jumping-off point.

The following running data is from an 18 mile long run. I started at 6:39 mile pace and closed in 5:27 for the last mile. As it was progressive, I chose to analyze the linear relationship between stride length as running pace increases. For the actual analysis, I used the column that contains minutes per kilometer rather than minutes per mile. We are also, for the purpose of this project, holding constant external factors such as elevation gain per mile, heart rate, and prior muscle fatigue.


```python
progressive_longrun_data = Table.read_table("ProgressiveLongRun.csv")
progressive_cleaned = progressive_longrun_data.take(np.arange(0,18,1))
progressive_cleaned.show()
```


<table border="1" class="dataframe">
    <thead>
        <tr>
            <th>Split</th> <th>Time</th> <th>Moving Time</th> <th>Distance</th> <th>Elevation Gain</th> <th>Elev Loss</th> <th>Avg Pace</th> <th>Avg Moving Pace</th> <th>Best Pace</th> <th>Avg Run Cadence</th> <th>Max Run Cadence</th> <th>Avg Stride Length</th> <th>Avg HR</th> <th>Max HR</th> <th>Avg Temperature</th> <th>Calories</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1    </td> <td>0:06:39</td> <td>0:06:39    </td> <td>1.61    </td> <td>0             </td> <td>31       </td> <td>0:04:08 </td> <td>0:04:05        </td> <td>0:03:39  </td> <td>82             </td> <td>84             </td> <td>148              </td> <td>128   </td> <td>147   </td> <td>24             </td> <td>48      </td>
        </tr>
        <tr>
            <td>2    </td> <td>0:06:33</td> <td>0:06:33    </td> <td>1.61    </td> <td>6             </td> <td>30       </td> <td>0:04:04 </td> <td>0:04:03        </td> <td>0:03:46  </td> <td>82             </td> <td>83             </td> <td>150              </td> <td>141   </td> <td>145   </td> <td>22             </td> <td>63      </td>
        </tr>
        <tr>
            <td>3    </td> <td>0:06:33</td> <td>0:06:33    </td> <td>1.61    </td> <td>27            </td> <td>21       </td> <td>0:04:04 </td> <td>0:04:08        </td> <td>0:03:47  </td> <td>83             </td> <td>86             </td> <td>149              </td> <td>149   </td> <td>154   </td> <td>20             </td> <td>59      </td>
        </tr>
        <tr>
            <td>4    </td> <td>0:06:31</td> <td>0:06:31    </td> <td>1.61    </td> <td>16            </td> <td>31       </td> <td>0:04:03 </td> <td>0:04:04        </td> <td>0:03:54  </td> <td>82             </td> <td>85             </td> <td>150              </td> <td>151   </td> <td>153   </td> <td>21             </td> <td>70      </td>
        </tr>
        <tr>
            <td>5    </td> <td>0:06:33</td> <td>0:06:33    </td> <td>1.61    </td> <td>56            </td> <td>15       </td> <td>0:04:04 </td> <td>0:04:06        </td> <td>0:03:14  </td> <td>84             </td> <td>89             </td> <td>147              </td> <td>148   </td> <td>156   </td> <td>21             </td> <td>58      </td>
        </tr>
        <tr>
            <td>6    </td> <td>0:06:31</td> <td>0:06:31    </td> <td>1.61    </td> <td>5             </td> <td>31       </td> <td>0:04:03 </td> <td>0:04:02        </td> <td>0:03:52  </td> <td>82             </td> <td>85             </td> <td>150              </td> <td>155   </td> <td>165   </td> <td>23             </td> <td>72      </td>
        </tr>
        <tr>
            <td>7    </td> <td>0:06:29</td> <td>0:06:29    </td> <td>1.61    </td> <td>49            </td> <td>0        </td> <td>0:04:02 </td> <td>0:04:01        </td> <td>0:03:51  </td> <td>84             </td> <td>87             </td> <td>148              </td> <td>167   </td> <td>172   </td> <td>23             </td> <td>70      </td>
        </tr>
        <tr>
            <td>8    </td> <td>0:06:31</td> <td>0:06:27    </td> <td>1.61    </td> <td>34            </td> <td>4        </td> <td>0:04:00 </td> <td>0:04:01        </td> <td>0:03:47  </td> <td>84             </td> <td>86             </td> <td>148              </td> <td>165   </td> <td>173   </td> <td>24             </td> <td>68      </td>
        </tr>
        <tr>
            <td>9    </td> <td>0:06:27</td> <td>0:06:27    </td> <td>1.61    </td> <td>7             </td> <td>29       </td> <td>0:04:00 </td> <td>0:04:01        </td> <td>0:03:48  </td> <td>83             </td> <td>85             </td> <td>151              </td> <td>159   </td> <td>167   </td> <td>25             </td> <td>65      </td>
        </tr>
        <tr>
            <td>10   </td> <td>0:06:21</td> <td>0:06:21    </td> <td>1.61    </td> <td>0             </td> <td>34       </td> <td>0:03:57 </td> <td>0:03:57        </td> <td>0:03:52  </td> <td>83             </td> <td>84             </td> <td>154              </td> <td>162   </td> <td>170   </td> <td>25             </td> <td>78      </td>
        </tr>
        <tr>
            <td>11   </td> <td>0:06:15</td> <td>0:06:15    </td> <td>1.61    </td> <td>0             </td> <td>35       </td> <td>0:03:53 </td> <td>0:03:53        </td> <td>0:03:38  </td> <td>83             </td> <td>85             </td> <td>155              </td> <td>165   </td> <td>169   </td> <td>25             </td> <td>69      </td>
        </tr>
        <tr>
            <td>12   </td> <td>0:06:12</td> <td>0:06:12    </td> <td>1.61    </td> <td>34            </td> <td>24       </td> <td>0:03:51 </td> <td>0:03:53        </td> <td>0:03:37  </td> <td>84             </td> <td>88             </td> <td>154              </td> <td>165   </td> <td>170   </td> <td>24             </td> <td>68      </td>
        </tr>
        <tr>
            <td>13   </td> <td>0:06:05</td> <td>0:06:05    </td> <td>1.61    </td> <td>15            </td> <td>32       </td> <td>0:03:47 </td> <td>0:03:49        </td> <td>0:03:28  </td> <td>84             </td> <td>89             </td> <td>157              </td> <td>159   </td> <td>167   </td> <td>24             </td> <td>66      </td>
        </tr>
        <tr>
            <td>14   </td> <td>0:05:55</td> <td>0:05:55    </td> <td>1.61    </td> <td>46            </td> <td>17       </td> <td>0:03:41 </td> <td>0:03:41        </td> <td>0:02:46  </td> <td>86             </td> <td>90             </td> <td>159              </td> <td>164   </td> <td>176   </td> <td>23             </td> <td>67      </td>
        </tr>
        <tr>
            <td>15   </td> <td>0:05:51</td> <td>0:05:51    </td> <td>1.61    </td> <td>17            </td> <td>30       </td> <td>0:03:38 </td> <td>0:03:39        </td> <td>0:03:23  </td> <td>84             </td> <td>86             </td> <td>163              </td> <td>168   </td> <td>173   </td> <td>24             </td> <td>71      </td>
        </tr>
        <tr>
            <td>16   </td> <td>0:05:46</td> <td>0:05:46    </td> <td>1.61    </td> <td>48            </td> <td>1        </td> <td>0:03:35 </td> <td>0:03:38        </td> <td>0:03:29  </td> <td>87             </td> <td>89             </td> <td>162              </td> <td>171   </td> <td>177   </td> <td>23             </td> <td>72      </td>
        </tr>
        <tr>
            <td>17   </td> <td>0:05:39</td> <td>0:05:39    </td> <td>1.61    </td> <td>38            </td> <td>5        </td> <td>0:03:31 </td> <td>0:03:32        </td> <td>0:03:24  </td> <td>86             </td> <td>89             </td> <td>165              </td> <td>172   </td> <td>179   </td> <td>23             </td> <td>61      </td>
        </tr>
        <tr>
            <td>18   </td> <td>0:05:27</td> <td>0:05:27    </td> <td>1.61    </td> <td>9             </td> <td>22       </td> <td>0:03:23 </td> <td>0:03:21        </td> <td>0:02:53  </td> <td>87             </td> <td>91             </td> <td>169              </td> <td>173   </td> <td>180   </td> <td>24             </td> <td>74      </td>
        </tr>
    </tbody>
</table>


# Initial Visualization of the Data

We want to look at an initial visualization of the data so that we can see if there are any obvious patterns. Upon initial inspection, there looks to be good possibility for a linear relationship between average running pace and average stride length.


```python
progressive_cleaned.scatter("Avg Pace", "Avg Stride Length")
plots.xlabel("Average Running Pace (Minutes per Kilometer)")
plots.ylabel("Average Stride Length (Centimeters)")
```




    Text(0, 0.5, 'Average Stride Length (Centimeters)')




![png](/assets/images/output_7_1.png)


In the initial visualization of the data, it becomes apparent that the minutes and second display on the x axis isn't very elegant. Consequently, I spent the following lines of code converting the average pace per kilometer from a minutes and seconds version to purely seconds form.


```python
import datetime
```


```python
string_version = [str(i) for i in progressive_cleaned.column("Avg Pace")]
#modifying the running time in minutes per kilometer from elements in a numpy array to individual strings
```


```python
updated_list = []
#creating an empty list that we can append the datetime version of the strings to
for i in string_version:
    date_time_version = datetime.datetime.strptime(i, "%H:%M:%S")
    updated_list.append(date_time_version)
```


```python
updated_list
```


```python
final_list = []
#the final list for which we are going to append the time in seconds per kilometer
for i in updated_list:
    a_timedelta = i - datetime.datetime(1900, 1, 1)
    seconds = a_timedelta.total_seconds()
    final_list.append(int(seconds))
```





```python
running_pace_vs_stride_length = Table().with_column("Average Running Pace", final_list).with_column("Average Stride Length", progressive_cleaned.column("Avg Stride Length"))
```


```python
running_pace_vs_stride_length.show()
```


<table border="1" class="dataframe">
    <thead>
        <tr>
            <th>Average Running Pace</th> <th>Average Stride Length</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>248                 </td> <td>148                  </td>
        </tr>
        <tr>
            <td>244                 </td> <td>150                  </td>
        </tr>
        <tr>
            <td>244                 </td> <td>149                  </td>
        </tr>
        <tr>
            <td>243                 </td> <td>150                  </td>
        </tr>
        <tr>
            <td>244                 </td> <td>147                  </td>
        </tr>
        <tr>
            <td>243                 </td> <td>150                  </td>
        </tr>
        <tr>
            <td>242                 </td> <td>148                  </td>
        </tr>
        <tr>
            <td>240                 </td> <td>148                  </td>
        </tr>
        <tr>
            <td>240                 </td> <td>151                  </td>
        </tr>
        <tr>
            <td>237                 </td> <td>154                  </td>
        </tr>
        <tr>
            <td>233                 </td> <td>155                  </td>
        </tr>
        <tr>
            <td>231                 </td> <td>154                  </td>
        </tr>
        <tr>
            <td>227                 </td> <td>157                  </td>
        </tr>
        <tr>
            <td>221                 </td> <td>159                  </td>
        </tr>
        <tr>
            <td>218                 </td> <td>163                  </td>
        </tr>
        <tr>
            <td>215                 </td> <td>162                  </td>
        </tr>
        <tr>
            <td>211                 </td> <td>165                  </td>
        </tr>
        <tr>
            <td>203                 </td> <td>169                  </td>
        </tr>
    </tbody>
</table>



```python
running_pace_vs_stride_length.scatter("Average Running Pace", "Average Stride Length")
plots.xlabel("Average Running Pace (Seconds per Kilometer)")
plots.ylabel("Average Stride Length (Centimeters)")
```




    Text(0, 0.5, 'Average Stride Length (Centimeters)')




![png](/assets/images/output_17_1.png)


Now we have cleaned the data, dropped the unnecessary parts, and have a simple visualization of what we are going to look at in further detail. We have a two column table containing what we would like to analyze for this particular moment. Time for some statistical testing.


```python
# Creating some functions that we will use to analyze the data.
#We need standard units so that we can run our correlation function.

def standard_units(x):
    """ Converts an array x to standard units """
    return (x - np.mean(x)) / np.std(x)

def correlation(t, x, y):
    """ Computes correlation: t is a table, and x and y are column names """
    x_su = standard_units(t.column(x))
    y_su = standard_units(t.column(y))
    return np.mean(x_su * y_su)
```


```python
#generating the correlation coefficient
correlation(running_pace_vs_stride_length, "Average Running Pace", "Average Stride Length")
```




    -0.9819409345425044



Wow! We generated a correlation coefficient of -0.98, which means there is almost an exactly proportionate decrease in stride length for an increase in the amount of seconds it take to complete each kilometer! However, a correlation coefficient alone is not enough. We need to also look at a linear regression line and plot the residuals.


```python
#our slope and intercept functions
def slope(t, x, y):
    """ Computes the slope of the regression line, like correlation above """
    r = correlation(t, x, y)
    y_sd = np.std(t.column(y))
    x_sd = np.std(t.column(x))
    return r * y_sd / x_sd

def intercept(t, x, y):
    """ Computes the intercept of the regression line, like slope above """
    x_mean = np.mean(t.column(x))
    y_mean = np.mean(t.column(y))
    return y_mean - slope(t, x, y)*x_mean
```


```python
slope_for_regression_line = slope(running_pace_vs_stride_length, "Average Running Pace", "Average Stride Length")
slope_for_regression_line
```




    -0.48736086175942556




```python
intercept_for_regression_line = intercept(running_pace_vs_stride_length, "Average Running Pace", "Average Stride Length")
intercept_for_regression_line
```




    267.67321364452425




```python
#generating the predicted stride length from running pace and adding that to the table
predictions = slope_for_regression_line * running_pace_vs_stride_length.column("Average Running Pace") + intercept_for_regression_line
```


```python
predictions
```




    array([146.80771993, 148.75716338, 148.75716338, 149.24452424,
           148.75716338, 149.24452424, 149.7318851 , 150.70660682,
           150.70660682, 152.16868941, 154.11813285, 155.09285458,
           157.04229803, 159.9664632 , 161.42854578, 162.89062837,
           164.84007181, 168.73895871])




```python
run_with_predictions = running_pace_vs_stride_length.with_column("Predicted Stride Length", predictions)
```


```python
run_with_errors = run_with_predictions.with_column("Error", run_with_predictions.column("Average Stride Length") - run_with_predictions.column("Predicted Stride Length"))
```


```python
run_with_errors.show()
```


<table border="1" class="dataframe">
    <thead>
        <tr>
            <th>Average Running Pace</th> <th>Average Stride Length</th> <th>Predicted Stride Length</th> <th>Error</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>248                 </td> <td>148                  </td> <td>146.808                </td> <td>1.19228  </td>
        </tr>
        <tr>
            <td>244                 </td> <td>150                  </td> <td>148.757                </td> <td>1.24284  </td>
        </tr>
        <tr>
            <td>244                 </td> <td>149                  </td> <td>148.757                </td> <td>0.242837 </td>
        </tr>
        <tr>
            <td>243                 </td> <td>150                  </td> <td>149.245                </td> <td>0.755476 </td>
        </tr>
        <tr>
            <td>244                 </td> <td>147                  </td> <td>148.757                </td> <td>-1.75716 </td>
        </tr>
        <tr>
            <td>243                 </td> <td>150                  </td> <td>149.245                </td> <td>0.755476 </td>
        </tr>
        <tr>
            <td>242                 </td> <td>148                  </td> <td>149.732                </td> <td>-1.73189 </td>
        </tr>
        <tr>
            <td>240                 </td> <td>148                  </td> <td>150.707                </td> <td>-2.70661 </td>
        </tr>
        <tr>
            <td>240                 </td> <td>151                  </td> <td>150.707                </td> <td>0.293393 </td>
        </tr>
        <tr>
            <td>237                 </td> <td>154                  </td> <td>152.169                </td> <td>1.83131  </td>
        </tr>
        <tr>
            <td>233                 </td> <td>155                  </td> <td>154.118                </td> <td>0.881867 </td>
        </tr>
        <tr>
            <td>231                 </td> <td>154                  </td> <td>155.093                </td> <td>-1.09285 </td>
        </tr>
        <tr>
            <td>227                 </td> <td>157                  </td> <td>157.042                </td> <td>-0.042298</td>
        </tr>
        <tr>
            <td>221                 </td> <td>159                  </td> <td>159.966                </td> <td>-0.966463</td>
        </tr>
        <tr>
            <td>218                 </td> <td>163                  </td> <td>161.429                </td> <td>1.57145  </td>
        </tr>
        <tr>
            <td>215                 </td> <td>162                  </td> <td>162.891                </td> <td>-0.890628</td>
        </tr>
        <tr>
            <td>211                 </td> <td>165                  </td> <td>164.84                 </td> <td>0.159928 </td>
        </tr>
        <tr>
            <td>203                 </td> <td>169                  </td> <td>168.739                </td> <td>0.261041 </td>
        </tr>
    </tbody>
</table>



```python
root_mean_squared_error = np.mean(run_with_errors.column("Error") ** 2) ** 0.5
```


```python
root_mean_squared_error
```




    1.2311567965332846




```python
run_with_errors.scatter("Average Running Pace")
```


![png](/assets/images/output_32_0.png)


# Taking A Closer Look at the Residuals

From that plot, we can tell that the trend in the residuals looks good. The aim of any linear regression estimate is to generate residuals that appear as white noise. However, the plot is a little bit zoomed out. Let's manipulate the x and y axis to generate a closer look at the residuals.


```python
run_with_errors.scatter("Average Running Pace", "Error")
```


![png](/assets/images/output_35_0.png)



```python
mean_stride_length = np.mean(run_with_errors.column("Average Stride Length"))
mean_stride_length
```




    154.38888888888889




```python
maximum_error = max(abs(run_with_errors.column("Error")))
maximum_error
```




    2.706606822262131




```python
2 / 154.38
```




    0.012955045990413267




```python
root_mean_squared_error
```




    1.2311567965332846




```python
root_mean_squared_error / mean_stride_length
```




    0.007974387311118792



With this zoomed in look, we can tell that most of our errors hover around the range +- 2. This means that our usual error is around 2 centimeters. That's not a bad error. Given the mean stride length of 154, the predicted percentage of stride length that we will be off by is about 1.3 percent. That's a darn good estimate. If we take into consideration the RMSE of 1.23, we take 1.23 / 154.38 and get a result of 0.007, which is 0.7 percent.

# Conclusion

From analysis of the errors, and correlation coefficient of -0.98, we can conclude that linear prediction is a good indicator for calculating my stride length, given a running pace between 200 and 300 seconds per kilometer.



[Back to Top](#){: .btn .btn--inverse}
