/**
 * Created by iMak on 17/03/15.
 */
var should = require('chai').should(),
    prototypes = require('../index'),
    init = prototypes.init;

describe('#init', function() {
    it('import prototypes', function() {
        init().should.equal('prototypes imported');
    });

    it('String converts " into &quot;', function() {
        String('"').htmlEscape().should.equal('&quot;');
    });

    it("String converts ' into &#39;", function() {
        String("'").htmlEscape().should.equal('&#39;');
    });

    it('String converts < into &lt;', function() {
        String('<').htmlEscape().should.equal('&lt;');
    });

    it('String converts > into &gt;', function() {
        String('>').htmlEscape().should.equal('&gt;');
    });

    it('String converts &amp; into &', function() {
        String('&amp;').htmlUnescape().should.equal('&');
    });

    it('String converts &quot; into "', function() {
        String('&quot;').htmlUnescape().should.equal('"');
    });

    it("String converts &#39; into '", function() {
        String('&#39;').htmlUnescape().should.equal("'");
    });

    it('String converts &lt; into <', function() {
        String('&lt;').htmlUnescape().should.equal('<');
    });

    it('String converts &gt; into >', function() {
        String('&gt;').htmlUnescape().should.equal('>');
    });

    it('Number converts 1000000.12 into 1,000,000.12', function() {
        Number(1000000.12).formatMoney(2).should.equal('1,000,000.12');
    });
});

