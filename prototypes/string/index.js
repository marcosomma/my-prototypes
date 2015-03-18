/**
 * Created by iMak on 17/03/15.
 */
var validRegEx = require('./validationRegEx.js');

module.exports = {
    htmlEscape:function() {
        //console.log('htmlEscape');
        var html = this;
        return String(html)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    },
    htmlUnescape:function() {
        //console.log('htmlUnescape');
        var html = this;
        return String(html)
            .replace(/&amp;/g, '&')
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'")
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>');
    },
    validateContent:function(reg) {
        //console.log('validateContent');
        var string = this;
        var re = new RegExp(validRegEx[reg]);
        return re.test(string);
    },
    substringBeforeTo : function(str){
        if (this.indexOf(str) == -1){
            return this;
        }
        var response = this.split(str);
        return response[0];
    },
    substringAfterTo : function(str){
        if (this.indexOf(str) == -1){
            return this;
        }
        var response = this.split(str);
        if(response.length >2){
            response.shift();
            return response;
        } else {
            return response[1];
        }
    },
    repeat : function(count){
        if (count < 1)
        {
            return '';
        }
        var result = '', pattern = this.valueOf();
        while (count > 0)
        {
            if (count & 1)
            {
                result += pattern;
            }
            count >>= 1;
            pattern += pattern;
        }
        return result;
    },
    capitalize : function()
    {
        return this.charAt(0).toUpperCase() + this.slice(1);
    },
    capitalizeAll : function(){
        var arraySplit = this.split(' '),
            result = '';
        for(var i=0; i<arraySplit.length; i++){
            if (i!=0){
                result += ' ' + arraySplit[i].charAt(0).toUpperCase() + arraySplit[i].slice(1);
            } else {
                result += arraySplit[i].charAt(0).toUpperCase() + arraySplit[i].slice(1);
            }
        }
        return result;
    },
    getDateEU : function(date){
        var split = String(date).split(' '),
            month = getMonth(split[1]),
            day = split[2],
            year = String(split[3]);
        return day+'/'+month+'/'+year;
    },
    getDateUS : function(date){
        var split = String(date).split(' ');
        var month = getMonth(split[1]);
        var day = split[2];
        var year = split[3];
        return month+'/'+day+'/'+year;
    }
};

function getMonth(value){
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
