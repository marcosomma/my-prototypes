/**
 * Created by iMak on 17/03/15.
 */
var stringPrototypes = require('./src/strings.js');
var numberPrototypes = require('./src/numbers.js');
var arrayPrototypes = require('./src/array.js');
var objectPrototypes = require('./src/object.js');
module.exports = {
    init : function(){
        stringPrototypes.init();
        numberPrototypes.init();
        arrayPrototypes.init();
        objectPrototypes.init();
        return 'prototypes imported';
    }
};
