---
layout: single
title:  "Implementing Black Scholes Using Python"
date:   2021-01-21 05:04:00 -0800
excerpt: "Econ 136 Problem Set #2: Creating a Black-Scholes Option Price in Python and Verifying That It Works"
categories: 
  - tutorial


toc: true
---

# Implementing Black Scholes Using Python 


```python
#importing all of the necessary modules that we are going to use 

import numpy as np
import scipy.stats as si
import sympy as sy
from sympy.stats import Normal, cdf
from sympy import init_printing
init_printing()
```

The function below creates our black-scholes option pricer. 


```python
def black_scholes(S, K, T, r, sigma, option = 'call'):
    
    #S: spot price
    #K: strike price
    #T: time to maturity
    #r: interest rate
    #sigma: volatility of underlying asset
    
    d1 = (np.log(S / K) + (r + 0.5 * sigma ** 2) * T) / (sigma * np.sqrt(T))
    d2 = (np.log(S / K) + (r - 0.5 * sigma ** 2) * T) / (sigma * np.sqrt(T))
    
    if option == 'call': 
        call = (S * si.norm.cdf(d1, 0.0, 1.0) - K * np.exp(-r * T) * si.norm.cdf(d2, 0.0, 1.0))
        return call 
    if option == 'put':
        put = (K * np.exp(-r * T) * si.norm.cdf(-d2, 0.0, 1.0) - S * si.norm.cdf(-d1, 0.0, 1.0))
        return put 
```


```python
black_scholes(100, 105, 0.5, 0.06, 0.2783, option = 'call')
```




$\displaystyle 6.999918456914479$



This cell verifies that our black-scholes option pricer is working properly. The goal was to verify that our pricer spits out the same call price that is given on our lecture slides. 


```python
import numpy as np
from datascience import *

# These lines set up graphing capabilities.
import matplotlib
%matplotlib inline
import matplotlib.pyplot as plt
plt.style.use('fivethirtyeight')
import warnings
warnings.simplefilter('ignore', FutureWarning)

from ipywidgets import interact, interactive, fixed, interact_manual
import ipywidgets as widgets
```

Now, we will build a table and use our option pricer to graph our results. 


```python
new_table = Table().with_column("Level of Underlying", np.arange(0,101,10))
```


```python
new_table.show()
```


<table border="1" class="dataframe">
    <thead>
        <tr>
            <th>Level of Underlying</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>0                  </td>
        </tr>
        <tr>
            <td>10                 </td>
        </tr>
        <tr>
            <td>20                 </td>
        </tr>
        <tr>
            <td>30                 </td>
        </tr>
        <tr>
            <td>40                 </td>
        </tr>
        <tr>
            <td>50                 </td>
        </tr>
        <tr>
            <td>60                 </td>
        </tr>
        <tr>
            <td>70                 </td>
        </tr>
        <tr>
            <td>80                 </td>
        </tr>
        <tr>
            <td>90                 </td>
        </tr>
        <tr>
            <td>100                </td>
        </tr>
    </tbody>
</table>



```python
#making sure that our Black-Scholes Option pricer works correctly, so we run a sample output and verify with the slide deck from class
#our given inputs are the following: 
    
    #S: spot price
    #K: strike price
    #T: time to maturity
    #r: interest rate
    #sigma: volatility of underlying asset
```


```python
black_scholes(0.0001, 50, 1, 0.1, 0.39115)
```




$\displaystyle 1.9179745627200469e-246$




```python
time_to_expiration_of_one_year_array = make_array()
for i in np.arange(0, 101, 10): 
    time_to_expiration_of_one_year_array = np.append(time_to_expiration_of_one_year_array, black_scholes(i, 50, 1, 0.1, 0.39115))
```

    <ipython-input-2-76ac2c17deda>:9: RuntimeWarning: divide by zero encountered in log
      d1 = (np.log(S / K) + (r + 0.5 * sigma ** 2) * T) / (sigma * np.sqrt(T))
    <ipython-input-2-76ac2c17deda>:10: RuntimeWarning: divide by zero encountered in log
      d2 = (np.log(S / K) + (r - 0.5 * sigma ** 2) * T) / (sigma * np.sqrt(T))



```python
time_to_expiration_of_one_year_array
```




    array([0.00000000e+00, 1.08176967e-04, 7.77138496e-02, 1.07658328e+00,
           4.30794966e+00, 9.99974419e+00, 1.75336194e+01, 2.62035114e+01,
           3.55074908e+01, 4.51478326e+01, 5.49623485e+01])




