[![Code Climate](https://codeclimate.com/github/marcosomma/my-prototypes/badges/gpa.svg)](https://codeclimate.com/github/marcosomma/my-prototypes) [![Test Coverage](https://codeclimate.com/github/marcosomma/my-prototypes/badges/coverage.svg)](https://codeclimate.com/github/marcosomma/my-prototypes)
# my-prototypes
Add Array, Numbers, Object and String prototypes in your project.

**Install**
```npm install my-prototypes```

**Use**
``` require('my-prototypes').init ```

***

## Array prototypes
- even
- evenIndex
- odd
- oddIndex

**even**
*Take all even numbers in an array*

```[1,2,3,3,4,5,6,7,8,8,9,6,5,4].even()``` result ```[2,4,6,8,8,6,4]```

**evenIndex**
*Take all even index in an array*

```["a","A","b","B","c","C","d","D","e","E","f","F"].evenIndex()``` result ```["a","b","c","d","e","f"]```

**odd**
*Take all odd numbers in an array*

```[1,2,3,3,4,5,6,7,8,8,9,6,5,4].odd()``` result ```[1,3,3,5,7,9,5]```

**oddIndex**
*Take all odd index in an array*

```["a","A","b","B","c","C","d","D","e","E","f","F"].oddIndex()``` result ```["A","B","C","D","E","F"]```

***

## Number prototypes
- formatMoney
- getSecond
- getMilliSecond

**formatMoney**(decimals)
*Convert integer o float number in a money value*

```1000000.12.formatMoney(2)``` result ```"1,000,000.12"```

**getSecond**(hours,minutes,seconds)
*Return seconds*

```Number().getSecond(1,1,1)``` result ```3661```

**getMilliSecond**(hours,minutes,seconds)
*Return milliseconds*

```Number().getMilliSecond(1,1,1)``` result ```3661000```

***

## Object prototypes
- lengthJSON
- splitJSON

**lengthJSON**
*Count element in a plane json*

```Object.lengthJSON({"key1":"value1","key2":"value2","key3":"value3","key4":"value4","key5":"value5"})``` result ```5```

**splitJSON**
*Split element of a plane json in an array of single elements*

```Object.splitJSON({"key1":"value1","key2":"value2","key3":"value3"})``` result ```[{key1:'value1'},{key2:'value2'},{key3:'value3'}]```

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

**capitalize**
*Capitalize first letter in a word*

```'test'.capitalize()``` result ```"Test"```

**capitalizeAll**
*Capitalize all first letters of all word contained in a sentence separate by space*

```'test test Test test'.capitalizeAll()``` result ```"Test Test Test Test"```

**getDateEU**
*Convert ```new Date``` in european format date*

```String(new Date).getDateEU()``` result ```dd/mm/yyyy```

**getDateUS**
*Convert ```new Date``` in american format date*

```String(new Date).getDateUS()``` result ```mm/dd/yyyy```

**getDbDate**
*Convert Database formar date ```2015-03-18T16:23:18.423Z``` in european format date*

```'2015-03-18T16:23:18.423Z'.getDbDate()``` result ```dd/mm/yyyy```

**getDbDateTime**
*Convert Database formar date ```2015-03-18T16:23:18.423Z``` in european format date and time*

```'2015-03-18T16:23:18.423Z'.getDbDateTime()``` result ```dd/mm/yyyy - hh:mm:ss```

**htmlEscape**
*Convert normal string in a html string*

```'Marco&Co'.htmlEscape()``` result ```Marco&#38;Co```

**htmlUnescape**
*Convert html string in a normal string*

```'Marco&#38;Co'.htmlUnescape()``` result ```Marco&Co```

**repeat**
*Repeat a word 'n' times*

```'test0'.repeat(3)``` result ```"test0test0test0"```

**reverseWord**
*Reverse a word*

```'test0'.Reverse(3)``` result ```"0tset"```

**substringBeforeTo**
*Return substring before an symbol*

```'test0.test1'.substringBeforeTo('.')``` result ```"test0"```

**substringAfterTo**
*Return substring after an symbol if the symbol is contained more times return an array*

```'test0.test1'.substringAfterTo('.')``` result ```"test1"```
```'test0.test1.test2.test3'.substringAfterTo('.')``` result ```["test1","test2","test3"]```

**validateContent**
*Validate content in a string*

```'mak.so1979@gmail.com'.validateContent('email')``` result ```true```
```'mak.so1979gmailcom'.validateContent('email')``` result ```false```