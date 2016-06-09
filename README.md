[![Build Status](https://travis-ci.org/PLOPdotJS/plopjs.svg?branch=development)](https://travis-ci.org/PLOPdotJS/plopjs)
# plopjs

###Cloud-based storage for organization-level boilerplate code

## What is plopjs  

Plopjs was created to simplify company project development set up time. Plopjs can easily save development teams countless man hours due to repetitive set up time and also reduce inconsistency and debugging. Once a template is installed they will be able to be accessed on your local client anywhere anytime! Now that you have a sweet raise for showing your boss how to cut production cost and have more free time what are you going to do?  

## What you will need

plopjs is a Node module. Node will need to be installed and running correctly on your client for plopjs to function.  

If you are not sure what node is please visit <https://nodejs.org/en/>. Alternatively you can type  
```
which node
```  
and this will show you the directory that node is located in on your computer if it is already installed.  


```shell
/Users/example/.node/bin/node
```    

## How to install  

installation of plopjs is a simple npm install. Plopjs should be install globally to work correctly. To install run

```shell
npm install -g plopjs  
```  

## How to Start your plop$
To start your plop$ repl it is very simple, just type  

```shell
plop
```  
once plop$ is started you should see  

```shell
plop$  
```  
from ```plop$``` you can then run any of efficient plop$ commands.


## How to use    


##plop$ install  
```shell
plop$ install <template_url> [options]
```
####Example of install   

```shell
plop$ install https://github.com/PLOPdotJS/plop-test.git test
```  

*template_url* is the github repo url for the template that you are choosing.  

[options] is the name that you choose to give your template.  

plop$ *install* will create a new plopjs template that will be stored locally in your plopjs cache directory. Once the plopjs template is installed it will be able to be accessed by any of the plop$ commands.

####Please note that if you do not name your plopjs repo on install it will default to the name of the repo.

###VERY IMPORTANT ALL GITHUB REPOS MUST BE NON SSH. IT WILL ONLY WORK HTTPS.

plop$ install also has an alias  

####Example of the alias  

```shell  
plop$ i
```  


##plop$ use  
```shell
plop$ use <template> [options]  
```  
*template* is the name of installed plopjs template.  
```shell
plop$ use sample
```

[options] path you would like the template loaded to.  
```
plop$ use sample /project
```
plop$ *use* will load what ever template you choose into specified directory or if no directory is named then it will default to your working directory.  

For *node* projects run ```npm i``` to install all the required dependencies that are used in the plopjs template.  Not installing the dependencies will throw err and not run the plopjs template correctly.  

##plop$ init  
```shell
plop$ init  
```  

plopjs *init* allows a starting point to create a plop.json and start making your own plopjs template. This is your chance to be creative and customize your plopjs.  

plop$ *init* prompts will walk you through making a new plop.json file. It will also make an empty README.md that you will need to populate and also an empty template directory. Make sure to make your template *INSIDE* the template directory. Any files other then the plop.json and README.md that are outside the template directory will not be included in your plopjs.  

####Example  
of the plop.json prompt  
```shell
plop$ Template name: <name>
plop$ Description: <description of template>
plop$ Author: <name or email of author>
plop$ License: <MIT>
plop$ Version: 0.1.0
```  
After the init prompts are completed it exits the repl. You may now change into the template directory and start making your template.  

```shell
plop$ init
Template name? My_First_Plop
Description? It will make coding faster and easier
Author? Smart Dev 3001
License? MIT
Version? 0.1.0
Here is your README.md, plop.json, and template directory:
​
README.md
plop.json
template
​
Change directories into your template and start building your plopjs!
```  

Once you have your template built out you may either:  

- create a new github repository on git hub and push your template
or
- git init and initialize a github repository from your working directory.  

##plop$ list  
```shell
plop$ list
```  
plop$ *list* prints a list of plopjs templates that are saved and available on your local client. Once a new plopjs is installed using plop$ *install* it will be added to the list of plopjs.  

plop$ *list* also has a shorthand alias *ls*.  

####Example of alias    

```shell  
plop$ ls
```  

##plop$ save

```shell  
plop$ save [name]
```  
plop$ *save* will take the existing plopjs template that you created from scratch and save locally to your plopjs cache directory. You can then use ```plop$ lsit``` to verify that your template has been saved. Now that new plopjs template will be available for any future projects.  

[name] is the name you choose to name the new plopjs template you created.  

*save* also has an alias *s*.  

####Example of the alias  

```shell
plop$ s
```  

##plop$ delete  
```shell
plop$ delete
```   
plop$ *delete* will delete any plopjs that is saved on your local client.

####Please note that delete *WILL* delete the file so double check that you are using the correct plopjs name.  

##plop$ exit
```shell  
plop$ exit
```  
plop$ *exit* will exit the plop$ repl and take you to node shell. Exit does have an alias *k* or *q* that will also take you out of the plop$ repl.  

####Example of the alias
```shell
plop$ k
```  
```shell
plop$ q  
```  

##plop$ help  

```shell
plop$ help
```  
plop$ *help* will bring up a list of plop$ commands and options.  

##Dependencies  
- vorpal
- fs-extra
- nodegit

##Dev Dependencies  
- chai
- eslint
- gulp
- gulp-eslint
- gulp-mocha
- mocha  


## Development Team  

 *Chris Perez* <https://github.com/ckperez>  
 *Dan Stineback* <https://github.com/dstineback>  
 *Stephen Schroder* <https://github.com/schrode50>  
