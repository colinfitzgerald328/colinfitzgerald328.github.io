---
layout: single
title:  "Prickly Pear Invitational Split Analysis"
date:   2021-02-7 05:04:00 -0800
excerpt: "Visualizing the 400m splits of each athlete in the Men's 3000m run at the Prickly Pear Invitational."
categories: 
  - tutorial
  - pinned

toc: true
---

```python
import numpy as np 
```


```python
from datascience import * 
```


```python
import matplotlib.pyplot as plt 
%matplotlib inline
```


```python
p3 = Table.read_table("p3.csv")
```


```python
p3
```




<table border="1" class="dataframe">
    <thead>
        <tr>
            <th>Split</th> <th>Marc Scott (1) </th> <th>Grant Fisher (2)</th> <th>Sean McGorty (3) </th> <th>Joe Klecker (4) </th> <th>Morgan McDonald (5)  </th> <th>Evan Jager (6)</th> <th>Woody Kincaid (7)</th> <th>Brian Barazza (8)</th> <th>Kieran Tuntivate (9)</th> <th>Biya Simbassa (10)</th> <th>John Reniewicki (11)</th> <th>Johnny Gregorek (12)</th> <th>Chris Derrick (13</th> <th>Joey Berriatua (14) </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>600  </td> <td>63.148         </td> <td>64.052          </td> <td>64.253           </td> <td>64.715          </td> <td>64.648               </td> <td>64.809        </td> <td>64.542           </td> <td>63.754           </td> <td>64.651              </td> <td>63.903            </td> <td>63.775              </td> <td>63.873              </td> <td>64.755           </td> <td>63.257              </td>
        </tr>
        <tr>
            <td>1000 </td> <td>62.634         </td> <td>62.422          </td> <td>62.128           </td> <td>62.113          </td> <td>62.719               </td> <td>62.125        </td> <td>62.386           </td> <td>62.306           </td> <td>62.69               </td> <td>62.378            </td> <td>62.253              </td> <td>62.676              </td> <td>62.353           </td> <td>62.702              </td>
        </tr>
        <tr>
            <td>1400 </td> <td>62.755         </td> <td>62.221          </td> <td>62.336           </td> <td>62.32           </td> <td>62.542               </td> <td>62.415        </td> <td>62.658           </td> <td>62.535           </td> <td>62.502              </td> <td>62.451            </td> <td>62.894              </td> <td>62.542              </td> <td>62.658           </td> <td>62.743              </td>
        </tr>
        <tr>
            <td>1800 </td> <td>62.325         </td> <td>62.254          </td> <td>61.551           </td> <td>61.855          </td> <td>62.413               </td> <td>61.936        </td> <td>62.527           </td> <td>62.52            </td> <td>61.999              </td> <td>62.686            </td> <td>62.734              </td> <td>62.218              </td> <td>63.25            </td> <td>62.805              </td>
        </tr>
        <tr>
            <td>2200 </td> <td>60.841         </td> <td>60.918          </td> <td>60.84            </td> <td>60.92           </td> <td>61.457               </td> <td>61.232        </td> <td>62.478           </td> <td>61.193           </td> <td>62.603              </td> <td>61.586            </td> <td>62.705              </td> <td>61.349              </td> <td>64.259           </td> <td>63.521              </td>
        </tr>
        <tr>
            <td>2600 </td> <td>59.649         </td> <td>59.637          </td> <td>59.835           </td> <td>59.653          </td> <td>58.97                </td> <td>60.134        </td> <td>63.363           </td> <td>61.002           </td> <td>63.759              </td> <td>62.7              </td> <td>64.268              </td> <td>61.935              </td> <td>64.843           </td> <td>71.49               </td>
        </tr>
        <tr>
            <td>3000 </td> <td>54.627         </td> <td>55.556          </td> <td>56.051           </td> <td>57.357          </td> <td>58.769               </td> <td>59.514        </td> <td>57.395           </td> <td>63.534           </td> <td>59.76               </td> <td>62.303            </td> <td>60.217              </td> <td>64.277              </td> <td>65.555           </td> <td>70.306              </td>
        </tr>
    </tbody>
</table>




```python
p3.plot("Split")
plt.xlabel("Distance (Meters)")
plt.ylabel("Split Time in Seconds")
```




    Text(0, 0.5, 'Split Time in Seconds')




![png](/assets/images/output_5_1.png)



```python
p3.plot("Split")
plt.xlabel("Distance (Meters)")
plt.ylabel("Split Time in Seconds")
plt.xlim(600, 1000)
plt.ylim(62, 65)
```




    (62.0, 65.0)




![png](/assets/images/output_6_1.png)



```python
p3.plot("Split")
plt.xlabel("Distance (Meters)")
plt.ylabel("Split Time in Seconds")
plt.xlim(1000, 1400)
plt.ylim(61.5, 63)
```




    (61.5, 63.0)




![png](/assets/images/output_7_1.png)



```python
p3.plot("Split")
plt.xlabel("Distance (Meters)")
plt.ylabel("Split Time in Seconds")
plt.xlim(1400, 1800)
plt.ylim(61, 63.5)
```




    (61.0, 63.5)




![png](/assets/images/output_8_1.png)



```python
p3.plot("Split")
plt.xlabel("Distance (Meters)")
plt.ylabel("Split Time in Seconds")
plt.xlim(1800, 2200)
plt.ylim(60, 64.5)
```




    (60.0, 64.5)




![png](/assets/images/output_9_1.png)



```python
p3.plot("Split")
plt.xlabel("Distance (Meters)")
plt.ylabel("Split Time in Seconds")
plt.xlim(2200, 2600)
plt.ylim(58.5, 65)
```




    (58.5, 65.0)




![png](/assets/images/output_10_1.png)



```python
p3.plot("Split")
plt.xlabel("Distance (Meters)")
plt.ylabel("Split Time in Seconds")
plt.xlim(2600, 3000)
plt.ylim(54, 65)
```




    (54.0, 65.0)




![png](/assets/images/output_11_1.png)



```python

```
