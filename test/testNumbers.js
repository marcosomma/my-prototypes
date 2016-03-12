var should = require('chai').should(),
    prototypes = require('../index'),
    helper = require('../src/helper'),
    init = prototypes.init;

describe('#Number', function() {
    it('check if 1000000 is even result true', function() {
        var n = 1000000;
        n.isEven().should.equal(true);
    });

    it('check if 1000001 is even result false', function() {
        var n = 1000001;
        n.isEven().should.equal(false);
    });

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
