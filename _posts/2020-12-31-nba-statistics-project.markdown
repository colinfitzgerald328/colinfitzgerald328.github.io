---
layout: post
title:  "Final Project for Stat 20"
date:   2020-12-31 17:54:32 -0800
categories: jekyll update
---


{% highlight ruby %}
library(dplyr)
library(ggplot2)

nba2019=read.csv("/Users/colinfitzgerald/Downloads/nba19.csv")
nba2020=read.csv("/Users/colinfitzgerald/Downloads/nba20.csv")
{% endhighlight %}

# Introduction

##### Background

NBA players make millions of dollars each year. However, not all players get played the same. For example, during the basketball season of 2013-14, Kobe Bryant of the LA Lakers was paid $30.4 million whereas Dwight Howard earned $20.5 million. The average person may guess that Kobe Bryant simply is a "better player" so deserves a higher salary. This makes sense, but what factors exactly make one player more valuable than another?

##### Variables

To explore this question we relied on the 2019 NBA data set which contains several variables including the performance statistics, height, weight, and age of players from different teams along with their salaries. We analyzed the data based on 3 categories:

*(1) Body Type*

*(2) Experience Variables*

*(3) Performance Statistics*

Body Type is measured by the age, height, and weight of the players. Experience is measured by games played (gp) and average minutes played per game (min) during the 2019 season. Performance statistics is measured by average points scored per game (pts), averages assists per game (ast), and field goal percenage (fgp) for the 2019 basketball season.

##### Study Questions
Question 1: Is the difference between 2019-2020 and 2020-2021 average salary significant?

Question 2: Do a player's body type, experience, and performance statistics affect salary? What are the dominant variables that determine a player’s salary?

# Exploratory Data Analysis & Description of Data

The data consists of pairs of points from which the correlation coefficient r can be computed when the scatterplot is football shaped. This is when the data is linear with no outliers, when x & y follow the normal curve, and when the data is homoscedastic (when all the vertical strips in a scatter plot show similar amounts of spread).

The scatterplots below are not based on simple random samples and are not foot-ball shaped. However, for the purposes of finding r values, and conducting hypothesis tests on the data, this project assumes the data set is all from a simple random sample of 2020 and 2019  and their scatterplots are foot-ball shaped.

## Distribution of NBA Salaries

{% highlight ruby %}
knitr::opts_chunk$set(
	echo = FALSE,
	message = TRUE,
	warning = FALSE
)
ggplot(nba2020,aes(x=salary19.20/1000000, y=..density..)) +
  geom_histogram(col="blue", fill="light blue", breaks=c(0:10,15,20,25,30,35,40,50), alpha=0.5) +
  geom_vline(xintercept = mean(nba2020$salary19.20)/1000000, col="blue") +
  labs(title="NBA 2019-20 Salaries", x="Salary (millions of dollars)")
{% endhighlight %}

{% highlight ruby %}
knitr::opts_chunk$set(
	echo = FALSE,
	message = TRUE,
	warning = FALSE
)
# Average 19.20 salary
mean(nba2020$salary19.20)
{% endhighlight %}

*Created by Jasmine Kamalnathan: This histogram shows the density of NBA players in several salary brackets for the 2019-2020 season. The vertical blue line indicates the average salary in millions of dollars: $7,561,619.*

{% highlight ruby %}
knitr::opts_chunk$set(
	echo = FALSE,
	message = TRUE,
	warning = FALSE
)
ggplot(nba2020,aes(x=salary20.21/1000000, y=..density..)) +
  geom_histogram(col="purple", fill="lavender", breaks=c(0:10,15,20,25,30,35,40,50), alpha=0.5) +
  geom_vline(xintercept = mean(nba2020$salary20.21, na.rm = TRUE)/1000000, col="purple") +
  labs(title="NBA 2020-21 Salaries", x="Salary (millions of dollars)")
{% endhighlight %}

