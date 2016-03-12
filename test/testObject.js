var should = require('chai').should(),
    prototypes = require('../index'),
    helper = require('../src/helper'),
    init = prototypes.init;
    
describe('#Object', function() {
    it('Count element in {key1:"value1",key2:"value2",key3:"value3",key4:"value4",key5:"value5"} result 5', function() {
        var a = {key1:"value1",key2:"value2",key3:"value3",key4:"value4",key5:"value5"};
        a.length().should.equal(5);
    });
    it('Get values of specific keys ["key1","key4"] result ["value1","value4"]', function() {
        var a = {key1:"value1",key2:"value2",key3:"value3",key4:"value4",key5:"value5"};
        var b = a.getValues(['key1','key4']);
        b.should.have.length(2);
        b[0].should.equal("value1");
        b[1].should.equal("value4");
    });
    it('Get values of specific keys ["key1","key4"] result ["value1","value4"]', function() {
        var a = {key1:"value1",key2:"value2",key3:"value3",key5:"value5"};
        var b = a.getValues(['key1','key4']);
        b.should.have.length(2);
        b[0].should.equal("value1");
        b[1].should.equal("key4 not found");
    });
    it('Split Object in an array of single elements {key1:"value1",key2:"value2",key3:"value3"} result [{key1:"value1"},{key2:"value2"},{key3:"value3"}]', function() {
        var a = {key1:"value1",key2:"value2",key3:"value3"};
        a.splitElements().should.have.length(3);
        a.splitElements()[0].key1.should.equal("value1");
        a.splitElements()[1].key2.should.equal("value2");
        a.splitElements()[2].key3.should.equal("value3");
    });
    it('Concat Objects in an array [{key1:"value1"},{key2:"value2"},{key3:"value3"}] result {key1:"value1",key2:"value2",key3:"value3"}', function() {
        Object().concatElements([{key1:"value1"},{key2:"value2"},{key3:"value3"}]).key1.should.equal("value1");
        Object().concatElements([{key1:"value1"},{key2:"value2"},{key3:"value3"}]).key2.should.equal("value2");
        Object().concatElements([{key1:"value1"},{key2:"value2"},{key3:"value3"}]).key3.should.equal("value3");
    });
    it('Generate Objects from array ["key1","value1","key2",{"subkey1":"subvalue1","subkey2":"subvalue2"},"key3",["subvalue1","subvalue1"]] result {key1:"value1",key2:{subkey1:"subvalue1",subkey2:"subvalue2"},key3:["subvalue1","subvalue2"]}', function() {
        Object().generator(["key1","value1","key2",{subkey1:"subvalue1",subkey2:"subvalue2"},"key3",["subvalue1","subvalue2"]]).key1.should.equal("value1");
        Object().generator(["key1","value1","key2",{subkey1:"subvalue1",subkey2:"subvalue2"},"key3",["subvalue1","subvalue2"]]).key2.subkey1.should.equal("subvalue1");
        Object().generator(["key1","value1","key2",{subkey1:"subvalue1",subkey2:"subvalue2"},"key3",["subvalue1","subvalue2"]]).key2.subkey2.should.equal("subvalue2");
        Object().generator(["key1","value1","key2",{subkey1:"subvalue1",subkey2:"subvalue2"},"key3",["subvalue1","subvalue2"]]).key3[0].should.equal("subvalue1");
        Object().generator(["key1","value1","key2",{subkey1:"subvalue1",subkey2:"subvalue2"},"key3",["subvalue1","subvalue2"]]).key3[1].should.equal("subvalue2");
    });
    it('Convert to Array the values in an Object result {key1:"value1",key2:{subkey1:"subvalue1",subkey2:"subvalue2"},key3:["subvalue1","subvalue2"]} result ["value1",{"subkey1":"subvalue1","subkey2":"subvalue2"},["subvalue1","subvalue1"]] ', function() {
        var o = {key1:"value1",key2:{subkey1:"subvalue1",subkey2:"subvalue2"},key3:["subvalue1","subvalue2"]};
        o.toArray()[0].should.equal("value1");
        o.toArray()[1].subkey1.should.equal("subvalue1");
        o.toArray()[1].subkey2.should.equal("subvalue2");
        o.toArray()[2][0].should.equal("subvalue1");
        o.toArray()[2][1].should.equal("subvalue2");
    });
});
