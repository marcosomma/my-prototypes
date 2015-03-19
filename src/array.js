/**
 * Created by iMak on 17/03/15.
 */

module.exports = {
    even: function(){
        //console.log('even');
        return iteration(false,true,this);
    },
    odd: function(){
        //console.log('odd');
        return iteration(false,false,this);
    },
    evenIndex: function(){
        //console.log('evenIndex');
        return iteration(true,true,this);
    },
    oddIndex: function(){
        //console.log('oddIndex');
        return iteration(true,false,this);
    }
};

function iteration(index,odd,array){
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

function is_odd(value){
    if(value % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
