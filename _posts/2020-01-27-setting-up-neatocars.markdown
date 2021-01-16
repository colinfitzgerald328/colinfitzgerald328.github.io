---
layout: single
title:  "Setting Up Your Local Neato Cars GitHub Repository"
date:   2020-03-08 10:55:09 -0800
excerpt: "Setting up the cars repo for Dr. Neat's class"
toc: true
---
This is a tutorial for Dr. Neato's class on how to set up your GitHub repo using the command line. Git Bash should be installed on all the school computers so that is what we will use. If you don't have Git installed, click [here](https://git-scm.com/downloads). 

### Step 1 - Make your folder

It doesn't matter where you put it.

### Step 2 - Right click inside your folder and choose Git Bash

![1](/assets/images/neatocars_tutorial/1.PNG)
![2](/assets/images/neatocars_tutorial/2.PNG)
![3](/assets/images/neatocars_tutorial/3.PNG)
![4](/assets/images/neatocars_tutorial/4.PNG)

### Step 3 - Clone the cars GitHub repository

enter `git clone https://github.com/raviriley/neatocars.git` in your Git Bash window

![5](/assets/images/neatocars_tutorial/git_clone.PNG)

### Getting the most recent version
Run the update.sh file

or

Do step 2, then enter these commands in Git Bash every time you want to get the most recent version of neatocars:

`git fetch origin`

`git pull origin`

![6](/assets/images/neatocars_tutorial/update.PNG)
