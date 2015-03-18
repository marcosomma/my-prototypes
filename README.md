[![Code Climate](https://codeclimate.com/github/marcosomma/my-prototypes/badges/gpa.svg)](https://codeclimate.com/github/marcosomma/my-prototypes) [![Test Coverage](https://codeclimate.com/github/marcosomma/my-prototypes/badges/coverage.svg)](https://codeclimate.com/github/marcosomma/my-prototypes)
# my-prototypes
Add String and Numbers prototypes in your project.

**Install**
```npm install my-prototypes```

**Use**
``` require('my-prototypes').init ```

***

## String prototypes
- capitalize
- capitalizeAll
- getDateEU
- getDateUS
- getDbDate
- getDbDateTime
- htmlEscape
- htmlUnescape
- repeat
- substringAfterTo
- substringBeforeTo
- validateContent (dateEU, dateUS, time, email, ip-address, alphanumeric and phone)

**capitalize**
*Capitalize first letter in a word*

```String('test').capitalize()``` result ```"Test"```

**capitalizeAll**
*Capitalize all first letters of all word contained in a sentence separate by space*

```String('test test Test test').capitalizeAll()``` result ```"Test Test Test Test"```

**getDateEU**
*Convert ```new Date``` in european format date*

```String(new Date).getDateEU()``` result ```dd/mm/yyyy```

**getDateUS**
*Convert ```new Date``` in american format date*

```String(new Date).getDateUS()``` result ```mm/dd/yyyy```

**getDbDate**
*Convert Database formar date ```2015-03-18T16:23:18.423Z``` in european format date*

```String('2015-03-18T16:23:18.423Z').getDbDate()``` result ```dd/mm/yyyy```

**getDbDateTime**
*Convert Database formar date ```2015-03-18T16:23:18.423Z``` in european format date and time*

```String('2015-03-18T16:23:18.423Z').getDbDateTime()``` result ```dd/mm/yyyy - hh:mm:ss```

**htmlEscape**
*Convert normal string in a html string*

```String('Marco&Co').htmlEscape()``` result ```Marco&amp;Co```

**htmlUnescape**
*Convert html string in a normal string*

```String('Marco&amp;Co').htmlUnescape()``` result ```Marco&Co```

**repeat**
*Repeat a word 'n' times*

```String('test0').repeat(3)``` result ```"test0test0test0"```

**substringBeforeTo**
*Return substring before an symbol*

```String('test0.test1').substringBeforeTo('.')``` result ```"test0"```

**substringAfterTo**
*Return substring after an symbol if the symbol is contained more times return an array*

```String('test0.test1').substringAfterTo('.')``` result ```"test1"```
```String('test0.test1.test2.test3').substringAfterTo('.')``` result ```["test1","test2","test3"]```

**validateContent**
*Validate content in a string*

```String('mak.so1979@gmail.com').validateContent('email')``` result ```true```
```String('mak.so1979gmailcom').validateContent('email')``` result ```false```

***

## Number prototypes
- formatMoney
- getSecond
- getMilliSecond

**formatMoney**(decimals)
*Convert integer o float number in a money value*

```Number(1000000.12).formatMoney(2)``` result ```"1,000,000.12"```

**getSecond**(hours,minutes,seconds)
*Return seconds*

```Number().getSecond(1,1,1)``` result ```3661```

**getMilliSecond**(hours,minutes,seconds)
*Return milliseconds*

```Number().getMilliSecond(1,1,1)``` result ```3661000```