```python
new_table = new_table.with_column("Time to Expiration of One Year", time_to_expiration_of_one_year_array)
new_table.show()
```


<table border="1" class="dataframe">
    <thead>
        <tr>
            <th>Level of Underlying</th> <th>Time to Expiration of One Year</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>0                  </td> <td>0                             </td>
        </tr>
        <tr>
            <td>10                 </td> <td>0.000108177                   </td>
        </tr>
        <tr>
            <td>20                 </td> <td>0.0777138                     </td>
        </tr>
        <tr>
            <td>30                 </td> <td>1.07658                       </td>
        </tr>
        <tr>
            <td>40                 </td> <td>4.30795                       </td>
        </tr>
        <tr>
            <td>50                 </td> <td>9.99974                       </td>
        </tr>
        <tr>
            <td>60                 </td> <td>17.5336                       </td>
        </tr>
        <tr>
            <td>70                 </td> <td>26.2035                       </td>
        </tr>
        <tr>
            <td>80                 </td> <td>35.5075                       </td>
        </tr>
        <tr>
            <td>90                 </td> <td>45.1478                       </td>
        </tr>
        <tr>
            <td>100                </td> <td>54.9623                       </td>
        </tr>
    </tbody>
</table>



```python
no_time_to_expiration_array = make_array()
for i in np.arange(0, 101, 10): 
    no_time_to_expiration_array = np.append(no_time_to_expiration_array, black_scholes(i, 50, 0.0000001, 0.1, 0.39115))
```

    <ipython-input-2-76ac2c17deda>:9: RuntimeWarning: divide by zero encountered in log
      d1 = (np.log(S / K) + (r + 0.5 * sigma ** 2) * T) / (sigma * np.sqrt(T))
    <ipython-input-2-76ac2c17deda>:10: RuntimeWarning: divide by zero encountered in log
      d2 = (np.log(S / K) + (r - 0.5 * sigma ** 2) * T) / (sigma * np.sqrt(T))



```python
no_time_to_expiration_array 
```




    array([0.00000000e+00, 0.00000000e+00, 0.00000000e+00, 0.00000000e+00,
           0.00000000e+00, 2.46755821e-03, 1.00000005e+01, 2.00000005e+01,
           3.00000005e+01, 4.00000005e+01, 5.00000005e+01])




```python
new_table = new_table.with_column("Time to Expiration of None", no_time_to_expiration_array )
new_table.show()
```


<table border="1" class="dataframe">
    <thead>
        <tr>
            <th>Level of Underlying</th> <th>Time to Expiration of One Year</th> <th>Time to Expiration of None</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>0                  </td> <td>0                             </td> <td>0                         </td>
        </tr>
        <tr>
            <td>10                 </td> <td>0.000108177                   </td> <td>0                         </td>
        </tr>
        <tr>
            <td>20                 </td> <td>0.0777138                     </td> <td>0                         </td>
        </tr>
        <tr>
            <td>30                 </td> <td>1.07658                       </td> <td>0                         </td>
        </tr>
        <tr>
            <td>40                 </td> <td>4.30795                       </td> <td>0                         </td>
        </tr>
        <tr>
            <td>50                 </td> <td>9.99974                       </td> <td>0.00246756                </td>
        </tr>
        <tr>
            <td>60                 </td> <td>17.5336                       </td> <td>10                        </td>
        </tr>
        <tr>
            <td>70                 </td> <td>26.2035                       </td> <td>20                        </td>
        </tr>
        <tr>
            <td>80                 </td> <td>35.5075                       </td> <td>30                        </td>
        </tr>
        <tr>
            <td>90                 </td> <td>45.1478                       </td> <td>40                        </td>
        </tr>
        <tr>
            <td>100                </td> <td>54.9623                       </td> <td>50                        </td>
        </tr>
    </tbody>
</table>



```python
new_table.plot("Level of Underlying")
```


![png](/assets/images/output_18_0.png)



```python
three_year_array = make_array()
for i in np.arange(0, 101, 10): 
    three_year_array = np.append(three_year_array, black_scholes(i, 50, 3, 0.1, 0.39115))
```

    <ipython-input-2-76ac2c17deda>:9: RuntimeWarning: divide by zero encountered in log
      d1 = (np.log(S / K) + (r + 0.5 * sigma ** 2) * T) / (sigma * np.sqrt(T))
    <ipython-input-2-76ac2c17deda>:10: RuntimeWarning: divide by zero encountered in log
      d2 = (np.log(S / K) + (r - 0.5 * sigma ** 2) * T) / (sigma * np.sqrt(T))



