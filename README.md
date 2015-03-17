# my-prototypes
Add String and Numbers prototypes in your project.

##### Install
```npm install my-prototypes```

##### Use
``` require('my-prototypes').init ```

## String prototypes
- htmlEscape
- htmlUnescape
- validateContent (dateEU, dateUS, time, email, ip-address, alphanumeric and phone)

##### htmlEscape
```String('Marco&Co').htmlEscape()``` ==> ```Marco&amp;Co```
##### htmlUnescape
```String('Marco&amp;Co').htmlUnescape()``` ==> ```Marco&Co```
##### validateContent
```String('mak.so1979@gmail.com').validateContent('email')``` ==> ```true```
```String('mak.so1979gmailcom').validateContent('email')``` ==> ```false```

## Number prototypes
- formatMoney
- getSecond
- getMilliSecond

##### formatMoney
formatMoney(decimals,simbol1,simbol2)

```Number(1000000.12).formatMoney(2,',','.')``` ==> ```1,000,000.12```
```Number(1000000.12).formatMoney(1,'/','-')``` ==> ```1/000/000-1```
##### getSecond
getSecond(hours,minutes,seconds)

```Number().getSecond(1,1,1)``` ==> ```3661```
##### getSecond
getMilliSecond(hours,minutes,seconds)

```Number().getMilliSecond(1,1,1)``` ==> ```3661000```