{% highlight ruby %}
knitr::opts_chunk$set(
	echo = FALSE,
	message = TRUE,
	warning = FALSE
)
# Average 20.21 Salary
mean(nba2020$salary20.21, na.rm = TRUE)
{% endhighlight %}

*Created by Jasmine Kamalnathan: This histogram shows the density of NBA players in several salary brackets for the 2020-2021 season. The vertical purple line indicates the average salary in millions of dollars: $9,683,054.*

## Scatterplots of Salary and Body Type, Experience, and Performance Stats Variables from NBA 2020 Statistics

### Body Type

#### Salary and Age

{% highlight ruby %}
knitr::opts_chunk$set(
	echo = FALSE,
	message = TRUE,
	warning = FALSE
)
ggplot(data=nba2019,aes(x=salary/1000000,y=age)) +
  geom_point(col="blue", alpha=0.4, size=1) +
  geom_smooth(method="lm", se=F)+
  labs(title="Scatterplot of NBA 2019 Salary vs Age", x="Salary (millions of dollars)", y="(Age)")
{% endhighlight %}
*Created by Jasmine Kamalnathan*

{% highlight ruby %}
knitr::opts_chunk$set(
	echo = FALSE,
	message = TRUE,
	warning = FALSE
)
r = cor(nba2019$salary, nba2019$age, use="complete.obs")
{% endhighlight %}

The correlation coefficient between 2019 salary and age is apprroximately 0.36.

#### Salary and Height

{% highlight ruby %}
knitr::opts_chunk$set(
	echo = FALSE,
	message = TRUE,
	warning = FALSE
)
ggplot(data=nba2019,aes(x=salary/1000000,y=height)) +
  geom_point(col="red", alpha=0.4, size=1) +
  geom_smooth(method="lm", se=F)+
  labs(title="Scatterplot of NBA 2019 Salary vs Height", x="Salary (millions of dollars)", y="Height (inches)")
{% endhighlight %}
*Created by Victoria Ng*

{% highlight ruby %}
knitr::opts_chunk$set(
	echo = FALSE,
	message = TRUE,
	warning = FALSE
)
r = cor(nba2019$salary, nba2019$height, use="complete.obs")
{% endhighlight %}

The correlation coefficient between 2019 salary and height is apprroximately 0.05.

#### Salary and Weight

{% highlight ruby %}
knitr::opts_chunk$set(
	echo = FALSE,
	message = TRUE,
	warning = FALSE
)
ggplot(data=nba2019,aes(x=salary/1000000,y=weight)) +
  geom_point(col="blue", alpha=0.4, size=1) +
  geom_smooth(method="lm", se=F)+
  labs(title="Scatterplot of NBA 2019 Salary vs Weight", x="Salary (millions of dollars)", y="Weight (pounds)")
{% endhighlight %}
*Created by Stanley Quiros*

{% highlight ruby %}
knitr::opts_chunk$set(
	echo = FALSE,
	message = TRUE,
	warning = FALSE
)
r = cor(nba2019$salary, nba2019$weight, use="complete.obs")
{% endhighlight %}

The correlation coefficient between 2019 salary and weight is apprroximately 0.15.

### Experience

#### Salary and Games Played for the 2019 Season
{% highlight ruby %}
knitr::opts_chunk$set(
	echo = FALSE,
	message = TRUE,
	warning = FALSE
)
ggplot(data=nba2019,aes(x=salary/1000000,y=gp)) +
  geom_point(col="darkseagreen4", alpha=0.5, size=1) +
  geom_smooth(method="lm", se=F)+
  labs(title="Scatterplot of NBA 2019 Salary vs Games Played", x="Salary (millions of dollars)", y="Games Played (per player)")
{% endhighlight %}
*Created by Daniel Vermeulen*

{% highlight ruby %}
knitr::opts_chunk$set(
	echo = FALSE,
	message = TRUE,
	warning = FALSE
)
r = cor(nba2019$salary, nba2019$gp, use="complete.obs")
{% endhighlight %}

