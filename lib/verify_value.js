/**
 * Created by Bluesky on 2015/9/16.
 * Description：verify value
 */
"use strict";

var verifyValue = module.exports = {};
/**
 * veryfy value is a positive integer
 * @param value
 * @returns {boolean}
 */
verifyValue.isPositiveInteger = function (value) {
    if (typeof value === 'number') {
        return /^[1-9]+[0-9]*]*$/.test(value);
    } else {
        return false;
    }
}

/**
 * veryfy value is a number
 * @param value
 * @returns {boolean}
 */
verifyValue.isNumber = function (value) {
    if (typeof value === 'number') {
        return true;
    } else {
        return false;
    }
}


