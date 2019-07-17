## Purpose
The purpose of this piece of software is to develop a system which accept in array of integers as an input and then it does some aperture pair with the figures  and multiply the pairs then later sum the results.
This Software has been developed for the Good Monday as a part of their recruitment process by following the guidelines which they provided.


## Scope 
The software can be run using computers, mobile devices and tablets.

## Requirement
The user’s device should be connected to the internet, and have a modern browser such as Safari, Chrome, and the latest firefox.

## Technologies
The technologies used to develop this software are ReactJS, CSS, JSX and JavaScript
ReactJS is the backbone of the software, while CSS is used for styling, JSX is used for rendering the data and Javascript is the main programming language used to develop the logic in controlling the way the software behave

## Product Constraints
The input can only accept integers, none integers will generate an error message.

## Product Functionality
The input of the software accept integers both positive and negative numbers. It compute them and pair them in rounded bracket(s). If the input have 1 and 0, it put them in singly in the rounded bracket, an exception is when another integer take the position zero index in the pair with a 1 or  0 being in a position one index in the rounded bracket which in this case they can be paired with the number. The paired number multiply with each other, the result total is added with those with single pair.

## Users Guidelines
The user should input integers separate them with a comma. After entering your desire figures click on the green button “Get Result”. Your results will appear on the screen.

## Software Quality
 The software has been tested with the help of Jest and Enzyme. Six test cases have been made which all of them pass the test. To run the test  ‘npm test’ on your CI.

## Useful Informations
-To download:- You can either download this repo as a zip file or throw  "git clone https://github.com/bless4/goodmonday.git"

### On the downloaded repo Run ‘npm install’
### npm start
### To test run "npm test"
### For deployment run "npm build"



## Structure
```
```
|--public
|-- src
```   
```
      |_snapshots_
      ```
      ```
          |--App.test.js.snap
          ````
```
      |--component
      ```
        ```
          |--snapshots`
          ```
          ```
               |--Main.test.js.snap
               ```
      ```
          |--widget
          ```
            ```
               |--snapshots
               |--ButtonWidget.js
               |--ButtonWidget.test.js
               |--Index.js
               |--InputWidget.js
               |--InputWidget.test.js
               |--ResultWidget.js
               |--ResultWidget.test.js
               ```
          ```     
          |--Main.js
          |main.test.js     
          ```
    ```  |--img
           |--plant.gif 
           ```
 ```
      |--App.css
      |--App.test.js
      |--index.css
      |--index.js
      |--serviceWorker.js
      |setupTest.js
 ```

```
|--gitignore
|--package-lockjson
|--package.json
|--README.md
```
```
# good-monday