The correlation coefficient between 2019 salary and games played is apprroximately 0.32.

#### Salary and Average Minutes per Game

{% highlight ruby %}
knitr::opts_chunk$set(
	echo = FALSE,
	message = TRUE,
	warning = FALSE
)
ggplot(data=nba2019,aes(x=salary/1000000,y=min)) +
  geom_point(col="blue", alpha=0.4, size=1) +
  geom_smooth(method="lm", se=F)+
  labs(title="Scatterplot of NBA 2019 Salary vs Minutes Played", x="Salary (millions of dollars)", y="Minutes Played")
{% endhighlight %}
*Created by Ruoyi Yang*

{% highlight ruby %}
knitr::opts_chunk$set(
	echo = FALSE,
	message = TRUE,
	warning = FALSE
)
r = cor(nba2019$salary, nba2019$min, use="complete.obs")
{% endhighlight %}

The correlation coefficient between 2019 salary and average minutes played per game is apprroximately 0.60.

### Performance Statistics

#### Salary and Average Points per Game

{% highlight ruby %}
knitr::opts_chunk$set(
	echo = FALSE,
	message = TRUE,
	warning = FALSE
)
ggplot(nba2019,aes(x=salary/1000000,y=pts))+geom_point(alpha=0.5,size=0.5,color="blue")+geom_smooth(method=lm,se=F,color="red")+labs(title="Scatterplot of NBA 2019 Salary vs Points", x="Salary (millions of dollars)", y="Points")
{% endhighlight %}
*Created by Colin FitzGerald*

{% highlight ruby %}
knitr::opts_chunk$set(
	echo = FALSE,
	message = TRUE,
	warning = FALSE
)
salaryvspts=data.frame(nba2019$salary,nba2019$pts)
salaryvspts=na.omit(salaryvspts)
r = cor(salaryvspts$nba2019.salary,salaryvspts$nba2019.pts)
{% endhighlight %}

The correlation coefficient between 2019 salary and average points per game is apprroximately 0.63.

#### Salary and Average Assists per Game

{% highlight ruby %}
knitr::opts_chunk$set(
	echo = FALSE,
	message = TRUE,
	warning = FALSE
)
ggplot(data=nba2019,aes(x=salary/1000000,y=ast)) +
  geom_point(alpha=0.5,size=0.5,color="blue") +
  geom_smooth(method="lm", se=F,color="red")+
  labs(title="Scatterplot of NBA 2019 Salary vs Assists", x="Salary (millions of dollars)", y="Assists")
{% endhighlight %}
*Created by Colin FitzGerald*

{% highlight ruby %}
knitr::opts_chunk$set(
	echo = FALSE,
	message = TRUE,
	warning = FALSE
)
salaryvsassists=data.frame(nba2019$salary,nba2019$ast)
salaryvsassists=na.omit(salaryvsassists)
r = cor(salaryvsassists$nba2019.salary,salaryvsassists$nba2019.ast)
{% endhighlight %}

The correlation coefficient between 2019 salary and average assists per game is apprroximately 0.52.

#### Salary and Field Goal Percentage

{% highlight ruby %}
knitr::opts_chunk$set(
	echo = FALSE,
	message = TRUE,
	warning = FALSE
)
ggplot(data=nba2019,aes(x=salary/1000000,y=fgp)) +
  geom_point(col="blue", alpha=0.5, size=0.5) +
  geom_smooth(method="lm", se=F,color="red")+
  labs(title="Scatterplot of NBA 2019 Salary vs Field Goal Percentage", x="Salary (millions of dollars)", y="Field Goal Percentage")
{% endhighlight %}
*Created by Colin FitzGerald*

{% highlight ruby %}
knitr::opts_chunk$set(
	echo = FALSE,
	message = TRUE,
	warning = FALSE
)
salaryvsfgp=data.frame(nba2019$salary,nba2019$fgp)
salaryvsfgp=na.omit(salaryvsfgp)
cor(salaryvsfgp$nba2019.salary,salaryvsfgp$nba2019.fgp)
{% endhighlight %}

