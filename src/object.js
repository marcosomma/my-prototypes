/**
 * Created by iMak on 20/03/15.
 */

module.exports = {
    init: function(){
        Object.prototype.length = this.length;
        Object.prototype.splitElements = this.splitElements;
        Object.prototype.concatElements = this.concatElements;
        Object.prototype.generator = this.generator;
        Object.prototype.toArray = this.toArray;
        Object.prototype.getValues = this.getValues;
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
    },
    generator: function(array){
        //console.log('splitElements');
        var result = {};
        for(var i=0;i<array.length;i=i+2){
            result[array[i]] = array[i+1];
        }
        return result;
    },
    toArray: function(){
        //console.log('toArray');
        var result = [];
        for(var i=0;i<Object.keys(this).length;i++){
            var obj;
            obj = this[Object.keys(this)[i]];
            result.push(obj);
        }
        return result;
    },
    getValues: function(searching){
        //console.log('getValues');
        var result = [];
        for(var i=0;i<Object.keys(this).length;i++){
            var obj;
            obj = Object.keys(this)[i];
            for(var j=0; j<searching.length; j++){
                if(obj === searching[j]){
                    result.push(this[obj]);
                }
            }
        }
        return result;
    }
};