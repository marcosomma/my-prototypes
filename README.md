[![NPM](https://nodei.co/npm/my-prototypes.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/my-prototypes/)

[![](https://img.shields.io/badge/version-BETA%20--%20in%20porgress-red.svg)](https://www.npmjs.com/package/my-prototypes)

[![](https://img.shields.io/badge/autor-Marco%20Somma-lightgrey.svg?style=flat)](https://www.npmjs.com/~marcosomma) [![](https://img.shields.io/badge/license-ISC-blue.svg?style=flat)](https://www.npmjs.com/package/my-prototypes) [![npm](https://img.shields.io/npm/dm/my-prototypes.svg)](https://www.npmjs.com/package/my-prototypes)

[![npm version](https://badge.fury.io/js/my-prototypes.svg)](http://badge.fury.io/js/my-prototypes) [![Codacy Badge](https://www.codacy.com/project/badge/ac6c42fb818542abaad4fb0fd05f39f1)](https://www.codacy.com/public/makso1979/my-prototypes) [![Code Climate](https://codeclimate.com/github/marcosomma/my-prototypes/badges/gpa.svg)](https://codeclimate.com/github/marcosomma/my-prototypes) [![Test Coverage](https://codeclimate.com/github/marcosomma/my-prototypes/badges/coverage.svg)](https://codeclimate.com/github/marcosomma/my-prototypes) [![CircleCI branch](https://img.shields.io/circleci/project/marcosomma/my-prototypes/master.svg)](https://circleci.com/gh/marcosomma/my-prototypes/tree/master)

# my-prototypes
Add Array, Numbers, Object and String prototypes in your project.

### Install
 ``` npm install my-prototypes ``` 

### Use
 ```  require('my-prototypes').init()  ``` 

***

## Array prototypes
- first
- last
- containElement
- eliminateDuplicate
- remove
- generateScale
- even
- evenIndex
- odd
- oddIndex

### first
*First element in an array*

 ```  [1,2,3,3,4,5,6,7,8,8,9,6,5,4].first()  ```  

result

 ``` 1 ``` 

### last
*Last element in an array*

 ``` [1,2,3,3,4,5,6,7,8,8,9,6,5,4].last() ``` 

result

 ``` 4 ``` 

### containElement
*check if an array contain an element*

 ``` ["A","B","C","D","E","F"].containElement("A") ``` 
 
 result

 ```  true  ``` 

### eliminateDuplicate
*Eliminate all element duplicated in an array*

 ``` [1,2,3,3,4,5,6,7,8,8,9,6,5,4].even() ``` 
 
result 

 ``` [1,2,3,4,5,6,7,8,9] ``` 

### remove(element/[elements])
*Remove elements in an array*

- example 1

	 ``` [1,2,3,3].remove(3) ```  
	
	result 
	
	 ``` [1,2] ``` 

- example 2

	 ``` ["A","B","C","D","E","F"].remove(["A","B","C"]) ```  
	
	result 
	
	 ``` ["D","E","F"] ``` 

### generateScale(type,style,start,end,interval)
*generate an array of specific element*

- example 1

	 ``` var myarray = Array().generateScale('letters','upper','a','c',null) ```  
	
	result 
	
	 ``` ["A","B","C"] ``` 

- example 2

	 ``` var myarray = Array().generateScale('letters','lower','a','f',2) ```  

	result 

	 ``` ["a","c","e"] ``` 

- example 3

	 ``` var myarray = Array().generateScale('numbers',null,0,9,3) ```  

	result 

	 ``` [0,3,6,9] ``` 

- example 4

	 ``` var myarray = Array().generateScale('numbers',null,-9,0,1) ```  

	result 

	 ``` [-9,-8,-7,-6,-5,-4,-3,-2,-1,0] ``` 

### even
*Take all even numbers in an array*

 ``` [1,2,3,3,4,5,6,7,8,8,9,6,5,4].even() ```  

result 

 ``` [2,4,6,8,8,6,4] ``` 

### evenIndex
*Take all even index in an array*

 ``` ["a","A","b","B","c","C","d","D","e","E","f","F"].evenIndex() ```  

result 

 ``` ["a","b","c","d","e","f"] ``` 

### odd
*Take all odd numbers in an array*

 ``` [1,2,3,3,4,5,6,7,8,8,9,6,5,4].odd() ```  

result 

 ``` [1,3,3,5,7,9,5] ``` 

### oddIndex
*Take all odd index in an array*

 ``` ["a","A","b","B","c","C","d","D","e","E","f","F"].oddIndex() ```  

result 

 ``` ["A","B","C","D","E","F"] ``` 

***

## Number prototypes
- formatMoney
- getSecond
- getMilliSecond
- isEven

### formatMoney(decimals)
*Convert integer o float number in a money value*

 ``` 1000000.12.formatMoney(2) ```  

result 

 ``` "1,000,000.12" ``` 

### getSecond(hours,minutes,seconds)
*Return seconds*

 ``` Number().getSecond(1,1,1) ```  

result 

 ``` 3661 ``` 

### getMilliSecond(hours,minutes,seconds)
*Return milliseconds*

 ``` Number().getMilliSecond(1,1,1) ```  

result 

 ``` 3661000 ``` 

### isEven
*Check is the number is even*

 ``` var n = 124; ``` 

 ``` n.isEven() ```  

result 

 ``` true ``` 

***

## Object prototypes
- concatElements
- generator
- lengthObject
- splitElements
- toArray

### concatElements([{key1:value1},{key2:value2},{key3:value3}])
*Concat more Objects in a single Object.git tag*

 ``` Object().concatElements([{key1:'value1'},{key2:'value2'},{key3:'value3'}]) ```  

result 

 ``` {key1:"value1",key2:"value2",key3:"value3"} ``` 

### generator([key,value,key2,value2,key3,value3.....])
*Generate Objects from an array*

 ``` Object().generator(["key1","value1","key2",{subkey1:"subvalue1",subkey2:"subvalue2"},"key3",["subvalue1","subvalue2"]]) ```  

result 

 ``` {key1:"value1",key2:{subkey1:"subvalue1",subkey2:"subvalue2"},key3:["subvalue1","subvalue2"]} ``` 

### lengthObject
*Count elements*

 ```  var a = {key1:"value1",key2:"value2",key3:"value3",key4:"value4",key5:"value5"};  ``` 

 ``` a.length() ```  

result 

 ``` 5 ``` 


### splitElements
*Split element in an array of single elements*

 ``` var a = {key1:"value1",key2:"value2",key3:"value3"}; ``` 

 ``` a.splitElements() ```  

result 

 ``` [{key1:'value1'},{key2:'value2'},{key3:'value3'}] ```

### toArray
*Generate an array with object values*

``` var o = {key1:"value1",key2:{subkey1:"subvalue1",subkey2:"subvalue2"},key3:["subvalue1","subvalue2"]}; ```

``` o.toArray(); ```

result

 ``` ["value1",{subkey1:"subvalue1",subkey2:"subvalue2"},["subvalue1","subvalue2"]] ```

***

## String prototypes
- capitalize
- capitalizeAll
- getDateEU
- getDateUS
- getDbDate
- getDbDateTime
- htmlEscape (exclude ":", ";" and "#")
- htmlUnescape (exclude ":", ";" and "#")
- repeat
- reverseWord
- substringAfterTo
- substringBeforeTo
- validateContent (dateEU, dateUS, time, email, ip-address, alphanumeric and phone)

### capitalize
*Capitalize first letter in a word*

 ``` 'test'.capitalize() ```  

result 

 ``` "Test" ``` 

### capitalizeAll
*Capitalize all first letters of all word contained in a sentence separate by space*

 ``` 'test test Test test'.capitalizeAll() ```  

result 

 ``` "Test Test Test Test" ``` 

### getDateEU
*Convert  ``` new Date ```  in european format date*

 ``` String(new Date).getDateEU() ```  

result 

 ``` dd/mm/yyyy ``` 

### getDateUS
*Convert  ``` new Date ```  in american format date*

 ``` String(new Date).getDateUS() ```  

result 

 ``` mm/dd/yyyy ``` 

### getDbDate
*Convert Database formar date  ``` 2015-03-18T16:23:18.423Z ```  in european format date*

 ``` '2015-03-18T16:23:18.423Z'.getDbDate() ```  

result 

 ``` dd/mm/yyyy ``` 

### getDbDateTime
*Convert Database formar date  ``` 2015-03-18T16:23:18.423Z ```  in european format date and time*

 ``` '2015-03-18T16:23:18.423Z'.getDbDateTime() ```  

result 

 ``` dd/mm/yyyy - hh:mm:ss ``` 

### htmlEscape
*Convert normal string in a html string*

 ``` 'Marco&Co'.htmlEscape() ```  

result 

 ``` Marco&#38;Co ``` 

### htmlUnescape
*Convert html string in a normal string*

 ``` 'Marco&#38;Co'.htmlUnescape() ```  

result 

 ``` Marco&Co ``` 

### repeat
*Repeat a word 'n' times*

 ``` 'test0'.repeat(3) ```  

result 

 ``` "test0test0test0" ``` 

### reverseWord
*Reverse a word*

 ``` 'test0'.reverseWord() ```  

result 

 ``` "0tset" ``` 

### substringBeforeTo
*Return substring before an symbol*

 ``` 'test0.test1'.substringBeforeTo('.') ```  

result 

 ``` "test0" ``` 

### substringAfterTo
*Return substring after an symbol if the symbol is contained more times return an array*

- example 1

 	``` 'test0.test1'.substringAfterTo('.') ```  

	result 

	 ``` "test1" ``` 

- example 2

 	``` 'test0.test1.test2.test3'.substringAfterTo('.') ```  

	result 

 	``` ["test1","test2","test3"] ``` 

### validateContent
*Validate content in a string*

- example 1

	 ``` 'mak.so1979@gmail.com'.validateContent('email') ```  

	result 

	 ``` true ``` 

- example 2

	 ``` 'mak.so1979gmailcom'.validateContent('email') ```  

	result 

	 ``` false ``` 


***
### License ISC
*Copyright (c) 2015, Marco Somma.*

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.