The correlation coefficient between 2019 salary and field goal percentage is apprroximately 0.13.

# Data Analysis

### Question 1

#### Is the difference between 2019-2020 and 2020-2021 average salary significant? - *Jasmine Kamalnathan*

Null: Average salary for 2019-2020 is $7,561,619 while the average salary for 2020-2021 is $9,683,054. This difference is due to chance. The average salary in 2019-2020 and 2020-2021 is the same.

Alternative: The difference between 2019-2020 and 2020-2021 average salary is not due to chance. The 2020-2021 season has a higher average salary than 2019-2020.

{% highlight ruby %}
knitr::opts_chunk$set(
	echo = FALSE,
	message = TRUE,
	warning = FALSE
)
#There are 464 filled observations in salary19.20.
SD19.20 = sd(nba2020$salary19.20)
SEsum19.20 = sqrt(464) * SD19.20
SEavg19.20 = SEsum19.20/464

#There are 319 filled observations in salary20.21 excluding emply cells (n/a).
SD20.21 = sd(nba2020$salary20.21, na.rm = TRUE)
SEsum20.21 = sqrt(319) * SD20.21
SEavg20.21 = SEsum20.21/319

SEdifference = (sqrt(SEavg19.20^2 + SEavg20.21^2))

z = (mean(nba2020$salary20.21, na.rm = TRUE) - mean(nba2020$salary19.20) - 0)/SEdifference

(1-pnorm(z))*100
{% endhighlight %}

P (z > 3.059) is about 0.11%.

Reject the null. The difference in 2019-20 and 2020-21 in average salary is not due to chance. There are factors causing there to be a higher average salary in 2020-21 than 2019-20.

### Question 2
#### Do a player's body type, experience, and performance statistics affect 2019 salary? What are the dominant variables that determine a player’s salary in 2019?

##### Is the correlation of 0.36 between salary and age real? - *Jasmine Kamalnathan*

Null: There is no correlation between the salary of players and their age.

Alternative: There is a real relationship between the salary of players and their age.

{% highlight ruby %}
knitr::opts_chunk$set(
	echo = FALSE,
	message = TRUE,
	warning = FALSE
)

#Finding SE corresponding to the slope of the regression
ageR = cor(nba2019$salary, nba2019$age, use="complete.obs")
  #removes ages where salary was n/a
  newnba2019 = filter(nba2019, salary > 0)

#SE for slope of reg line = (sqrt(1-r^2)*SDy)/(sqrt(n-2)*SDx)
SDnba2019age = sd(newnba2019$age)
SDnba2019salary = sd(newnba2019$salary)

SEsalaryvsage = (sqrt(1-ageR^2)*SDnba2019age)/(sqrt(470-2)*SDnba2019salary)
ageM = ageR*SDnba2019age/SDnba2019salary

zage = (ageM - 0)/ SEsalaryvsage
(1-pnorm(zage))*100
{% endhighlight %}

P (z > 8.301833) = 0%

We reject the null. The correlation of 0.35 between salary and age is real.

##### Is the correlation of 0.05 between salary and height real? - *Victoria Ng*

Null: There is no real correlation between the salary of players and their heights.

Alternative: There is a real relationship between the salary of players and their heights.

{% highlight ruby %}
knitr::opts_chunk$set(
	echo = FALSE,
	message = TRUE,
	warning = FALSE
)
#Finding SE corresponding to the slope of the regression
heightR = cor(nba2019$salary, nba2019$height, use="complete.obs")
#SE for slope of reg line = (sqrt(1-r^2)*SDy)/(sqrt(n-2)*SDx)
SDnba2019height = sd(newnba2019$height)
SDnba2019salary = sd(newnba2019$salary)

