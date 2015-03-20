/**
 * Created by iMak on 17/03/15.
 */
var should = require('chai').should(),
    prototypes = require('../index'),
    init = prototypes.init,
    dbDate = '2015-03-18T16:23:18.423Z',
    today = new Date(),
    dateEU = today.getUTCDate() + "/"
        + (today.getMonth()+1)  + "/"
        + today.getFullYear(),
    dateUS = (today.getMonth()+1) + "/"
        + today.getUTCDate() + "/"
        + today.getFullYear(),
    wrongDateUS = (today.getMonth()+1) + "0/"
        + today.getDay() + "0/"
        + today.getFullYear(),
    wrongDateEU = today.getDay() + "0/"
        + (today.getMonth()+1)  + "0/"
        + today.getFullYear(),
    time = today.getHours() + ":"
        + today.getMinutes() + ":"
        + today.getSeconds(),
    wrongTime = today.getHours() + "0:"
        + today.getMinutes() + ":0"
        + today.getSeconds();

describe('#init', function() {
    it('import prototypes', function () {
        init().should.equal('prototypes imported');
    });
});

describe('#String', function() {
    it('converts & into &#38;', function() {
        '&'.htmlEscape().should.equal('&#38;');
    });

    it('converts "Marco&Co" into Marco&#38;Co', function() {
        'Marco&Co'.htmlEscape().should.equal('Marco&#38;Co');
    });

    it('converts "Marco&C\'o" into "Marco&#38;C&#39;o"', function() {
        "Marco&C'o".htmlEscape().should.equal('Marco&#38;C&#39;o');
    });

    it('converts " into &#34;', function() {
        '"'.htmlEscape().should.equal('&#34;');
    });

    it("converts ' into &#39;", function() {
        "'".htmlEscape().should.equal('&#39;');
    });

    it('converts < into &#60;', function() {
        '<'.htmlEscape().should.equal('&#60;');
    });

    it('converts > into &#62;', function() {
        '>'.htmlEscape().should.equal('&#62;');
    });

    it('converts &#38; into &', function() {
        '&#38;'.htmlUnescape().should.equal('&');
    });

    it('converts &#34; into "', function() {
        '&#34;'.htmlUnescape().should.equal('"');
    });

    it("converts &#39; into '", function() {
        '&#39;'.htmlUnescape().should.equal("'");
    });

    it('converts &#60; into <', function() {
        '&#60;'.htmlUnescape().should.equal('<');
    });

    it('converts &#62; into >', function() {
        '&#62;'.htmlUnescape().should.equal('>');
    });

    it('validate "mak.so1979@gmail.com" as email', function() {
        'mak.so1979@gmail.com'.validateContent('email').should.equal(true);
    });

    it('validate "mak.so1979@gmailcom" is NOT email', function() {
        'mak.so1979@gmailcom'.validateContent('email').should.equal(false);
    });

    it('validate "12aa12" as alphanumeric', function() {
        '12aa12'.validateContent('alphanumeric').should.equal(true);
    });

    it('validate "12aasa2@12" is NOT alphanumeric', function() {
        '12aasa2@12'.validateContent('alphanumeric').should.equal(false);
    });

    it('validate "'+dateEU+'" as dateEU', function() {
        dateEU.validateContent('dateEU').should.equal(true);
    });

    it('validate "'+wrongDateEU+'" is NOT dateEU', function() {
        wrongDateEU.validateContent('dateEU').should.equal(false);
    });

    it('validate "'+dateUS+'" as dateUS', function() {
        dateUS.validateContent('dateUS').should.equal(true);
    });

    it('validate "'+wrongDateUS+'" is NOT dateUS', function() {
        wrongDateUS.validateContent('dateUS').should.equal(false);
    });

    it('validate "'+time+'" as time', function() {
        time.validateContent('time').should.equal(true);
    });

    it('validate "'+wrongTime+'" is NOT time', function() {
        wrongTime.validateContent('time').should.equal(false);
    });

    it('validate "127.0.0.1" as ip-address', function() {
        '127.0.0.1'.validateContent('ip-address').should.equal(true);
    });

    it('validate "999.99.256.1" is NOT ip-address', function() {
        '999.99.256.1'.validateContent('ip-address').should.equal(false);
    });

    it('validate "+353 0866656" as phone', function() {
        '+353 0866656'.validateContent('phone').should.equal(true);
    });

    it('validate "+a353 0866656zz" is NOT phone', function() {
        '+a353 0866656zz'.validateContent('phone').should.equal(false);
    });

    it('split "." in "test0.test1" and give the first value', function() {
        'test0.test1'.substringBeforeTo('.').should.equal('test0');
    });

    it('split "$" in "test0.test1" and give the first value', function() {
        'test0.test1'.substringBeforeTo('$').should.equal('test0.test1');
    });

    it('split "." in "test0.test1" and give the second value', function() {
        'test0.test1'.substringAfterTo('.').should.equal('test1');
    });

    it('split "$" in "test0.test1" and give the second value', function() {
        'test0.test1'.substringAfterTo('$').should.equal('test0.test1');
    });

    it('split "." in "test0.test1.test2.test3" and give the all values after the first', function() {
        'test0.test1.test2.test3'.substringAfterTo('.').should.have.length(3);
        'test0.test1.test2.test3'.substringAfterTo('.')[0].should.equal('test1');
        'test0.test1.test2.test3'.substringAfterTo('.')[1].should.equal('test2');
        'test0.test1.test2.test3'.substringAfterTo('.')[2].should.equal('test3');
    });

    it('repeat "test0" for 3 times', function() {
        'test0'.repeat(3).should.equal('test0test0test0');
    });

    it('repeat "test0" for 0 times', function() {
        'test0'.repeat(0).should.equal('');
    });

    it('reverse "test0" result "0tset"', function() {
        'test0'.reverseWord().should.equal('0tset');
    });

    it('capitalize "test" return "Test"', function() {
        'test'.capitalize().should.equal('Test');
    });

    it('capitalizeAll "test test Test test" return "Test Test Test Test"', function() {
        'test test Test test'.capitalizeAll().should.equal('Test Test Test Test');
    });

    it('convert "'+today+'" in "'+dateEU+'"', function() {
        String(new Date).getDateEU().should.equal(dateEU);
    });

    it('convert "'+today+'" in "'+dateUS+'"', function() {
        String(new Date).getDateUS().should.equal(dateUS);
    });

    it('convert DB format date "'+dbDate+'" in "18/03/2015"', function() {
        dbDate.getDbDate().should.equal("18/03/2015");
    });

    it('convert DB format date "'+dbDate+'" in "18/03/2015 - 16:23:18"', function() {
        dbDate.getDbDateTime().should.equal("18/03/2015 - 16:23:18");
    });
});

