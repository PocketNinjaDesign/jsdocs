# JSDOC Documentation #

This is a current working but very basic jsdoc repo.  We'll be using this on the main responsive site but please feel free and add to and amend any time.

Things to look into are:

* http://jsdocedjs.org/
* please add more things of interest :-D


### How do I get set up? ###

* Download this repo
* install JSDOC


### Downloading repo ###

```
git clone git@bitbucket.org:lenses/jsdoc-documentation.git
```


### Installing JSDOC ###

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
jsdoc dev/js -c conf.json
```

You will now have documentation which renders with a horrible red background. This is because it's using the template egg within documents/templates.  This now means you know you can duplicate the folder and create your own template themes rather easily.  Well copying part not necessarily the actual styling etc :-D

## Other template example ##

* http://davidshimjs.github.io/jaguarjs/doc/collie.FPSConsole.html
* add more examples here :-P