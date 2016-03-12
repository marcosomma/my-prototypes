var should = require('chai').should(),
    helper = require('../src/helper');

describe('#Helper', function() {
    it('Test gerMonth', function() {
        helper.getMonth('Jan').should.equal('01');
        helper.getMonth('Feb').should.equal('02');
        helper.getMonth('Mar').should.equal('03');
        helper.getMonth('Apr').should.equal('04');
        helper.getMonth('May').should.equal('05');
        helper.getMonth('June').should.equal('06');
        helper.getMonth('July').should.equal('07');
        helper.getMonth('Aug').should.equal('08');
        helper.getMonth('Sept').should.equal('09');
        helper.getMonth('Oct').should.equal('10');
        helper.getMonth('Nov').should.equal('11');
        helper.getMonth('Dic').should.equal('12');
    });
});