describe('#Number', function() {
    it('converts 1000000.12 into 1,000,000.12', function() {
        1000000.12.formatMoney(2).should.equal('1,000,000.12');
    });

    it('get seconds in 1 hours 1 minut and 1 second = 3661', function() {
        Number().getSecond(1,1,1).should.equal(3661);
    });

    it('get milliseconds in 1 hours 1 minut and 1 second = 3661000', function() {
        Number().getMilliSecond(1,1,1).should.equal(3661000);
    });
});

describe('#Object', function() {
    it('Count element in a plane json {"key1":"value1","key2":"value2","key3":"value3","key4":"value4","key5":"value5"} result 5', function() {
        Object.lengthJSON({"key1":"value1","key2":"value2","key3":"value3","key4":"value4","key5":"value5"}).should.equal(5);
    });
    it('Split element of a plane json in an array of single elements {"key1":"value1","key2":"value2","key3":"value3"} result [{key1:"value1"},{key2:"value2"},{key3:"value3"}]', function() {
        Object.splitJSON({"key1":"value1","key2":"value2","key3":"value3"}).should.have.length(3);
        Object.splitJSON({"key1":"value1","key2":"value2","key3":"value3"})[0].key1.should.equal("value1");
        Object.splitJSON({"key1":"value1","key2":"value2","key3":"value3"})[1].key2.should.equal("value2");
        Object.splitJSON({"key1":"value1","key2":"value2","key3":"value3"})[2].key3.should.equal("value3");
    });
});

