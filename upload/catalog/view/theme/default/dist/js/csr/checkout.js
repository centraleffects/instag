(function(){var t,e,n,r,a,o,i,l,u,s,c,h,p,g,v,f,d,m,y,C,T,w,$,D,S=[].slice,k=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};t=window.jQuery||window.Zepto||window.$,t.payment={},t.payment.fn={},t.fn.payment=function(){var e,n;return n=arguments[0],e=2<=arguments.length?S.call(arguments,1):[],t.payment.fn[n].apply(this,e)},a=/(\d{1,4})/g,t.payment.cards=r=[{type:"elo",patterns:[401178,401179,431274,438935,451416,457393,457631,457632,504175,506699,5067,509,627780,636297,636368,650,6516,6550],format:a,length:[16],cvcLength:[3],luhn:!0},{type:"maestro",patterns:[5018,502,503,506,56,58,639,6220,67],format:a,length:[12,13,14,15,16,17,18,19],cvcLength:[3],luhn:!0},{type:"forbrugsforeningen",patterns:[600],format:a,length:[16],cvcLength:[3],luhn:!0},{type:"dankort",patterns:[5019],format:a,length:[16],cvcLength:[3],luhn:!0},{type:"visa",patterns:[4],format:a,length:[13,16],cvcLength:[3],luhn:!0},{type:"mastercard",patterns:[51,52,53,54,55,22,23,24,25,26,27],format:a,length:[16],cvcLength:[3],luhn:!0},{type:"amex",patterns:[34,37],format:/(\d{1,4})(\d{1,6})?(\d{1,5})?/,length:[15],cvcLength:[3,4],luhn:!0},{type:"dinersclub",patterns:[30,36,38,39],format:/(\d{1,4})(\d{1,6})?(\d{1,4})?/,length:[14],cvcLength:[3],luhn:!0},{type:"discover",patterns:[60,64,65,622],format:a,length:[16],cvcLength:[3],luhn:!0},{type:"unionpay",patterns:[62,88],format:a,length:[16,17,18,19],cvcLength:[3],luhn:!1},{type:"jcb",patterns:[35],format:a,length:[16],cvcLength:[3],luhn:!0}],e=function(t){var e,n,a,o,i,l,u,s;for(t=(t+"").replace(/\D/g,""),o=0,l=r.length;l>o;o++)for(e=r[o],s=e.patterns,i=0,u=s.length;u>i;i++)if(a=s[i],n=a+"",t.substr(0,n.length)===n)return e},n=function(t){var e,n,a;for(n=0,a=r.length;a>n;n++)if(e=r[n],e.type===t)return e},p=function(t){var e,n,r,a,o,i;for(r=!0,a=0,n=(t+"").split("").reverse(),o=0,i=n.length;i>o;o++)e=n[o],e=parseInt(e,10),(r=!r)&&(e*=2),e>9&&(e-=9),a+=e;return a%10===0},h=function(t){var e;return null!=t.prop("selectionStart")&&t.prop("selectionStart")!==t.prop("selectionEnd")?!0:null!=("undefined"!=typeof document&&null!==document&&null!=(e=document.selection)?e.createRange:void 0)&&document.selection.createRange().text?!0:!1},$=function(t,e){var n,r,a,o,i,l;try{r=e.prop("selectionStart")}catch(u){o=u,r=null}return i=e.val(),e.val(t),null!==r&&e.is(":focus")?(r===i.length&&(r=t.length),i!==t&&(l=i.slice(r-1,+r+1||9e9),n=t.slice(r-1,+r+1||9e9),a=t[r],/\d/.test(a)&&l===""+a+" "&&n===" "+a&&(r+=1)),e.prop("selectionStart",r),e.prop("selectionEnd",r)):void 0},m=function(t){var e,n,r,a,o,i,l,u;for(null==t&&(t=""),r="０１２３４５６７８９",a="0123456789",i="",e=t.split(""),l=0,u=e.length;u>l;l++)n=e[l],o=r.indexOf(n),o>-1&&(n=a[o]),i+=n;return i},d=function(e){var n;return n=t(e.currentTarget),setTimeout(function(){var t;return t=n.val(),t=m(t),t=t.replace(/\D/g,""),$(t,n)})},v=function(e){var n;return n=t(e.currentTarget),setTimeout(function(){var e;return e=n.val(),e=m(e),e=t.payment.formatCardNumber(e),$(e,n)})},l=function(n){var r,a,o,i,l,u,s;return o=String.fromCharCode(n.which),!/^\d+$/.test(o)||(r=t(n.currentTarget),s=r.val(),a=e(s+o),i=(s.replace(/\D/g,"")+o).length,u=16,a&&(u=a.length[a.length.length-1]),i>=u||null!=r.prop("selectionStart")&&r.prop("selectionStart")!==s.length)?void 0:(l=a&&"amex"===a.type?/^(\d{4}|\d{4}\s\d{6})$/:/(?:^|\s)(\d{4})$/,l.test(s)?(n.preventDefault(),setTimeout(function(){return r.val(s+" "+o)})):l.test(s+o)?(n.preventDefault(),setTimeout(function(){return r.val(s+o+" ")})):void 0)},o=function(e){var n,r;return n=t(e.currentTarget),r=n.val(),8!==e.which||null!=n.prop("selectionStart")&&n.prop("selectionStart")!==r.length?void 0:/\d\s$/.test(r)?(e.preventDefault(),setTimeout(function(){return n.val(r.replace(/\d\s$/,""))})):/\s\d?$/.test(r)?(e.preventDefault(),setTimeout(function(){return n.val(r.replace(/\d$/,""))})):void 0},f=function(e){var n;return n=t(e.currentTarget),setTimeout(function(){var e;return e=n.val(),e=m(e),e=t.payment.formatExpiry(e),$(e,n)})},u=function(e){var n,r,a;return r=String.fromCharCode(e.which),/^\d+$/.test(r)?(n=t(e.currentTarget),a=n.val()+r,/^\d$/.test(a)&&"0"!==a&&"1"!==a?(e.preventDefault(),setTimeout(function(){return n.val("0"+a+" / ")})):/^\d\d$/.test(a)?(e.preventDefault(),setTimeout(function(){var t,e;return t=parseInt(a[0],10),e=parseInt(a[1],10),e>2&&0!==t?n.val("0"+t+" / "+e):n.val(""+a+" / ")})):void 0):void 0},s=function(e){var n,r,a;return r=String.fromCharCode(e.which),/^\d+$/.test(r)?(n=t(e.currentTarget),a=n.val(),/^\d\d$/.test(a)?n.val(""+a+" / "):void 0):void 0},c=function(e){var n,r,a;return a=String.fromCharCode(e.which),"/"===a||" "===a?(n=t(e.currentTarget),r=n.val(),/^\d$/.test(r)&&"0"!==r?n.val("0"+r+" / "):void 0):void 0},i=function(e){var n,r;return n=t(e.currentTarget),r=n.val(),8!==e.which||null!=n.prop("selectionStart")&&n.prop("selectionStart")!==r.length?void 0:/\d\s\/\s$/.test(r)?(e.preventDefault(),setTimeout(function(){return n.val(r.replace(/\d\s\/\s$/,""))})):void 0},g=function(e){var n;return n=t(e.currentTarget),setTimeout(function(){var t;return t=n.val(),t=m(t),t=t.replace(/\D/g,"").slice(0,4),$(t,n)})},w=function(t){var e;return t.metaKey||t.ctrlKey?!0:32===t.which?!1:0===t.which?!0:t.which<33?!0:(e=String.fromCharCode(t.which),!!/[\d\s]/.test(e))},C=function(n){var r,a,o,i;return r=t(n.currentTarget),o=String.fromCharCode(n.which),/^\d+$/.test(o)&&!h(r)?(i=(r.val()+o).replace(/\D/g,""),a=e(i),a?i.length<=a.length[a.length.length-1]:i.length<=16):void 0},T=function(e){var n,r,a;return n=t(e.currentTarget),r=String.fromCharCode(e.which),/^\d+$/.test(r)&&!h(n)?(a=n.val()+r,a=a.replace(/\D/g,""),a.length>6?!1:void 0):void 0},y=function(e){var n,r,a;return n=t(e.currentTarget),r=String.fromCharCode(e.which),/^\d+$/.test(r)&&!h(n)?(a=n.val()+r,a.length<=4):void 0},D=function(e){var n,a,o,i,l;return n=t(e.currentTarget),l=n.val(),i=t.payment.cardType(l)||"unknown",n.hasClass(i)?void 0:(a=function(){var t,e,n;for(n=[],t=0,e=r.length;e>t;t++)o=r[t],n.push(o.type);return n}(),n.removeClass("unknown"),n.removeClass(a.join(" ")),n.addClass(i),n.toggleClass("identified","unknown"!==i),n.trigger("payment.cardType",i))},t.payment.fn.formatCardCVC=function(){return this.on("keypress",w),this.on("keypress",y),this.on("paste",g),this.on("change",g),this.on("input",g),this},t.payment.fn.formatCardExpiry=function(){return this.on("keypress",w),this.on("keypress",T),this.on("keypress",u),this.on("keypress",c),this.on("keypress",s),this.on("keydown",i),this.on("change",f),this.on("input",f),this},t.payment.fn.formatCardNumber=function(){return this.on("keypress",w),this.on("keypress",C),this.on("keypress",l),this.on("keydown",o),this.on("keyup",D),this.on("paste",v),this.on("change",v),this.on("input",v),this.on("input",D),this},t.payment.fn.restrictNumeric=function(){return this.on("keypress",w),this.on("paste",d),this.on("change",d),this.on("input",d),this},t.payment.fn.cardExpiryVal=function(){return t.payment.cardExpiryVal(t(this).val())},t.payment.cardExpiryVal=function(t){var e,n,r,a;return a=t.split(/[\s\/]+/,2),e=a[0],r=a[1],2===(null!=r?r.length:void 0)&&/^\d+$/.test(r)&&(n=(new Date).getFullYear(),n=n.toString().slice(0,2),r=n+r),e=parseInt(e,10),r=parseInt(r,10),{month:e,year:r}},t.payment.validateCardNumber=function(t){var n,r;return t=(t+"").replace(/\s+|-/g,""),/^\d+$/.test(t)?(n=e(t),n?(r=t.length,k.call(n.length,r)>=0&&(n.luhn===!1||p(t))):!1):!1},t.payment.validateCardExpiry=function(e,n){var r,a,o;return"object"==typeof e&&"month"in e&&(o=e,e=o.month,n=o.year),e&&n?(e=t.trim(e),n=t.trim(n),/^\d+$/.test(e)&&/^\d+$/.test(n)&&e>=1&&12>=e?(2===n.length&&(n=70>n?"20"+n:"19"+n),4!==n.length?!1:(a=new Date(n,e),r=new Date,a.setMonth(a.getMonth()-1),a.setMonth(a.getMonth()+1,1),a>r)):!1):!1},t.payment.validateCardCVC=function(e,r){var a,o;return e=t.trim(e),/^\d+$/.test(e)?(a=n(r),null!=a?(o=e.length,k.call(a.cvcLength,o)>=0):e.length>=3&&e.length<=4):!1},t.payment.cardType=function(t){var n;return t?(null!=(n=e(t))?n.type:void 0)||null:null},t.payment.formatCardNumber=function(n){var r,a,o,i;return n=n.replace(/\D/g,""),(r=e(n))?(o=r.length[r.length.length-1],n=n.slice(0,o),r.format.global?null!=(i=n.match(r.format))?i.join(" "):void 0:(a=r.format.exec(n),null!=a?(a.shift(),a=t.grep(a,function(t){return t}),a.join(" ")):void 0)):n},t.payment.formatExpiry=function(t){var e,n,r,a;return(n=t.match(/^\D*(\d{1,2})(\D+)?(\d{1,4})?/))?(e=n[1]||"",r=n[2]||"",a=n[3]||"",a.length>0?r=" / ":" /"===r?(e=e.substring(0,1),r=""):2===e.length||r.length>0?r=" / ":1===e.length&&"0"!==e&&"1"!==e&&(e="0"+e,r=" / "),e+r+a):""}}).call(this);
/**
 * jquery.mask.js
 * @version: v1.14.0
 * @author: Igor Escobar
 *
 * Created by Igor Escobar on 2012-03-10. Please report any bug at http://blog.igorescobar.com
 *
 * Copyright (c) 2012 Igor Escobar http://blog.igorescobar.com
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/* jshint laxbreak: true */
/* global define */