SEsalaryvsheight = (sqrt(1-heightR^2)*SDnba2019height)/(sqrt(470-2)*SDnba2019salary)
heightM = heightR*SDnba2019height/SDnba2019salary

zheight = (heightM - 0)/ SEsalaryvsheight
(1-pnorm(zheight))*100
{% endhighlight %}

P (z > 1.166586) is about 12%.

We cannot reject the null. The correlation of 0.05 between salary and height is not real.

##### Is the correlation of 0.15 between salary and weight real? - *Stanley Quiros*

Null: There is no correlation between the salary of players and their weights.

Alternative: There is a real relationship between the salary of players and their weights.

{% highlight ruby %}
knitr::opts_chunk$set(
	echo = FALSE,
	message = TRUE,
	warning = FALSE
)
weightR = cor(nba2019$salary, nba2019$weight, use="complete.obs")
SDnba2019weight = sd(newnba2019$weight)
SDnba2019salary = sd(newnba2019$salary)

SEsalaryvsweight = (sqrt(1-weightR^2)*SDnba2019weight)/(sqrt(470-2)*SDnba2019salary)
weightM = weightR*SDnba2019weight/SDnba2019salary

zweight = (weightM - 0)/ SEsalaryvsweight
(1-pnorm(zweight))*100
{% endhighlight %}

P (z > 1.166586) is about 0.06%.

We reject the null. The correlation of 0.15 between salary and weight is real.

##### Is the correlation of 0.32 between salary and games played real? - *Daniel Vermeulen*

Null: It is due to chance. There is no correlation between the salary of players and the number of games played.

Alternative: It is not due to chance. There is a real relationship between the salary of players and the number of games played.

{% highlight ruby %}
knitr::opts_chunk$set(
	echo = FALSE,
	message = TRUE,
	warning = FALSE
)

gpR = cor(nba2019$salary, nba2019$gp, use="complete.obs")
SDnba2019gp = sd(filter(nba2019, salary > 0)$gp)
SDnba2019salary = sd(filter(nba2019, salary > 0)$salary)

SEsalaryvsgp = (sqrt(1-gpR^2)*SDnba2019gp)/(sqrt(470-2)*SDnba2019salary)
gpM = gpR*SDnba2019gp/SDnba2019salary
zgp = (gpM - 0)/ SEsalaryvsgp
(1-pnorm(zgp))*100
{% endhighlight %}

P (z > 7.26176) is essentially 0%.

Since the P-value is so small, we reject the null. This means that the correlation of 0.32 between player salary and the number of games played is real.

##### Is the correlation of 0.60 between salary and average minutes played per game real? - *Ruoyi Yang*

Null: There is no correlation between the salary of players and average minutes played per game.

Alternative: There is a real relationship between the salary of players and average minutes played per game.

{% highlight ruby %}
knitr::opts_chunk$set(
	echo = FALSE,
	message = TRUE,
	warning = FALSE
)
#Finding SE corresponding to the slope of the regression
minR = cor(nba2019$salary, nba2019$min, use="complete.obs")
#SE for slope of reg line = (sqrt(1-r^2)*SDy)/(sqrt(n-2)*SDx)
SDnba2019min = sd(newnba2019$min)
SDnba2019salary = sd(newnba2019$salary)

SEsalaryvsmin = (sqrt(1-minR^2)*SDnba2019min)/(sqrt(470-2)*SDnba2019salary)
minM = minR*SDnba2019min/SDnba2019salary

zmin = (minM - 0)/ SEsalaryvsmin
(1-pnorm(zmin))*100
{% endhighlight %}

P (z > 16.16437) is essentially 0%.

We reject the null. The correlation of 0.60 between salary and average minutes played per game is real.

##### Is the correlation of 0.63 between salary and average points per game real? *Colin FitzGerald*

Null: There is no linear relationship between the salary of players and average points per game.

Alternative: There is a real linear relationship between the salary of players and average points per game.