describe('#Array', function() {
    it('Take all even numbers in this array [1,2,3,3,4,5,6,7,8,8,9,6,5,4] result [2,4,6,8,8,6,4]', function() {
        [1,2,3,3,4,5,6,7,8,8,9,6,5,4].even().should.have.length(7);
        [1,2,3,3,4,5,6,7,8,8,9,6,5,4].even()[0].should.equal(2);
        [1,2,3,3,4,5,6,7,8,8,9,6,5,4].even()[1].should.equal(4);
        [1,2,3,3,4,5,6,7,8,8,9,6,5,4].even()[2].should.equal(6);
        [1,2,3,3,4,5,6,7,8,8,9,6,5,4].even()[3].should.equal(8);
        [1,2,3,3,4,5,6,7,8,8,9,6,5,4].even()[4].should.equal(8);
        [1,2,3,3,4,5,6,7,8,8,9,6,5,4].even()[5].should.equal(6);
        [1,2,3,3,4,5,6,7,8,8,9,6,5,4].even()[6].should.equal(4);
    });
    it('Take all odd numbers in this array [1,2,3,3,4,5,6,7,8,8,9,6,5,4] result [1,3,3,5,7,9,5]', function() {
        [1,2,3,3,4,5,6,7,8,8,9,6,5,4].odd().should.have.length(7);
        [1,2,3,3,4,5,6,7,8,8,9,6,5,4].odd()[0].should.equal(1);
        [1,2,3,3,4,5,6,7,8,8,9,6,5,4].odd()[1].should.equal(3);
        [1,2,3,3,4,5,6,7,8,8,9,6,5,4].odd()[2].should.equal(3);
        [1,2,3,3,4,5,6,7,8,8,9,6,5,4].odd()[3].should.equal(5);
        [1,2,3,3,4,5,6,7,8,8,9,6,5,4].odd()[4].should.equal(7);
        [1,2,3,3,4,5,6,7,8,8,9,6,5,4].odd()[5].should.equal(9);
        [1,2,3,3,4,5,6,7,8,8,9,6,5,4].odd()[6].should.equal(5);
    });
    it('Take all even position in this array ["a","A","b","B","c","C","d","D","e","E","f","F"] result ["a","b","c","d","e","f"]', function() {
        ["a","A","b","B","c","C","d","D","e","E","f","F"].evenIndex().should.have.length(6);
        ["a","A","b","B","c","C","d","D","e","E","f","F"].evenIndex()[0].should.equal("a");
        ["a","A","b","B","c","C","d","D","e","E","f","F"].evenIndex()[1].should.equal("b");
        ["a","A","b","B","c","C","d","D","e","E","f","F"].evenIndex()[2].should.equal("c");
        ["a","A","b","B","c","C","d","D","e","E","f","F"].evenIndex()[3].should.equal("d");
        ["a","A","b","B","c","C","d","D","e","E","f","F"].evenIndex()[4].should.equal("e");
        ["a","A","b","B","c","C","d","D","e","E","f","F"].evenIndex()[5].should.equal("f");
    });
    it('Take all odd position in this array ["a","A","b","B","c","C","d","D","e","E","f","F"] result ["A","B","C","D","E","F"]', function() {
        ["a","A","b","B","c","C","d","D","e","E","f","F"].oddIndex().should.have.length(6);
        ["a","A","b","B","c","C","d","D","e","E","f","F"].oddIndex()[0].should.equal("A");
        ["a","A","b","B","c","C","d","D","e","E","f","F"].oddIndex()[1].should.equal("B");
        ["a","A","b","B","c","C","d","D","e","E","f","F"].oddIndex()[2].should.equal("C");
        ["a","A","b","B","c","C","d","D","e","E","f","F"].oddIndex()[3].should.equal("D");
        ["a","A","b","B","c","C","d","D","e","E","f","F"].oddIndex()[4].should.equal("E");
        ["a","A","b","B","c","C","d","D","e","E","f","F"].oddIndex()[5].should.equal("F");
    });

});

