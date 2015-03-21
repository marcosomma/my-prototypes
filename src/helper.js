/**
 * Created by iMak on 21/03/15.
 */
var letters_array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
module.exports={
    iterationOddEven:function(index,odd,array){
        var result = [],
            value,
            check ;
        for (var i = 0; i < array.length; i++) {
            value = index ? i : array[i];
            check = this.is_odd(value);
            if((odd && check) || (!odd && !check)) {
                result.push(array[i]);
            }
        }
        return result;
    },
    scaleGenerate:function(type,style,start,end,interval){
        var result = [];
        for (var i = start; i <= end; i = i + interval) {
            var value = type === 1 ? i : style === 1? letters_array[i].toUpperCase() : letters_array[i].toLowerCase();
            result.push(value);
        }
        return result;
    },
    is_odd:function(value){
        if(value % 2 === 0) {
            return true;
        } else {
            return false;
        }
    },
    getMonth:function(value){
        var month = '';
        switch (value){
            case 'Jan':
                month ='1' ;
                break;
            case 'Feb':
                month ='2' ;
                break;
            case 'Mar':
                month ='3' ;
                break;
            case 'Apr':
                month ='4' ;
                break;
            case 'May':
                month ='5' ;
                break;
            case 'June':
                month ='6' ;
                break;
            case 'July':
                month ='7' ;
                break;
            case 'Aug':
                month ='8' ;
                break;
            case 'Sept':
                month ='9' ;
                break;
            case 'Oct':
                month ='10' ;
                break;
            case 'Nov':
                month ='11' ;
                break;
            case 'Dic':
                month ='12' ;
                break;
        }
        return month;
    }
};