{% highlight ruby %}
knitr::opts_chunk$set(
	echo = FALSE,
	message = TRUE,
	warning = FALSE
)
#Finding SE corresponding to the slope of the regression
ptsR = cor(nba2019$salary, nba2019$pts, use="complete.obs")
#SE for slope of reg line = (sqrt(1-r^2)*SDy)/(sqrt(n-2)*SDx)
SDnba2019pts = sd(newnba2019$pts)
SDnba2019salary = sd(newnba2019$salary)

SEsalaryvspts = (sqrt(1-ptsR^2)*SDnba2019pts)/(sqrt(470-2)*SDnba2019salary)
ptsM = ptsR*SDnba2019pts/SDnba2019salary

zpts = (ptsM - 0)/ SEsalaryvspts
(1-pnorm(zpts))*100
{% endhighlight %}

P (z >  17.77685) is essentially 0%.

We reject the null. The p-value of 0% is highly statistically significant. The correlation of 0.63 between salary and average points per game is real. There is sufficient evidence that there is a linear relationship between salary and average points scored per game.

##### Is the correlation of 0.52 between salary and average assists per game real? *Colin FitzGerald*

Null: There isn't a linear relationship between the salary of players and average assists per game.

Alternative: There is a real linear relationship between the salary of players and average assists per game.

{% highlight ruby %}
knitr::opts_chunk$set(
	echo = FALSE,
	message = TRUE,
	warning = FALSE
)
#Finding SE corresponding to the slope of the regression
astR = cor(nba2019$salary, nba2019$ast, use="complete.obs")
#SE for slope of reg line = (sqrt(1-r^2)*SDy)/(sqrt(n-2)*SDx)
SDnba2019ast = sd(newnba2019$ast)
SDnba2019salary = sd(newnba2019$salary)

SEsalaryvsast = (sqrt(1-astR^2)*SDnba2019ast)/(sqrt(470-2)*SDnba2019salary)
astM = astR*SDnba2019ast/SDnba2019salary

zast = (astM - 0)/ SEsalaryvsast
(1-pnorm(zast))*100
{% endhighlight %}

P (z >  13.12086) is essentially 0%.

We reject the null. The p-value of 0% is highly statistically significant. The correlation of 0.52 between salary and average assists per game is real. There is sufficient evidence that there is a linear relationship between salary and average assists per game.

##### Is the correlation of 0.13 between salary and field goal percentage real? *Colin FitzGerald*

Null: There isn't a linear relationship between the salary of players and field goal percentage.

Alternative: There is a real linear relationship between the salary of players and field goal percentage.

{% highlight ruby %}
knitr::opts_chunk$set(
	echo = FALSE,
	message = TRUE,
	warning = FALSE
)
#Finding SE corresponding to the slope of the regression
fgpR = cor(nba2019$salary, nba2019$fgp, use="complete.obs")
#SE for slope of reg line = (sqrt(1-r^2)*SDy)/(sqrt(n-2)*SDx)
SDnba2019fgp = sd(newnba2019$fgp, na.rm = TRUE)
SDnba2019salary = sd(newnba2019$salary)

SEsalaryvsfgp = (sqrt(1-fgpR^2)*SDnba2019fgp)/(sqrt(470-2)*SDnba2019salary)
fgpM = fgpR*SDnba2019fgp/SDnba2019salary

zfgp = (fgpM - 0)/ SEsalaryvsfgp
(1-pnorm(zfgp))*100
{% endhighlight %}

P (z >  2.835834) is essentially 0.2%.

We reject the null at the 1% level. The correlation of 0.13 between salary and field goal percentage is real. There is sufficient evidence that there is a linear relationship between salary and field goal percentage.

#### Is there a correlation between average minutes played per game and average points per game? - *Jasmine Kamalnathan*

