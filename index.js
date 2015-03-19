/**
 * Created by iMak on 17/03/15.
 */
var stringPrototypes = require('./src/strings.js');
var numberPrototypes = require('./src/numbers.js');
var arrayPrototypes = require('./src/array.js');
module.exports = {

    init : function(){
        Array.prototype.even = arrayPrototypes.even;
        Array.prototype.odd = arrayPrototypes.odd;
        Array.prototype.evenIndex = arrayPrototypes.evenIndex;
        Array.prototype.oddIndex = arrayPrototypes.oddIndex;

        Number.prototype.formatMoney = numberPrototypes.formatMoney;
        Number.prototype.getSecond = numberPrototypes.getSecond;
        Number.prototype.getMilliSecond = numberPrototypes.getMilliSecond;

        String.prototype.htmlEscape = stringPrototypes.htmlEscape;
        String.prototype.htmlUnescape = stringPrototypes.htmlUnescape;
        String.prototype.validateContent = stringPrototypes.validateContent;
        String.prototype.substringBeforeTo = stringPrototypes.substringBeforeTo;
        String.prototype.substringAfterTo = stringPrototypes.substringAfterTo;
        String.prototype.repeat = stringPrototypes.repeat;
        String.prototype.capitalize = stringPrototypes.capitalize;
        String.prototype.capitalizeAll = stringPrototypes.capitalizeAll;
        String.prototype.getDateEU = stringPrototypes.getDateEU;
        String.prototype.getDateUS = stringPrototypes.getDateUS;
        String.prototype.getDbDate = stringPrototypes.getDbDate;
        String.prototype.getDbDateTime = stringPrototypes.getDbDateTime;

        return 'prototypes imported';
    }
};
