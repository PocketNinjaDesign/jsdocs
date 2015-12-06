# JSDOC Documentation #

This is a current working but very basic jsdoc repo.  We'll be using this on the main responsive site but please feel free and add to and amend any time.

Things to look into are:

* http://jsdocedjs.org/
* please add more things of interest :-D


### How do I get set up? ###

* Download this repo
* install JSDOC


##### Downloading repo #####

```
git clone git@github.com:eyeamaman/jsdocs.git
```


##### Installing JSDOC #####

```
npm install jsdoc
```

To run jsdoc simple navigate to the jsdoc-documentation folder and run

```
jsdoc dev/js
```

you will then have a folder called out generated with an index.html file you can double click and run. Well done you now have documentation to look at.

#### using the config ####

in order to use the conf.json file run

```
jsdoc -c conf.json
```

You will now have documentation which renders my basic eyeamaman theme. The template is specified in the conf.json, as is the output folder.

All you have to do is duplicate one of the folders and create your own template theme.  Or just use mine!  The eyeamaman theme will be getting better, I've already added a sub navigation of Methods etc so you can scroll down the page on click.  Also it's just nice to see the list of Methods rather than trying to count them on a long flipping page :-S

## templates so far ##

* egg - basic with crap red background
* eyeamaman - basic with colour theme and tasty javascript being added, not blue though :-S
* pocketninja - This is starting to get good.  more styling control and starting to look spiffing.

To use any of these templates, simply edit the conf.json file and change the line

```
"template": "documents/templates/{NAME}",
```

to any of the template names above, eg:

```
"template": "documents/templates/eyeamaman",
```
