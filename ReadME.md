### front-end Technologies
 - HTML
    - CSS
    - JavaScript
    - Bootstrap framework
    - Angular
    - ReactJS
### Back-End Technologies
- node.js
       - express.js
       - nodemoon
       - cors
       - dotenv
    - PHP
    - c++
    - Java
    - Python
### DataBases
- MongoDb
- mMysql
- SQLite
- Firebase
- Postgressql(Java)
- Oracle
- Version Control System(VCS) or Source Code Management
  - Distributed VCS(Git,Mercurical)
  - Remote VCS or Central VCS(Github,Bitbucket)

  
###  HTML

  - HYPER TEXT MARKUP LANGUAGE
  - Semantic Elements
       - header
       - section
       - article
       - aside
       - footer
       - table
  - Block Level Elements
       - occupy entire width of browser
       - headings(h1 to h6)
       - paragraph
       - div
       - all semantic elements
       - Text eill start from newline
        
  - Inline Elements
       - span
       - image
       - a
       - nav
       - form
       - input
       - textarea
       - legend
       - sup
       - sub
       - unorder list
       - order list
Task :
=====
- Audio
- Video
- canvas
- progress
- datalist
- meter
- select

### CSS

+ Cascading Style Sheets
+ Types of CSS
  - Inline CSS
  - Internal CSS
  - External CSS

+Syntax of CSS

---
selector {
     css properties
}

---

#### SELECTORS
+ Simple Selectors
     - Universal selector
     - By Element Name
     - Grouping selector(,)
     - Class selector
     - Id selector

+ Combinators
     + Descendent selector( )
     + Child selector(>)
     + Adjacent sibling selector(+)
     + General sibling selector(~)
+ Pseudo class selector
+ Pseudo element selector
+ Attribute selector


#### Box Mode

+ Margin
+ Border
+ Padding
   - padding :10px(for all adjacent sides)
   - padding :10px(10px for top & bottom;30px for left &right)
   - padding :10px 300px 50px(10px for top;300px for left & right;50px for bottom)
   - padding :10px 30px 40px 50px(top,right,bottom,left)
+ Width
- 1rem:16px

#### Flex-box

+ display
  - none
  - inline
  - block
  - inline-block

+position 
   - static
   - relative
   - obsolute
   - fixed
   -sticky
+ align-content
+ align-items
+ align-self

### Animations


### Responsive Web Design
### Flex-Box

- display
   - flex
       - flex-wrap
       - justify-content
       - flex-direction
       - flex-flow


Task:2
=====
- Index.html
- Register.html
- Login.html


### Media Quries

- Extra Small Devices(Mobiles)
     - max-width:600px
- Small Devices(Large phones)
     - min-width:600px
     -  768px
- Medium Devices(Small Laptops)
     - min-width:768px
- Large Devices(Desktops or large laptops)
     - min-width:992px
- Extra Large Devices()
     - min-width:1200px


---
@media on screen (min-width:320px) and
(max-width:500px){
     CSS Code
}---

### Bootstrap 4.6

- It is a CSS framework


Task3:
====
   - Navbar with responsive

