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
    return /^[1-9]+[0-9]*]*$/.test(value);
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

/**
 * 检查一个对象的属性值是否为空
 * @param obj 要验证的对象
 * @param ignore_property 要忽略的属性
 * @returns {*}
 */
verifyValue.checkObjValue = function (obj, ignore_property) {
    ignore_property = ignore_property || {}
    for (var key in obj) {
        if (ignore_property[key]) {
            continue;
        }
        if (!obj[key]) {
            return 'key';
        }
    }
    return false;
}
/**
 * 检查一个对象指定的属性值是否为空
 * @param obj 要验证的对象
 * @param property 验证属性名,字符串数组
 * @returns {*}
 */
verifyValue.checkValue = function (obj, property) {
    property = property || []
    for (var i in property) {
        var key = property[i];
        if (!obj[key]) {
            return key;
        }
    }
    return false;
}


