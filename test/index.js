var should = require('chai').should(),
    prototypes = require('../index'),
    init = prototypes.init;
  
describe('#init', function() {
    it('import prototypes', function () {
        init().should.equal('prototypes imported');
    });
});
