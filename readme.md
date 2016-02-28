# Simple Sass

## A quick gulp Sass compiler / watcher / local server

## Getting Started

### Initial Setup

To use the UI Pattern Library your machine will require some software to be installed to start.

The software you will need is:

  - Node.js
  - Gulp

You can check in your command line application whether you have these installed by entering the name of the package with -v afterwards; for example:

```
$ node -v
```
or 
```
$ gulp -v
```

If either of these throw an error in your command line application, that means that you do not have them installed, and will need to do so before using Simple Sass.

#### To Install Node

The best way to download and install Node is via the [downloads page](https://nodejs.org/download/).

#### To Install Gulp

Once you have Node installed, you can install the Gulp task manager by entering the following command into your command line application:

```
$ npm install gulp --global
```

## Installing Simple Sass

- Navigate to your development folder (usually `sites`):
  ```
  $ cd Sites
  ```
  
- Clone the repo from Github onto your machine
  ```
  $ git clone git@github.com:sturobson/simpleSass.git
  ```
  
- Once the repo has installed enter the directory:
  ```
  $ cd simpleSass
  ```
  
- Install the Gulp plugins using NPM:
  ```
  $ npm install
  ```

## Running Simple Sass

Within the file `gulpfiles.js` there are four variables that will need changing if you're applying this to a existing project:

```
var sassFolder    = 'sass/';
var sassFileName  = 'styles.scss';
var sassWatch     = 'sass/**/*.scss';
var cssFileName   = 'styles.css';
```

### With a local server
To run this and create a local server

```
$ gulp server
```
### Without a local server

To run this without a local server to only compile Sass
```
$ gulp dev
```

### To build a minified `.css` file

To create a minified css file ready for production
```
$ gulp build
```
