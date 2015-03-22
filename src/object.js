/**
 * Created by iMak on 20/03/15.
 */

module.exports = {
    init: function(){
        Object.prototype.length = this.length;
        Object.prototype.splitElements = this.splitElements;
        Object.prototype.concatElements = this.concatElements;
    },
    length: function(){
        //console.log('lengthObject');
        return Object.keys(this).length;
    },
    splitElements: function(){
        //console.log('splitElements');
        var result = [];
        for(var i=0;i<Object.keys(this).length;i++){
            var obj = {};
            obj[Object.keys(this)[i]] = this[Object.keys(this)[i]];
            result.push(obj);
        }
        return result;
    },
    concatElements: function(array){
        //console.log('splitElements');
        var result = {};
        for(var i=0;i<array.length;i++){
            var obj = array[i];
            result[Object.keys(obj)] = obj[Object.keys(obj)];
        }
        return result;
    }
};