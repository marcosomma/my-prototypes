/**
 * Created by iMak on 17/03/15.
 */
var should = require('chai').should(),
    prototypes = require('../index'),
    helper = require('../src/helper'),
    init = prototypes.init;

describe('#Array', function() {

    it('Remove element 3 in this array [1,2,3,3] result [1,2]', function() {
        [1,2,3,3].remove(3).should.have.length(2);
        [1,2,3,3].remove(3)[0].should.equal(1);
        [1,2,3,3].remove(3)[1].should.equal(2);
    });

    it('Remove element "A" in this array ["A","B","C"] result ["B","C"]', function() {
        ["A","B","C"].remove("A").should.have.length(2);
        ["A","B","C"].remove("A")[0].should.equal("B");
        ["A","B","C"].remove("A")[1].should.equal("C");
    });

    it('Remove elements [3,8,5] in this array [1,2,3,3,4,5,6,7,8,8,9,6,5,4] result [1,2,4,6,7,9,6,4]', function() {
        [1,2,3,3,4,5,6,7,8,8,9,6,5,4].remove([3,8,5]).should.have.length(8);
        [1,2,3,3,4,5,6,7,8,8,9,6,5,4].remove([3,8,5])[0].should.equal(1);
        [1,2,3,3,4,5,6,7,8,8,9,6,5,4].remove([3,8,5])[1].should.equal(2);
        [1,2,3,3,4,5,6,7,8,8,9,6,5,4].remove([3,8,5])[2].should.equal(4);
        [1,2,3,3,4,5,6,7,8,8,9,6,5,4].remove([3,8,5])[3].should.equal(6);
        [1,2,3,3,4,5,6,7,8,8,9,6,5,4].remove([3,8,5])[4].should.equal(7);
        [1,2,3,3,4,5,6,7,8,8,9,6,5,4].remove([3,8,5])[5].should.equal(9);
        [1,2,3,3,4,5,6,7,8,8,9,6,5,4].remove([3,8,5])[6].should.equal(6);
        [1,2,3,3,4,5,6,7,8,8,9,6,5,4].remove([3,8,5])[7].should.equal(4);
    });

    it('Remove elements ["A","B","C"] in this array ["A","B","C","D","E","F"] result ["D","E","F"]', function() {
        ["A","B","C","D","E","F"].remove(["A","B","C"]).should.have.length(3);
        ["A","B","C","D","E","F"].remove(["A","B","C"])[0].should.equal("D");
        ["A","B","C","D","E","F"].remove(["A","B","C"])[1].should.equal("E");
        ["A","B","C","D","E","F"].remove(["A","B","C"])[2].should.equal("F");
    });

    it('First in this array [1,2,3,3,4,5,6,7,8,8,9,6,5,4] result 1', function() {
        [1,2,3,3,4,5,6,7,8,8,9,6,5,4].first().should.equal(1);
    });

    it('Last in this array [1,2,3,3,4,5,6,7,8,8,9,6,5,4] result 4', function() {
        [1,2,3,3,4,5,6,7,8,8,9,6,5,4].last().should.equal(4);
    });

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
    it('Eliminate duplicate this array [1,2,3,3,4,5,6,7,8,8,9,6,5,4] result [1,2,3,4,5,6,7,8,9]', function() {
        [1,2,3,3,4,5,6,7,8,8,9,6,5,4].eliminateDuplicate().should.have.length(9);
        [1,2,3,3,4,5,6,7,8,8,9,6,5,4].eliminateDuplicate()[0].should.equal(1);
        [1,2,3,3,4,5,6,7,8,8,9,6,5,4].eliminateDuplicate()[1].should.equal(2);
        [1,2,3,3,4,5,6,7,8,8,9,6,5,4].eliminateDuplicate()[2].should.equal(3);
        [1,2,3,3,4,5,6,7,8,8,9,6,5,4].eliminateDuplicate()[3].should.equal(4);
        [1,2,3,3,4,5,6,7,8,8,9,6,5,4].eliminateDuplicate()[4].should.equal(5);
        [1,2,3,3,4,5,6,7,8,8,9,6,5,4].eliminateDuplicate()[5].should.equal(6);
        [1,2,3,3,4,5,6,7,8,8,9,6,5,4].eliminateDuplicate()[6].should.equal(7);
        [1,2,3,3,4,5,6,7,8,8,9,6,5,4].eliminateDuplicate()[7].should.equal(8);
        [1,2,3,3,4,5,6,7,8,8,9,6,5,4].eliminateDuplicate()[8].should.equal(9);
    });
    it('check if this array [1,2,3,3,4,5,6,7,8,8,9,6,5,4] contain "A" result FALSE', function() {
        [1,2,3,3,4,5,6,7,8,8,9,6,5,4].containElement("A").should.equal(false);
    });
    it('check if this array ["a","A","b","B","c","C","d","D","e","E","f","F"] contain "A" result TRUE', function() {
        ["a","A","b","B","c","C","d","D","e","E","f","F"].containElement("A").should.equal(true);
    });
    it('generate an array of letters from "A" to "C" interval 1 result ["A","B","C"]', function() {
        Array().generateScale("letters",'upper','A','C',null).should.have.length(3);
        Array().generateScale("letters",'upper','A','C',null)[0].should.equal('A');
        Array().generateScale("letters",'upper','A','C',null)[1].should.equal('B');
        Array().generateScale("letters",'upper','A','C',null)[2].should.equal('C');
    });
    it('generate an array of letters from "a" to "f" interval 2 result ["a","c","e"]', function() {
        Array().generateScale("letters",'lower','a','f',2).should.have.length(3);
        Array().generateScale("letters",'lower','a','f',2)[0].should.equal('a');
        Array().generateScale("letters",'lower','a','f',2)[1].should.equal('c');
        Array().generateScale("letters",'lower','a','f',2)[2].should.equal('e');
    });
    it('generate an array of numbers from 0 to 9 interval 3 result [0,3,6,9]', function() {
        Array().generateScale("numbers",null,0,9,3).should.have.length(4);
        Array().generateScale("numbers",null,0,9,3)[0].should.equal(0);
        Array().generateScale("numbers",null,0,9,3)[1].should.equal(3);
        Array().generateScale("numbers",null,0,9,3)[2].should.equal(6);
        Array().generateScale("numbers",null,0,9,3)[3].should.equal(9);
    });
    it('generate an array of numbers from -9 to 0 interval 1 result [-9,-8,-7,-6,-5,-4,-3,-2,-1,0]', function() {
        Array().generateScale("numbers",null,-9,0,1).should.have.length(10);
        Array().generateScale("numbers",null,-9,0,1)[0].should.equal(-9);
        Array().generateScale("numbers",null,-9,0,1)[1].should.equal(-8);
        Array().generateScale("numbers",null,-9,0,1)[2].should.equal(-7);
        Array().generateScale("numbers",null,-9,0,1)[3].should.equal(-6);
        Array().generateScale("numbers",null,-9,0,1)[4].should.equal(-5);
        Array().generateScale("numbers",null,-9,0,1)[5].should.equal(-4);
        Array().generateScale("numbers",null,-9,0,1)[6].should.equal(-3);
        Array().generateScale("numbers",null,-9,0,1)[7].should.equal(-2);
        Array().generateScale("numbers",null,-9,0,1)[8].should.equal(-1);
        Array().generateScale("numbers",null,-9,0,1)[9].should.equal(0);
    });
    it('generate an array of numbers from 9 to 3 interval 3 result "ERROR! Impossible create an array from 9 to 3."', function() {
        Array().generateScale("numbers",null,9,3,null).should.equal('ERROR! Impossible create an array from 9 to 3.');
    });

});
