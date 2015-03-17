[![Code Climate](https://codeclimate.com/github/marcosomma/my-prototypes/badges/gpa.svg)](https://codeclimate.com/github/marcosomma/my-prototypes) [![Test Coverage](https://codeclimate.com/github/marcosomma/my-prototypes/badges/coverage.svg)](https://codeclimate.com/github/marcosomma/my-prototypes)
# my-prototypes
Add String and Numbers prototypes in your project.

##### Install
```npm install my-prototypes```

##### Use
``` require('my-prototypes').init ```

## String prototypes
- capitalize
- capitalizeAll
- htmlEscape
- htmlUnescape
- repeat
- substringAfterTo
- substringBeforeTo
- validateContent (dateEU, dateUS, time, email, ip-address, alphanumeric and phone)

##### capitalize
```String('test').capitalize()``` ==> ```"Test"```
##### capitalizeAll
```String('test test Test test').capitalizeAll()``` ==> ```"Test Test Test Test"```
##### htmlEscape
```String('Marco&Co').htmlEscape()``` ==> ```Marco&amp;Co```
##### htmlUnescape
```String('Marco&amp;Co').htmlUnescape()``` ==> ```Marco&Co```
##### repeat
```String('test0').repeat(3)``` ==> ```"test0test0test0"```
##### substringBeforeTo
```String('test0.test1').substringBeforeTo('.')``` ==> ```"test0"```
##### substringAfterTo
```String('test0.test1').substringAfterTo('.')``` ==> ```"test1"```
```String('test0.test1.test2.test3').substringAfterTo('.')``` ==> ```["test1","test2","test3"]```
##### validateContent
```String('mak.so1979@gmail.com').validateContent('email')``` ==> ```true```
```String('mak.so1979gmailcom').validateContent('email')``` ==> ```false```

## Number prototypes
- formatMoney
- getSecond
- getMilliSecond

##### formatMoney
formatMoney(decimals,simbol1,simbol2)

```Number(1000000.12).formatMoney(2,',','.')``` ==> ```"1,000,000.12"```
```Number(1000000.12).formatMoney(1,'/','-')``` ==> ```"1/000/000-1"```
##### getSecond
getSecond(hours,minutes,seconds)

```Number().getSecond(1,1,1)``` ==> ```3661```
##### getSecond
getMilliSecond(hours,minutes,seconds)

```Number().getMilliSecond(1,1,1)``` ==> ```3661000```