- module(collection of functions and classes)
- package(collection of modules)
- library(collection of packages)
- frameworks(collection of library
 + module ---> Package --> Library ---> Framework

 + Types of Mode
  - offline
  - online
     - CDN links
+ background-colour - bg
+ text-white

+ Margin in Bootstrap(m-* (0.5))
  - 0 --> 0rem
  - 1 -->0.25rem(4px)
  - 2 --> 0.5rem(8px)
  - 3 --> 1rem(16px)
  - 4 --> 1.5rem(24px)
  - 5 --> 3rem(48px)
  - m(margin in all directions)
  - ml-5 (margin-left)
  - mt(margin-top)
  - mb (margin-bottom)
  - mr (margin-right)
+ Padding (Padding-left --> p1-5)
+ colors
   -primary
   - secondary
   - info
   - success
   - warning
   - danger
   - light
   - dark
   - white
+ We can use color classes for 
   - Buttons (btn btn-primary)
   - text (text-white)
   - background (bg-secondary)
   - alerts (alert alert-primary)

+ Grid System
     -  col-sm-12
     - sm (small devices)
     - md (medium devices)
     - lg (large devices)
     - xl (extra large devices)
+ Modal
+ Table


### JavaScript

+ In 1995 "Brenden Eich" introduced JavaScript (ES-262)
+ JavaScript is loosely toupled and dynamic language
+ It is a text based programming language and we can use in client-side and server-side for dynamic web    application
- ECMA Script (ES-6)
    - let & const
    - map()
    - arrow function
    - classes
    - spread operator
    - rest parameter
+Datatypes
  - Number
  - BigInt (2^53-1)
  - String
  - Boolean
  - Undefine
  - Null
  - Object
  - Array

+ Variables
    - var,let & const
    - Scope
       - function level  -->  var
       - block level  -->  let & const
    - Redefine  -->  var,let
    - Redeclare  -->  var
+ 'typesof()'
+Object

---
{
     name:"Naveen"
}
---
+ Array

### Alerts

+ To generate notifications
   - alert
   - prompt(to take input from the user)
   - confirm

+ console statements
    - console.log()
    - console.info()
    - console.warn()
    - console.error()


+ spread operator
 ---
   ---variableName
   
---
- rest parameter
  - to handle function parameter
  ---

  ---parameter

  ---

  + Destructing of Arrays & Objects

  + Functions

  - function with functionname
  ---
  function demo(x,y){
       return x+y
  }
  demo()
  ---
  - Anonymous function
  ---
  let demo= function (x,y)
  {
       return x+y
  }
  ---

  - Arrow function
  ---
  let demo= (x,y) => {
       return x*y
  }
  demo (3,4)
  ---


  + for-in
    - To get index values of an array
  + for-of
     - To get elements in an array

  + forEach() --> (ES-5)
  +map() --> (ES-6)

### DOM

   - Document Object Model
   - document
   - history
   - window
   - navigator

+ DOM methods
  - 'getElementById()'
  - getElementByClassName()
  - querySelector()
  - innerText
  - textContent
  - append
  - appendChild
  - innerHTML
  - setAttribte()
  - classList
  - style
  - src

### JSON
+ JavaScript Object Notation
    - To exchange information between application and server

---
{
     "name":"Naveen Roy Chintala",
     "salary":"6.5LPA:,
     "Designatton":"MERN Developer",
     "mobile":9398216345
}
 ---
+ Ajax call or peomises (fetch API) or axios


### ReactJS

##### ReactJS Features

+ It is a library
+ It follows component based Architecture
    - Functional Component
    - Class Component
    - Pure Component
    - Higher Order Component
+ It provides Virtual DOM
+ It provides JSX (JavaScript and XML)
+ Unidirectional data flow
+ Single page applications

+ Project Environment setup 
    - [DownloadVisualStudioCode](https://code.visualstudio.com/download)
    - [DownloadNodejs](https://nodejs.org/en/download/)
    - install nodejs and check versions of 'node' and 'npm'
         - 'node -v'
         - 'npm -v'
     - 'webpack' and 'babel'
     - 'create-react-app'
         - 'npm(node package manager) install create-react-app'
              - 'create-react-app projectname'
     - 'npx(node package runner) create-react-app appname'

+ Index.html
+ index.js
+ App.js
     + IndexPage
     - nav.js
     - body.js
     - footer.js


          + Home.js
               - nav
               - body
               - footer
          + Login.js
          + Register
          + About
          + contact 

##### REFERENCE LINKS
- [Flaticon](https://www.flaticon.com/)
- [Free SVG](https://freesvg.org/)
- [Colour Code](https://htmlcolorcodes.com/)
- [Contrast Checker](https://webaim.org/resources/contrastchecker/)
