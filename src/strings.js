/**
 * Created by iMak on 17/03/15.
 */

var validRegEx = require('./validationRegEx.js');
var replaceMe = require('./replaceMe.js');
var helper = require('./helper.js');

module.exports = {
    init: function(){
        String.prototype.htmlEscape = this.htmlEscape;
        String.prototype.htmlUnescape = this.htmlUnescape;
        String.prototype.validateContent = this.validateContent;
        String.prototype.substringBeforeTo = this.substringBeforeTo;
        String.prototype.substringAfterTo = this.substringAfterTo;
        String.prototype.repeat = this.repeat;
        String.prototype.reverseWord = this.reverseWord;
        String.prototype.capitalize = this.capitalize;
        String.prototype.capitalizeAll = this.capitalizeAll;
        String.prototype.getDateEU = this.getDateEU;
        String.prototype.getDateUS = this.getDateUS;
        String.prototype.getDbDate = this.getDbDate;
        String.prototype.getDbDateTime = this.getDbDateTime;
    },
    htmlEscape:function() {
        //console.log('htmlEscape');
        return replaceMe.eHtml(this);
    },
    htmlUnescape:function() {
        //console.log('htmlUnescape');
        return replaceMe.uHtml(this);
    },
    validateContent:function(reg) {
        //console.log('validateContent');
        var string = this;
        var re = new RegExp(validRegEx[reg]);
        return re.test(string);
    },
    substringBeforeTo : function(str){
        //console.log('substringBeforeTo');
        if (this.indexOf(str) === -1){
            return this;
        }
        var response = this.split(str);
        return response[0];
    },
    substringAfterTo : function(str){
        //console.log('substringAfterTo');
        if (this.indexOf(str) === -1){
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
        //console.log('repeat');
        if (count < 1)
        {
            return '';
        }
        var result = '', pattern = this.valueOf();
        for(var i = 0; i<count; i++){
            result += pattern;
        }
        return result;
    },
    capitalize : function(){
        //console.log('capitalize');
        return this.charAt(0).toUpperCase() + this.slice(1);
    },
    capitalizeAll : function(){
        //console.log('capitalizeAll');
        var arraySplit = this.split(' '),
            result = '';
        for(var i=0; i<arraySplit.length; i++){
            if (i!==0){
                result += ' ' + arraySplit[i].charAt(0).toUpperCase() + arraySplit[i].slice(1);
            } else {
                result += arraySplit[i].charAt(0).toUpperCase() + arraySplit[i].slice(1);
            }
        }
        return result;
    },
    getDateEU : function(){
        //console.log('getDateEU');
        var split = String(this).split(' '),
            month = helper.getMonth(split[1]),
            day = split[2].length === 1 ? '0' + split[2] : split[2] ,
            year = String(split[3]);
        return day+'/'+month+'/'+year;
    },
    getDateUS : function(){
        //console.log('getDateUS');
        var split = String(this).split(' '),
            month = helper.getMonth(split[1]),
            day = split[2].length === 1 ? '0' + split[2] : split[2] ,
            year = split[3];
        return month+'/'+day+'/'+year;
    },
    getDbDate : function(){
        //console.log('getDbDate');
        var split = String(this).split('T'),
            splitDate = String(split[0]).split('-'),
            year = splitDate[0],
            month = splitDate[1],
            day = splitDate[2];
        return day+'/'+month+'/'+year;
    },
    getDbDateTime : function(){
        //console.log('getDbDateTime');
        var split = String(this).split('T'),
            splitTime = String(split[1]).split('.'),
            time = splitTime[0];
        return this.getDbDate() + ' - ' + time;
    },
    reverseWord : function(){
        //console.log('getDbDateTime');
        return String(this).split("").reverse().join("");
    }
};
