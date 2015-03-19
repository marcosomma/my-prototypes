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
    it('converts & into &amp;', function() {
        String('&').htmlEscape().should.equal('&#38;');
    });

    it('converts " into &quot;', function() {
        String('"').htmlEscape().should.equal('&#34;');
    });

    it("converts ' into &#39;", function() {
        String("'").htmlEscape().should.equal('&#39;');
    });

    it('converts < into &lt;', function() {
        String('<').htmlEscape().should.equal('&#60;');
    });

    it('converts > into &gt;', function() {
        String('>').htmlEscape().should.equal('&#62;');
    });

    it('converts &#38; into &', function() {
        String('&#38;').htmlUnescape().should.equal('&');
    });

    it('converts &#34; into "', function() {
        String('&#34;').htmlUnescape().should.equal('"');
    });

    it("converts &#39; into '", function() {
        String('&#39;').htmlUnescape().should.equal("'");
    });

    it('converts &#60; into <', function() {
        String('&#60;').htmlUnescape().should.equal('<');
    });

    it('converts &#62; into >', function() {
        String('&#62;').htmlUnescape().should.equal('>');
    });

    it('validate mak.so1979@gmail.com as email', function() {
        String('mak.so1979@gmail.com').validateContent('email').should.equal(true);
    });

    it('validate mak.so1979@gmailcom is NOT email', function() {
        String('mak.so1979@gmailcom').validateContent('email').should.equal(false);
    });

    it('validate 12aa12 as alphanumeric', function() {
        String('12aa12').validateContent('alphanumeric').should.equal(true);
    });

    it('validate 12aasa2"12 is NOT alphanumeric', function() {
        String('12aasa2"12').validateContent('alphanumeric').should.equal(false);
    });

    it('validate '+dateEU+' as dateEU', function() {
        String(dateEU).validateContent('dateEU').should.equal(true);
    });

    it('validate '+wrongDateEU+' is NOT dateEU', function() {
        String(wrongDateEU).validateContent('dateEU').should.equal(false);
    });

    it('validate '+dateUS+' as dateUS', function() {
        String(dateUS).validateContent('dateUS').should.equal(true);
    });

    it('validate '+wrongDateUS+' is NOT dateUS', function() {
        String(wrongDateUS).validateContent('dateUS').should.equal(false);
    });

    it('validate '+time+' as time', function() {
        String(time).validateContent('time').should.equal(true);
    });

    it('validate '+wrongTime+' is NOT time', function() {
        String(wrongTime).validateContent('time').should.equal(false);
    });

    it('validate 127.0.0.1 as ip-address', function() {
        String('127.0.0.1').validateContent('ip-address').should.equal(true);
    });

    it('validate 999.99.256.1 is NOT ip-address', function() {
        String('999.99.256.1').validateContent('ip-address').should.equal(false);
    });

    it('validate +353 0866656 as phone', function() {
        String('+353 0866656').validateContent('phone').should.equal(true);
    });

    it('validate +a353 0866656zz is NOT phone', function() {
        String('+a353 0866656zz').validateContent('phone').should.equal(false);
    });

    it('split "." in "test0.test1" and give the first value', function() {
        String('test0.test1').substringBeforeTo('.').should.equal('test0');
    });

    it('split "$" in "test0.test1" and give the first value', function() {
        String('test0.test1').substringBeforeTo('$').should.equal('test0.test1');
    });

    it('split "." in "test0.test1" and give the second value', function() {
        String('test0.test1').substringAfterTo('.').should.equal('test1');
    });

    it('split "$" in "test0.test1" and give the second value', function() {
        String('test0.test1').substringAfterTo('$').should.equal('test0.test1');
    });

    it('split "." in "test0.test1.test2.test3" and give the all values after the first', function() {
        String('test0.test1.test2.test3').substringAfterTo('.').should.have.length(3);
        String('test0.test1.test2.test3').substringAfterTo('.')[0].should.equal('test1');
        String('test0.test1.test2.test3').substringAfterTo('.')[1].should.equal('test2');
        String('test0.test1.test2.test3').substringAfterTo('.')[2].should.equal('test3');
    });

    it('repeat "test0" for 3 times', function() {
        String('test0').repeat(3).should.equal('test0test0test0');
    });

    it('repeat "test0" for 0 times', function() {
        String('test0').repeat(0).should.equal('');
    });

    it('capitalize "test" return "Test"', function() {
        String('test').capitalize().should.equal('Test');
    });

    it('capitalizeAll "test test Test test" return "Test Test Test Test"', function() {
        String('test test Test test').capitalizeAll().should.equal('Test Test Test Test');
    });

    it('convert "'+today+'" in "'+dateEU+'"', function() {
        String(new Date).getDateEU().should.equal(dateEU);
    });

    it('convert "'+today+'" in "'+dateUS+'"', function() {
        String(new Date).getDateUS().should.equal(dateUS);
    });

    it('convert DB format date "'+dbDate+'" in "18/03/2015"', function() {
        String(dbDate).getDbDate().should.equal("18/03/2015");
    });

    it('convert DB format date "'+dbDate+'" in "18/03/2015 - 16:23:18"', function() {
        String(dbDate).getDbDateTime().should.equal("18/03/2015 - 16:23:18");
    });
});

describe('#Number', function() {
    it('converts 1000000.12 into 1,000,000.12', function() {
        Number(1000000.12).formatMoney(2).should.equal('1,000,000.12');
    });

    it('get seconds in 1 hours 1 minut and 1 second = 3661', function() {
        Number().getSecond(1,1,1).should.equal(3661);
    });

    it('get milliseconds in 1 hours 1 minut and 1 second = 3661000', function() {
        Number().getMilliSecond(1,1,1).should.equal(3661000);
    });
});
