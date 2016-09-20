[![Build Status](https://travis-ci.org/PLOPdotJS/plopjs.svg?branch=development)](https://travis-ci.org/PLOPdotJS/plopjs)
# plopjs

###Command Line Interface for creating and implementing project scaffolding and boilerplate code.  

## What is plopjs  

plopjs was created to simplify project development setup time. plopjs can easily save developers and companies countless man hours and reduce inconsistency and debugging across teams. Once a template is installed, it can be accessed locally or distributed and shared. Now that you have a sweet raise for showing your boss how to cut production costs and have more free time, what are you going to do?  

## What you will need  

plopjs is a Node module. Node will need to be installed and running correctly on your client for plopjs to function.  

If you are not sure what node is please visit <https://nodejs.org/en/>. Alternatively you can type:  

```
which node
```  
If you have node, this will show you the directory in which your instance of Node is installed.  

```shell
/Users/example/.node/bin/node
```    

## How to install  

installation of plopjs is a simple npm install. Plopjs should be installed globally to work correctly. To install, run  

```shell
npm install -g plopjs  
```  

## How to Start your plop$  
Starting your plop$ repl is very simple. Just type:  

```shell
plop
```  

Once plop$ is started, you should see:  

```shell
plop$  
```  

From ```plop$```, you can run any of the efficient plop$ commands.  

## How to use    

##plop$ install  

```shell
plop$ install <template_url> [options]
```  

####Example of install   

```shell
plop$ install https://github.com/PLOPdotJS/plop-test.git test1
```  

*template_url* is the GitHub repo url for the template that you are choosing.  

[options] is the name that you may choose to give your template.  

plop$ *install* will create a new plopjs template that will be stored locally in a plopjs  directory that is created for you. Once the plopjs template is installed, it will be accessible by any of the plop$ commands.  

####Please note that if you do not name your plopjs repo on install it will default to the name of the repo.  

plop$ install also has an alias `i`.  

####Example of the alias  

```shell  
plop$ i <template_url> [options]
```  

##plop$ use  

```shell
plop$ use <template>   
```  

*template* is the name of installed plopjs template.  

```shell
plop$ use test1
```  

plop$ *use* will load what ever template you choose **into your working directory**.  

For Node projects, run ```npm i``` to install all the required dependencies that are used in the plopjs template.  

##plop$ init  

```shell
plop$ init  
```  

The plop$ *init* command creates a starting point for building custom plopjs templates.  

Prompts in the plop$ repl will walk you through making a new plop.json file. It will also make an empty README.md and an empty template directory.    

####Example  
of the plop.json prompt  

```shell
plop$ Template name: <name>
plop$ Description: <description of template>
plop$ Author: <name of author>
plop$ License: <license type>
plop$ Version: 0.1.0
```  

After the init prompts are completed, you will be shown the files you created and the repl will close. Make sure to build your custom template *inside* the new template directory. Any files other than the plop.json and README.md that are outside the template directory will not be included in your plopjs when saved.  

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

Once you have your template built out, you may either:  

- create a new <https://github.com/> repository on git hub and push your template.  
or  
- git init and initialize a github repository from your working directory.  
or  
- use ```plop$ save``` command.   

##plop$ save  

```shell  
plop$ save [name]
```  

plop$ *save* will take the plopjs template that you created from scratch and save it locally to your plopjs directory. You can then use ```plop$ list``` to verify that your template has been saved. Now, that new plopjs template will be available for any future projects.  

[name] is the name you choose to name the new plopjs template you created.  

*save* also has an alias `s`.  

####Example of the alias  

```shell
plop$ s [name]
```  

##plop$ list  

```shell
plop$ list
```  

plop$ *list* prints a list of plopjs templates that are saved and available on your local machine. Once a new plopjs is installed using plop$ *install*, it will be added to the list of plopjs templates displayed by this command.  

plop$ *list* also has a shorthand alias `ls`.  

####Example of alias  

```shell  
plop$ ls
```  

##plop$ delete  

```shell
plop$ delete [name]
```  

plop$ *delete* can delete any plopjs that is saved on your local client.  

####Please note that delete *WILL* delete the file so double check that you are using the correct plopjs name.  

##plop$ exit  

```shell  
plop$ exit
```  

plop$ *exit* will exit the plop$ repl and return you to your default shell. Exit does have an alias `k`, as in "K. I'm done," and the more common alias `q` that will also take you out of the plop$ repl.  

####Example of the alias  
```shell
plop$ k
```  
```shell
plop$ q  
```  

##plop$ help  

```shell
plop$ help [command]
```  

plop$ *help* will bring up a list of plop$ commands and options. If followed by a specific command, it will display the help text for that command. As is common in CLI environments, you may also enter `--h`.  

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
