/**
 * Created by iMak on 17/03/15.
 */

var helper = require('./helper.js');

module.exports = {
    init: function(){
        Number.prototype.formatMoney = this.formatMoney;
        Number.prototype.getSecond = this.getSecond;
        Number.prototype.getMilliSecond = this.getMilliSecond;
        Number.prototype.isEven = this.isEven;
    },
    isEven: function(){
        //console.log('isEven');
        return helper.is_odd(this);
    },
    formatMoney: function(c){
        //console.log('formatMoney');
        c = isNaN(c = Math.abs(c)) ? 2 : c;
        var n = this,
            d =".",
            t = ",",
            s = n < 0 ? "-" : "",
            i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
            j = (j = i.length) > 3 ? j % 3 : 0;
        return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
    },
    getSecond: function(h, m, s){
        //console.log('getSecond');
        var hours = h * 60 * 60,
            minutes = m * 60,
            seconds = s,
            total = hours + minutes + seconds;

        return total;
    },
    getMilliSecond: function(h, m, s){
        //console.log('getMilliSecond');
        var seconds = this.getSecond(h, m, s);
        var total = seconds * 1000;

        return total;
    }
};
