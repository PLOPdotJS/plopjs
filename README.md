# plopjs

Cloud-based storage for organization-level boilerplate code

## What is plopjs
###Plopjs was created to simplify company project development set up time. Plopjs can easily save development teams countless man hours due to repetitive set up time and also reduce inconsistency and debugging. Once a template is installed they will be able to be accessed on your local client anywhere anytime! Now that you have a sweet raise for showing your boss how to cut production cost and have more free time what are you going to do?

## What you will need

###plopjs is a Node module. Node will need to be installed and running correctly on your client for plopjs to function.

###If you are not sure what node is please visit <https://nodejs.org/en/>. Alternatively you can type
```shell
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

## How to use  

##$plop install
```shell
$plop install <github template repo url> <name that you choose to name your template>
````

```shell
$plop install https://github.com/PLOPdotJS/plop-test.git test
```

###Please note that if you do not name your plop repo on install it will default to the name of the repo.

##$plop use
```shell
$plop use <name of saved template> <path you would like the template loaded to>
```

####use will load what ever template you choose into specified directory or if no directory is named then it will default to your working directory.

##$plop init
```shell
$plop init <name of what you want the template to be named>
```

##Very important to note the naming structure of any plop template.
```shell
plop-name or plop_name
```
###naming your plop correctly will allow for easy fluid installation.  
##using plop init allows a starting point to create a plop.json and start making your own plop template. This is your chance to be creative and customize your plop. Once you have your template built out you may either:

###-create a new github repository on git hub and push your template
###or
###-git init and initialize a github repository from your working directory.

##$plop list
```shell
$plop list
```  
###list prints a list of plop templates that are saved and available on your local client. Once a new plop is installed using plop install it will be added to the list of plops.

##$plop delete
```shell
$plop delete
```  
###delete will delete any plop that is saved on your local client.
##Please note that delete WILL delete the file so double check that you are using the correct plop name.

## Development Team

### *Chris Perez*
### *Dan Stineback*
### *Stephen Schroder*
