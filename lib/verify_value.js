/**
 * Created by Bluesky on 2015/9/16.
 * Description：verify value
 */
"use strict";

var verifyValue = module.exports = {};

verifyValue.isPositiveInteger = function (value) {
    return /^[1-9]+[0-9]*]*$/.test(value);
}

