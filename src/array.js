/**
 * Created by iMak on 17/03/15.
 */
var letters_array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
module.exports = {
    init: function(){
        Array.prototype.even = this.even;
        Array.prototype.odd = this.odd;
        Array.prototype.evenIndex = this.evenIndex;
        Array.prototype.oddIndex = this.oddIndex;
        Array.prototype.eliminateDuplicate = this.eliminateDuplicate;
        Array.prototype.containElement = this.containElement;
        Array.prototype.generateScale = this.generateScale;
        Array.prototype.first = this.first;
        Array.prototype.last = this.last;
        Array.prototype.remove = this.remove;
    },
    even: function(){
        //console.log('even');
        return iterationOddEven(false,true,this);
    },
    odd: function(){
        //console.log('odd');
        return iterationOddEven(false,false,this);
    },
    evenIndex: function(){
        //console.log('evenIndex');
        return iterationOddEven(true,true,this);
    },
    oddIndex: function(){
        //console.log('oddIndex');
        return iterationOddEven(true,false,this);
    },
    eliminateDuplicate: function(){
        //console.log('eliminateDuplicate');
        var result = [];
        for (var i = 0; i < this.length; i++) {
            if(result.indexOf(this[i]) === -1){
                result.push(this[i]);
            }
        }
        return result;
    },
    remove: function(element){
        //console.log('remove');
        var result = [];
        var type = element instanceof Array;
        for (var i = 0; i < this.length; i++) {
            if(type && element.indexOf(this[i]) === -1){
                result.push(this[i]);
            }else if(!type && this[i] !== element){
                result.push(this[i]);
            }
        }
        return result;
    },
    containElement: function(e){
        //console.log('containElement');
        if(this.indexOf(e) !== -1){
            return true;
        } else {
            return false;
        }
    },
    generateScale: function(type,style,start,end,interval){
        //console.log('generatScale');
        var mytype = type === 'numbers' ? 1 : 2,
            mystyle = style !== null ? style === 'upper' ? 1 : 2 : null,
            myinterval = interval === null ?  1 : interval ;
        if(type !== 'numbers'){
            start = letters_array.indexOf(start.toLowerCase());
            end = letters_array.indexOf(end.toLowerCase());
        }
        if(start >= end){
            return 'ERROR! Impossible create an array from ' +start+ ' to ' +end+'.';
        } else {
            //console.log('generatScale('+mytype+','+mystyle+','+start+','+end+','+myinterval+')');
            return scaleGenerate(mytype,mystyle,start,end,myinterval);
        }
    },
    first: function(){
        //console.log('first');
        return this[0];
    },
    last: function(){
        //console.log('last');
        return this[this.length-1];
    }
};

function iterationOddEven(index,odd,array){
    var result = [],
        value,
        check ;
    for (var i = 0; i < array.length; i++) {
        value = index ? i : array[i];
        check = is_odd(value);
        if((odd && check) || (!odd && !check)) {
            result.push(array[i]);
        }
    }
    return result;
}

function scaleGenerate(type,style,start,end,interval){
    var result = [];
    for (var i = start; i <= end; i = i + interval) {
        var value = type === 1 ? i : style === 1? letters_array[i].toUpperCase() : letters_array[i].toLowerCase();
        result.push(value);
    }
    return result;
}

function is_odd(value){
    if(value % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
