var should = require('chai').should(),
    prototypes = require('../index'),
    helper = require('../src/helper'),
    init = prototypes.init,
    dbDate = '2015-03-18T16:23:18.423Z',
    today = new Date(),
    dateEU = (today.getUTCDate()<10 ? '0'+today.getUTCDate() : today.getUTCDate()) + "/"
        + (today.getMonth()+1<10 ? '0'+(today.getMonth()+1) : (today.getMonth()+1)) + "/"
        + today.getFullYear(),
    dateUS = (today.getMonth()+1<10 ? '0'+(today.getMonth()+1) : (today.getMonth()+1)) + "/"
        + (today.getUTCDate()<10 ? '0'+today.getUTCDate() : today.getUTCDate()) + "/"
        + today.getFullYear(),
    wrongDateUS = (today.getMonth()+1) + "9/"
        + today.getDay() + "9/"
        + today.getFullYear(),
    wrongDateEU = today.getDay() + "9/"
        + (today.getMonth()+1)  + "9/"
        + today.getFullYear(),
    time = today.getHours() + ":"
        + today.getMinutes() + ":"
        + today.getSeconds(),
    wrongTime = today.getHours() + "00:"
        + today.getMinutes() + ":00"
        + today.getSeconds();

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

    it('validate "127.0.0.1" as ip', function() {
        '127.0.0.1'.validateContent('ip').should.equal(true);
    });

    it('validate "999.99.256.1" is NOT ip', function() {
        '999.99.256.1'.validateContent('ip').should.equal(false);
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