```python
three_year_array
```




    array([ 0.        ,  0.12653854,  1.75641839,  5.77813145, 11.7582735 ,
           19.0826488 , 27.28807781, 36.06767126, 45.22466791, 54.63318365,
           64.21192494])




```python
new_table = new_table.with_column("Time to Expiration of Three Years", three_year_array)
```


```python
new_table.show()
```


<table border="1" class="dataframe">
    <thead>
        <tr>
            <th>Level of Underlying</th> <th>Time to Expiration of One Year</th> <th>Time to Expiration of None</th> <th>Time to Expiration of Three Years</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>0                  </td> <td>0                             </td> <td>0                         </td> <td>0                                </td>
        </tr>
        <tr>
            <td>10                 </td> <td>0.000108177                   </td> <td>0                         </td> <td>0.126539                         </td>
        </tr>
        <tr>
            <td>20                 </td> <td>0.0777138                     </td> <td>0                         </td> <td>1.75642                          </td>
        </tr>
        <tr>
            <td>30                 </td> <td>1.07658                       </td> <td>0                         </td> <td>5.77813                          </td>
        </tr>
        <tr>
            <td>40                 </td> <td>4.30795                       </td> <td>0                         </td> <td>11.7583                          </td>
        </tr>
        <tr>
            <td>50                 </td> <td>9.99974                       </td> <td>0.00246756                </td> <td>19.0826                          </td>
        </tr>
        <tr>
            <td>60                 </td> <td>17.5336                       </td> <td>10                        </td> <td>27.2881                          </td>
        </tr>
        <tr>
            <td>70                 </td> <td>26.2035                       </td> <td>20                        </td> <td>36.0677                          </td>
        </tr>
        <tr>
            <td>80                 </td> <td>35.5075                       </td> <td>30                        </td> <td>45.2247                          </td>
        </tr>
        <tr>
            <td>90                 </td> <td>45.1478                       </td> <td>40                        </td> <td>54.6332                          </td>
        </tr>
        <tr>
            <td>100                </td> <td>54.9623                       </td> <td>50                        </td> <td>64.2119                          </td>
        </tr>
    </tbody>
</table>



```python
new_table.plot("Level of Underlying")
plt.xlabel('Level of Underlying (Arbitrary) ')
plt.ylabel('Price (Arbitrary) ')
```




    Text(0, 0.5, 'Price (Arbitrary) ')




![png](/assets/images/output_23_1.png)


This is the final graph that we were supposed to replicate from our lecture slides. Mission accomplished! We can see that, at option expiration, the graph of the underlying and price has the sharp, rigid slope that we were looking for. In contrast, the other two curves are just that, curved. That is exactly what we would expect with the given inputs. 


```python
def black_scholes(S, K, T, r, sigma, option = 'call'):
    
    #S: spot price
    #K: strike price
    #T: time to maturity
    #r: interest rate
    #sigma: volatility of underlying asset
    
    d1 = (np.log(S / K) + (r + 0.5 * sigma ** 2) * T) / (sigma * np.sqrt(T))
    d2 = (np.log(S / K) + (r - 0.5 * sigma ** 2) * T) / (sigma * np.sqrt(T))
    
    if option == 'call': 
        call = (S * si.norm.cdf(d1, 0.0, 1.0) - K * np.exp(-r * T) * si.norm.cdf(d2, 0.0, 1.0))
        return call 
    if option == 'put':
        put = (K * np.exp(-r * T) * si.norm.cdf(-d2, 0.0, 1.0) - S * si.norm.cdf(-d1, 0.0, 1.0))
        return put 
```


```python
black_scholes(100, 105, 0.5, 0.06, 0.2783, option = 'call')
```




$\displaystyle 6.999918456914479$




```python
black_scholes(85, 105, 0.5, 0.06, 0.2783, option = 'call')
```




$\displaystyle 1.7631924132300867$




```python
black_scholes(85, 105, 0.5, 0.06, 0.2783, option = 'put')
```




$\displaystyle 18.65997343582343$




```python
black_scholes(100, 105, 0.5, 0.06, 0.5, option = 'call')
```




$\displaystyle 13.236096156868378$



These last few lines were further verification of our option pricer. We tested different volatilities and spot prices, and also looked at the different prices associated with calls and puts. 


```python

```


