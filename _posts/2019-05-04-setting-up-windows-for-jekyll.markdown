---
layout: single
title:  "Setting Up a Ruby Development Environment on Windows"
date:   2019-05-04 05:04:00 -0800
excerpt: "Tutorial for setting up Ruby on Windows with Jekyll or Rails"
categories: 
  - tutorial
  - pinned

toc: true
---
This is a tutorial for Windows users on how to set up a Ruby development environment for development of a site created with Rails or generated with Jekyll. This tutorial assumes the user has administrator access to the computer. If you have a Mac check out [Dylan Wilbur's tutorial](https://dylanwilbur.github.io/2019/04/17/building-an-expandable-personal-website-to-host-your-portfolio-with-jekyll-and-github-pages.html).

**Note**: if you don't know if your system type, go to System Information and check System Type. x64 is 64 bit and x86 is 32 bit. You will need to know this information. 
{: .notice}

## Install Git
<https://git-scm.com/downloads> - default download settings
This will install Git Bash, Git CMD (deprecated), and Git GUI. We will be using Git Bash, a Bash shell for Windows.

## Install Chocolatey
We could manually install everything but [Chocolately](https://chocolatey.org/) is a package manager for Windows that does it all for us (big good)

Run one of the following in either Command Prompt or Windows Powershell (your choice):

**PowerShell**: run as administrator
~~~
Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
~~~~

**CMD**: run as administrator
~~~
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
~~~~

**Note**: these are both *one line of code* 
{: .notice}

Now, open a Git Bash command line window and enter:

`choco install ruby -y`

Let that finish & close the window, then open a new Git Bash window and run

`choco upgrade ruby`

To check if rails intalled correctly, enter:

`ruby -v`

## Install MSYS2
Now, we need to install MSYS2, a building tool for Windows with a built in package manager called Pacman. This is used when compiling Ruby gems and is needed to install Jekyll. Run the following from the Git Bash command line:

`choco install msys2`

Once the installation is complete, run

`choco upgrade msys2`

Next, open an MSYS2 console window (search for MSYS2 in the start menu - it may be called "MSYS2 mingGW [64 or 32]-bit" or similar) and run the following: 

`pacman -Sy pacman`

if prompted `Proceed with installation? [Y/n]` type Y and hit enter.

Then, open CMD and type:

`ridk install`

![ridk install CMD window example](https://cdn-images-1.medium.com/max/1600/1*EeqEcdKi0e0EHvyYhdUzrA.png)
*[Image Source](https://cdn-images-1.medium.com/max/1600/1*EeqEcdKi0e0EHvyYhdUzrA.png)*
{: .small}

3 options should appear - we want `MSYS2 and MINGW development toolchain` so type in 3 and hit enter.

If this fails, run the following:

`pacman -S base-devel mingw-w64-i686-toolchain` for 32-bit

`pacman -S base-devel mingw-w64-x86_64-toolchain` for 64-bit

this will run manual installation.

## Setting up Jekyll (Optional)
If you intend to develop a website using jekyll, after completing steps 1-3, enter the following in Git Bash:

`gem update --system`

`gem install jekyll bundler`

You are now ready to create your first Jekyll website!

Before creating your first site, it is recommended you create a folder to store all the jekyll sites you make in one place. This is helpful when pushing to GitHub and hosting on GitHub Pages or similar. 

Head over to the [official Jekyll website](https://jekyllrb.com/) to learn more about Jekyll and how it works. 
Jekyll is written in Ruby, so if you're new to Ruby click [here](https://jekyllrb.com/docs/ruby-101/) to learn about some terminology you will need to know.

[Quickstart Instructions](https://jekyllrb.com/docs/) - get up and running locally in 3 lines of code

**Note**: these links will take you to the Jekyll documentation, where you can learn more about how to use Jekyll. 
{: .notice}

## Setting Up Ruby on Rails (Optional)
If you intend to develop with Rails, after completing steps 1-3, enter the following in Git Bash:

`gem update --system`

[Install C-dependent Gems (Nokogiri / SQLite3 etc)](https://medium.com/ruby-on-rails-web-application-development/how-to-install-rubyonrails-on-windows-7-8-10-complete-tutorial-2017-fc95720ee059#4bc5)
Follow the instructions in the link above to download dependencies needed to install rails.

After successfully completing the linked instructions, enter the following in Git Bash:

`gem install rails`

To check if rails intalled correctly, enter:

`rails -v`

To learn more about Ruby on Rails visit the [official website](https://rubyonrails.org/).


[Back to Top](#){: .btn .btn--inverse}