'use strict';

// UMD (Universal Module Definition) patterns for JavaScript modules that work everywhere.
// https://github.com/umdjs/umd/blob/master/jqueryPluginCommonjs.js
(function (factory, jQuery, Zepto) {

    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery || Zepto);
    }

}(function ($) {

    var Mask = function (el, mask, options) {

        var p = {
            invalid: [],
            getCaret: function () {
                try {
                    var sel,
                        pos = 0,
                        ctrl = el.get(0),
                        dSel = document.selection,
                        cSelStart = ctrl.selectionStart;

                    // IE Support
                    if (dSel && navigator.appVersion.indexOf('MSIE 10') === -1) {
                        sel = dSel.createRange();
                        sel.moveStart('character', -p.val().length);
                        pos = sel.text.length;
                    }
                    // Firefox support
                    else if (cSelStart || cSelStart === '0') {
                        pos = cSelStart;
                    }

                    return pos;
                } catch (e) {}
            },
            setCaret: function(pos) {
                try {
                    if (el.is(':focus')) {
                        var range, ctrl = el.get(0);

                        // Firefox, WebKit, etc..
                        if (ctrl.setSelectionRange) {
                            ctrl.focus();
                            ctrl.setSelectionRange(pos, pos);
                        } else { // IE
                            range = ctrl.createTextRange();
                            range.collapse(true);
                            range.moveEnd('character', pos);
                            range.moveStart('character', pos);
                            range.select();
                        }
                    }
                } catch (e) {}
            },
            events: function() {
                el
                .on('keydown.mask', function(e) {
                    el.data('mask-keycode', e.keyCode || e.which);
                })
                .on($.jMaskGlobals.useInput ? 'input.mask' : 'keyup.mask', p.behaviour)
                .on('paste.mask drop.mask', function() {
                    setTimeout(function() {
                        el.keydown().keyup();
                    }, 100);
                })
                .on('change.mask', function(){
                    el.data('changed', true);
                })
                .on('blur.mask', function(){
                    if (oldValue !== p.val() && !el.data('changed')) {
                        el.trigger('change');
                    }
                    el.data('changed', false);
                })
                // it's very important that this callback remains in this position
                // otherwhise oldValue it's going to work buggy
                .on('blur.mask', function() {
                    oldValue = p.val();
                })
                // select all text on focus
                .on('focus.mask', function (e) {
                    if (options.selectOnFocus === true) {
                        $(e.target).select();
                    }
                })
                // clear the value if it not complete the mask
                .on('focusout.mask', function() {
                    if (options.clearIfNotMatch && !regexMask.test(p.val())) {
                       p.val('');
                   }
                });
            },
            getRegexMask: function() {
                var maskChunks = [], translation, pattern, optional, recursive, oRecursive, r;

                for (var i = 0; i < mask.length; i++) {
                    translation = jMask.translation[mask.charAt(i)];

                    if (translation) {

                        pattern = translation.pattern.toString().replace(/.{1}$|^.{1}/g, '');
                        optional = translation.optional;
                        recursive = translation.recursive;

                        if (recursive) {
                            maskChunks.push(mask.charAt(i));
                            oRecursive = {digit: mask.charAt(i), pattern: pattern};
                        } else {
                            maskChunks.push(!optional && !recursive ? pattern : (pattern + '?'));
                        }

                    } else {
                        maskChunks.push(mask.charAt(i).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
                    }
                }

                r = maskChunks.join('');

                if (oRecursive) {
                    r = r.replace(new RegExp('(' + oRecursive.digit + '(.*' + oRecursive.digit + ')?)'), '($1)?')
                         .replace(new RegExp(oRecursive.digit, 'g'), oRecursive.pattern);
                }

                return new RegExp(r);
            },
            destroyEvents: function() {
                el.off(['input', 'keydown', 'keyup', 'paste', 'drop', 'blur', 'focusout', ''].join('.mask '));
            },
            val: function(v) {
                var isInput = el.is('input'),
                    method = isInput ? 'val' : 'text',
                    r;

                if (arguments.length > 0) {
                    if (el[method]() !== v) {
                        el[method](v);
                    }
                    r = el;
                } else {
                    r = el[method]();
                }

                return r;
            },
            getMCharsBeforeCount: function(index, onCleanVal) {
                for (var count = 0, i = 0, maskL = mask.length; i < maskL && i < index; i++) {
                    if (!jMask.translation[mask.charAt(i)]) {
                        index = onCleanVal ? index + 1 : index;
                        count++;
                    }
                }
                return count;
            },
            caretPos: function (originalCaretPos, oldLength, newLength, maskDif) {
                var translation = jMask.translation[mask.charAt(Math.min(originalCaretPos - 1, mask.length - 1))];

                return !translation ? p.caretPos(originalCaretPos + 1, oldLength, newLength, maskDif)
                                    : Math.min(originalCaretPos + newLength - oldLength - maskDif, newLength);
            },
            behaviour: function(e) {
                e = e || window.event;
                p.invalid = [];

                var keyCode = el.data('mask-keycode');

                if ($.inArray(keyCode, jMask.byPassKeys) === -1) {
                    var caretPos    = p.getCaret(),
                        currVal     = p.val(),
                        currValL    = currVal.length,
                        newVal      = p.getMasked(),
                        newValL     = newVal.length,
                        maskDif     = p.getMCharsBeforeCount(newValL - 1) - p.getMCharsBeforeCount(currValL - 1),
                        changeCaret = caretPos < currValL;

                    p.val(newVal);

                    if (changeCaret) {
                        // Avoid adjusting caret on backspace or delete
                        if (!(keyCode === 8 || keyCode === 46)) {
                            caretPos = p.caretPos(caretPos, currValL, newValL, maskDif);
                        }
                        p.setCaret(caretPos);
                    }

                    return p.callbacks(e);
                }
            },
            getMasked: function(skipMaskChars, val) {
                var buf = [],
                    value = val === undefined ? p.val() : val + '',
                    m = 0, maskLen = mask.length,
                    v = 0, valLen = value.length,
                    offset = 1, addMethod = 'push',
                    resetPos = -1,
                    lastMaskChar,
                    check;

                if (options.reverse) {
                    addMethod = 'unshift';
                    offset = -1;
                    lastMaskChar = 0;
                    m = maskLen - 1;
                    v = valLen - 1;
                    check = function () {
                        return m > -1 && v > -1;
                    };
                } else {
                    lastMaskChar = maskLen - 1;
                    check = function () {
                        return m < maskLen && v < valLen;
                    };
                }

                while (check()) {
                    var maskDigit = mask.charAt(m),
                        valDigit = value.charAt(v),
                        translation = jMask.translation[maskDigit];

                    if (translation) {
                        if (valDigit.match(translation.pattern)) {
                            buf[addMethod](valDigit);
                             if (translation.recursive) {
                                if (resetPos === -1) {
                                    resetPos = m;
                                } else if (m === lastMaskChar) {
                                    m = resetPos - offset;
                                }

                                if (lastMaskChar === resetPos) {
                                    m -= offset;
                                }
                            }
                            m += offset;
                        } else if (translation.optional) {
                            m += offset;
                            v -= offset;
                        } else if (translation.fallback) {
                            buf[addMethod](translation.fallback);
                            m += offset;
                            v -= offset;
                        } else {
                          p.invalid.push({p: v, v: valDigit, e: translation.pattern});
                        }
                        v += offset;
                    } else {
                        if (!skipMaskChars) {
                            buf[addMethod](maskDigit);
                        }

                        if (valDigit === maskDigit) {
                            v += offset;
                        }

                        m += offset;
                    }
                }

                var lastMaskCharDigit = mask.charAt(lastMaskChar);
                if (maskLen === valLen + 1 && !jMask.translation[lastMaskCharDigit]) {
                    buf.push(lastMaskCharDigit);
                }

                return buf.join('');
            },
            callbacks: function (e) {
                var val = p.val(),
                    changed = val !== oldValue,
                    defaultArgs = [val, e, el, options],
                    callback = function(name, criteria, args) {
                        if (typeof options[name] === 'function' && criteria) {
                            options[name].apply(this, args);
                        }
                    };

                callback('onChange', changed === true, defaultArgs);
                callback('onKeyPress', changed === true, defaultArgs);
                callback('onComplete', val.length === mask.length, defaultArgs);
                callback('onInvalid', p.invalid.length > 0, [val, e, el, p.invalid, options]);
            }
        };

        el = $(el);
        var jMask = this, oldValue = p.val(), regexMask;

        mask = typeof mask === 'function' ? mask(p.val(), undefined, el,  options) : mask;


        // public methods
        jMask.mask = mask;
        jMask.options = options;
        jMask.remove = function() {
            var caret = p.getCaret();
            p.destroyEvents();
            p.val(jMask.getCleanVal());
            p.setCaret(caret - p.getMCharsBeforeCount(caret));
            return el;
        };

        // get value without mask
        jMask.getCleanVal = function() {
           return p.getMasked(true);
        };

        // get masked value without the value being in the input or element
        jMask.getMaskedVal = function(val) {
           return p.getMasked(false, val);
        };

       jMask.init = function(onlyMask) {
            onlyMask = onlyMask || false;
            options = options || {};

            jMask.clearIfNotMatch  = $.jMaskGlobals.clearIfNotMatch;
            jMask.byPassKeys       = $.jMaskGlobals.byPassKeys;
            jMask.translation      = $.extend({}, $.jMaskGlobals.translation, options.translation);

            jMask = $.extend(true, {}, jMask, options);

            regexMask = p.getRegexMask();

            if (onlyMask === false) {

                if (options.placeholder) {
                    el.attr('placeholder' , options.placeholder);
                }

                // this is necessary, otherwise if the user submit the form
                // and then press the "back" button, the autocomplete will erase
                // the data. Works fine on IE9+, FF, Opera, Safari.
                if (el.data('mask')) {
                  el.attr('autocomplete', 'off');
                }

                p.destroyEvents();
                p.events();

                var caret = p.getCaret();
                p.val(p.getMasked());
                p.setCaret(caret + p.getMCharsBeforeCount(caret, true));

            } else {
                p.events();
                p.val(p.getMasked());
            }
        };

        jMask.init(!el.is('input'));
    };

    $.maskWatchers = {};
    var HTMLAttributes = function () {
        var input = $(this),
            options = {},
            prefix = 'data-mask-',
            mask = input.attr('data-mask');

        if (input.attr(prefix + 'reverse')) {
            options.reverse = true;
        }

        if (input.attr(prefix + 'clearifnotmatch')) {
            options.clearIfNotMatch = true;
        }

        if (input.attr(prefix + 'selectonfocus') === 'true') {
           options.selectOnFocus = true;
        }

        if (notSameMaskObject(input, mask, options)) {
            return input.data('mask', new Mask(this, mask, options));
        }
    },
    notSameMaskObject = function(field, mask, options) {
        options = options || {};
        var maskObject = $(field).data('mask'),
            stringify = JSON.stringify,
            value = $(field).val() || $(field).text();
        try {
            if (typeof mask === 'function') {
                mask = mask(value);
            }
            return typeof maskObject !== 'object' || stringify(maskObject.options) !== stringify(options) || maskObject.mask !== mask;
        } catch (e) {}
    },
    eventSupported = function(eventName) {
        var el = document.createElement('div'), isSupported;

        eventName = 'on' + eventName;
        isSupported = (eventName in el);

        if ( !isSupported ) {
            el.setAttribute(eventName, 'return;');
            isSupported = typeof el[eventName] === 'function';
        }
        el = null;

        return isSupported;
    };

    $.fn.mask = function(mask, options) {
        options = options || {};
        var selector = this.selector,
            globals = $.jMaskGlobals,
            interval = globals.watchInterval,
            watchInputs = options.watchInputs || globals.watchInputs,
            maskFunction = function() {
                if (notSameMaskObject(this, mask, options)) {
                    return $(this).data('mask', new Mask(this, mask, options));
                }
            };

        $(this).each(maskFunction);

        if (selector && selector !== '' && watchInputs) {
            clearInterval($.maskWatchers[selector]);
            $.maskWatchers[selector] = setInterval(function(){
                $(document).find(selector).each(maskFunction);
            }, interval);
        }
        return this;
    };

    $.fn.masked = function(val) {
        return this.data('mask').getMaskedVal(val);
    };

    $.fn.unmask = function() {
        clearInterval($.maskWatchers[this.selector]);
        delete $.maskWatchers[this.selector];
        return this.each(function() {
            var dataMask = $(this).data('mask');
            if (dataMask) {
                dataMask.remove().removeData('mask');
            }
        });
    };

    $.fn.cleanVal = function() {
        return this.data('mask').getCleanVal();
    };

    $.applyDataMask = function(selector) {
        selector = selector || $.jMaskGlobals.maskElements;
        var $selector = (selector instanceof $) ? selector : $(selector);
        $selector.filter($.jMaskGlobals.dataMaskAttr).each(HTMLAttributes);
    };

    var globals = {
        maskElements: 'input,td,span,div',
        dataMaskAttr: '*[data-mask]',
        dataMask: true,
        watchInterval: 300,
        watchInputs: true,
        useInput: eventSupported('input'),
        watchDataMask: false,
        byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
        translation: {
            '0': {pattern: /\d/},
            '9': {pattern: /\d/, optional: true},
            '#': {pattern: /\d/, recursive: true},
            'A': {pattern: /[a-zA-Z0-9]/},
            'S': {pattern: /[a-zA-Z]/}
        }
    };

    $.jMaskGlobals = $.jMaskGlobals || {};
    globals = $.jMaskGlobals = $.extend(true, {}, globals, $.jMaskGlobals);

    // looking for inputs with data-mask attribute
    if (globals.dataMask) {
        $.applyDataMask();
    }

    setInterval(function() {
        if ($.jMaskGlobals.watchDataMask) {
            $.applyDataMask();
        }
    }, globals.watchInterval);
}, window.jQuery, window.Zepto));

