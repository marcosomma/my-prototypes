/**
 * Created by iMak on 17/03/15.
 */
var stringPrototypes = require('./prototypes/string/index.js');
var numberPrototypes = require('./prototypes/number/index.js');
module.exports = {
    init : function(){
        Number.prototype.formatMoney = numberPrototypes.formatMoney;
        Number.prototype.getSecond = numberPrototypes.getSecond;
        Number.prototype.getMilliSecond = numberPrototypes.getMilliSecond;
        String.prototype.htmlEscape = stringPrototypes.htmlEscape;
        String.prototype.htmlUnescape = stringPrototypes.htmlUnescape;
        String.prototype.validateContent = stringPrototypes.validateContent;
        return 'prototypes imported';
    }
};