{% highlight ruby %}
knitr::opts_chunk$set(
	echo = FALSE,
	message = TRUE,
	warning = FALSE
)
ggplot(data=nba2019,aes(x=pts,y=min)) +
  geom_point(col="red", alpha=0.4, size=1) +
  geom_smooth(method="lm", se=F)+
  labs(title="Scatterplot of NBA 2019 Points and Minutes Played", x="Points (average per game)", y="Minutes (average per game)")

mingpr = cor(nba2019$pts, nba2019$min, use="complete.obs")
{% endhighlight %}
The correlation between average points per game and average minutes per game is of 0.88.

##### Is the correlation of 0.88 between average points per game and average minutes per game real? -*Jasmine Kamalnathan*

Null: There is no correlation between average points per game and average minutes per game.

Alternative: There is a real relationship between average points per game and average minutes per game.

{% highlight ruby %}
knitr::opts_chunk$set(
	echo = FALSE,
	message = TRUE,
	warning = FALSE
)
#Finding SE corresponding to the slope of the regression
minptsR = cor(nba2019$min, nba2019$pts, use="complete.obs")
#SE for slope of reg line = (sqrt(1-r^2)*SDy)/(sqrt(n-2)*SDx)
SDnba2019pts = sd(newnba2019$pts, na.rm = TRUE)
SDnba2019min = sd(newnba2019$min)

SEptsvsmin = (sqrt(1-minptsR^2)*SDnba2019min)/(sqrt(470-2)*SDnba2019pts)
minptsM = minptsR*SDnba2019min/SDnba2019pts

zminpts = (minptsM - 0)/ SEptsvsmin
(1-pnorm(zminpts))*100
{% endhighlight %}

P (z >  39.78833) is essentially 0.2%.

We reject the null. The correlation of 0.88 between between average points per game and average minutes per game.

# Conclusion

This research project aimed to answer:

*Question 1: Is the difference between 2019-2020 and 2020-2021 average salary significant?*

The two sample hypthosis test using the SE difference between 2019-2020 and 2020-2021 average salary showed the the difference between the average salaries in both seasons is real.

*Question 2: Do a player's body type, experience, and performance statistics affect salary? What are the dominant variables that determine a player’s salary?*

Body Type: The correlation between age and salary and weight and salary are real. The correlation between age and salary is 0.35 and the correlation between salary and weight is 0.15. While these correlations are real, the correlation between weight and salary doesn't seem very important given that the correlation isn't very strong. The correlation between height and salary is very small at 0.05, and so there is no real relationship between the two variables. Age is the most dominant "body type" variable analyzed that is a partial predictor salary.

Performance Statistics: The correlation between all performance statistics variables and salary are real. The correlation between salary and games played in the 2019 season is 0.32 and the correlation between salary and average minutes played per game is 0.62. While both of these correlations are real, average minutes played per game is the more dominant "performance statistic" variable analyzed that is a partial predictor of salary.

Experience: The correlation between all experience variables and salary are real. The correlation between average points per game and salary, assists per game and salary, and field goal percentage and salary is 0.63,0.52, and 0.15 respectively. While all of these correlations are real, only the correlations beteen average points per game and salary and assists per game and salary seem important, since the correlation between field goal percentage and salary is weak. Average points per game is the most dominant "experience" variable analyzed that is a partial predictor salary.

Of all variables compared to salary, average minutes played per game and average points per game are the strongest predictors of salary. There turned out to be a strong correlation of 0.88 between minutes played per game and average points per game. A hypothesis test for the slope of this regression line was conducted and that strong correlation is real.

This all makes sense. The most dominant variables that relate to salary are average minutes played per game and average points per game. The more points a player scores, the higher they tend to be paid, likely because they are more valuable to the success of the team. The strong correlation between average minutes played per game and average points per game likely exists because the more points a player is able to score, the longer they are kept on the court and off the bench. Of the variables studied, the highest predictor of salary seems to be a player's abilty to score points. The more points scored per game, the higher the salary tends to be.

### References

https://thesportjournal.org/article/determinants-of-nba-player-salaries/