/*$.payment.cards.push({
	type: 'hipercard',
	patterns: [38, 60],
	format: /(\d{1,4})(\d{1,4})?(\d{1,2})?(\d{1,3})? | (\d{1,4})(\d{1,4})?(\d{1,4})?(\d{1,4})? | (\d{1,4})(\d{1,4})?(\d{1,4})?(\d{1,7})?/,
	length: [13, 16, 19],
	cvcLength: [3],
	luhn: false
});*/

$.fn.validate = function(method) {
	if (typeof method === 'undefined') {
		if (this.attr('data-validation-method')) {
			method = this.data('validation-method');
		} else {
			method = 'default';
		}
	}

	switch(method)
	{
	case 'cpf':
		value = this.val().replace('-', '');
		value = value.replace(/\./g, '');

		// validating first digit
		add = 0;

		for (i = 0; i < 9; i++) {
			add += parseInt(value.charAt(i), 10) * (10 - i);
		}

		rev = 11 - (add % 11);

		if (rev == 10 || rev == 11) {
			rev = 0;
		}

		if (rev != parseInt(value.charAt(9), 10)) {
			return false;
		}

		// validating second digit
		add = 0;

		for (i = 0; i < 10; i++) {
			add += parseInt(value.charAt(i), 10) * (11 - i);
		}

		rev = 11 - (add % 11);

		if (rev == 10 || rev == 11) {
			rev = 0;
		}

		if (rev != parseInt(value.charAt(10), 10)) {
			return false;
		}
		break;
	case 'birthdate':
		// YYYY-MM-DD
		if (!/^\d{4}-\d{1,2}-\d{1,2}$/.test(this.val())) {
			return false;
		}

		// Parse the date parts to integers
		var parts = this.val().split('-'),
				year  = parseInt(parts[0], 10),
				month = parseInt(parts[1], 10),
				day   = parseInt(parts[2], 10);

		var date          = new Date(),
				current_year  = date.getFullYear(),
				current_month = date.getMonth() + 1,
				current_day   = date.getDate();

		// Check the ranges of month and year
		if (year < (current_year - 130) || year > current_year || month == 0 || month > 12) {
			return false;
		}

		// check to the day
		if (year == current_year) {
			if (month > current_month || (month == current_month && day > current_day)) {
				return false;
			}
		}

		var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

		// Adjust for leap years
		if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
			monthLength[1] = 29;
		}

		// Check the range of the day
		return day > 0 && day <= monthLength[month - 1];
		break;
	default:
		if (!this.val()) {
			return false;
		}
	}

	return true;
}