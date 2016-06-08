# plopjs

###Cloud-based storage for organization-level boilerplate code

## What is plopjs  
###Plopjs was created to simplify company project development set up time. Plopjs can easily save development teams countless man hours due to repetitive set up time and also reduce inconsistency and debugging. Once a template is installed they will be able to be accessed on your local client anywhere anytime! Now that you have a sweet raise for showing your boss how to cut production cost and have more free time what are you going to do?  

## What you will need

###plopjs is a Node module. Node will need to be installed and running correctly on your client for plopjs to function.  

###If you are not sure what node is please visit <https://nodejs.org/en/>. Alternatively you can type  
```
which node
```  
###and this will show you the directory that node is located in on your computer if it is already installed.  

```shell
/Users/example/.node/bin/node
```  
## How to install  

```shell
npm install plopjs
```  
//TODO  
## How to Start your plop  
//TODO need to add info on how to start the plop command line.  

## How to use    

##$plop install  
```shell
$plop install <github template repo url> <name that you choose to name your template>
````  

```shell
$plop install https://github.com/PLOPdotJS/plop-test.git test
```  
##VERY IMPORTANT ALL GITHUB REPOS MUST BE NON SSH. IT WILL ONLY WORK HTTPS.

###Please note that if you do not name your plop repo on install it will default to the name of the repo.  

##$plop use  
```shell
$plop use <name of saved template> <path you would like the template loaded to>
```  

####plop *use* will load what ever template you choose into specified directory or if no directory is named then it will default to your working directory.  

##$plop init  
```shell
$plop init <name of what you want the template to be named>
```  

##Very important to note the naming structure of any plop template.  
```shell
plop-name or plop_name
```  
###naming your plop correctly will allow for easy fluid installation. Not naming your plop correctly would result in error.      
##using plop init allows a starting point to create a plop.json and start making your own plop template. This is your chance to be creative and customize your plop.  

###plop *init* prompts will walk you through making a new plop.json file. It will also make an empty README.md that you will need to populate and also an empty template directory. Make sure to make your template *INSIDE* the template directory. Any files other then the plop.json and README.md that are outside the template directory will not be included in your plop.  

###Example of the plop.json prompt  
```shell
$plop Template name: <name>
$plop Description: <description of template>
$plop Author: <name or email of author>
$plop License: <MIT>
$plop Version: 0.1.0
```  
###After the init prompts are completed it exits the repl. You may now change into the template directory and start making your template.  
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
Change directories into your template and start building your plop!
```  
###Once you have your template built out you may either:  

###-create a new github repository on git hub and push your template
###or
###-git init and initialize a github repository from your working directory.  

##$plop list  
```shell
$plop list
```  
###plop *list* prints a list of plop templates that are saved and available on your local client. Once a new plop is installed using plop install it will be added to the list of plops.  

##$plop delete  
```shell
$plop delete
```   
###plop *delete* will delete any plop that is saved on your local client.

##Please note that delete *WILL* delete the file so double check that you are using the correct plop name.  

##$plop k  
```shell  
$plop k  
```  
###plop *k* will exit the repl and take you to node shell.  

##$plop help  

```shell
$plop help
```  
###plop *help* will bring up a list of plop commands and options.  

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

### *Chris Perez* <https://github.com/ckperez>
### *Dan Stineback* <https://github.com/dstineback>
### *Stephen Schroder* <https://github.com/schrode50>
