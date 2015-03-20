/**
 * Created by iMak on 20/03/15.
 */

module.exports = {
    lengthJSON: function(json){
        //console.log('lengthJSON');
        return Object.keys(json).length;
    },
    splitJSON: function(json){
        //console.log('lengthJSON');
        var result = [];
        for(var i=0;i<Object.keys(json).length;i++){
            var obj = {};
            obj[Object.keys(json)[i]] = json[Object.keys(json)[i]];
            result.push(obj);
        }
        return result;
    }
};