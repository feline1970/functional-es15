/*
 * @Author: Freja
 * @Date: 2024-12-03 12:17:34
 * @FilePath: /learning-functional/functional-playground/play.js
 * @LastEditors: Freja
 * @LastEditTime: 2024-12-03 15:40:56
 */
import {forEach, forEachObject} from '../lib/es15-functional.js';

// test-1
var array = [1, 2, 3];
forEach(array, (data) => {
	// console.log(data*2);
});


// test-2
let fn = () => {
	// console.log(typeof fn);
}
fn()

// test-3
let tellType = (arg) => {
	if (typeof arg === 'function') {
		arg()
	} else {
		// console.log("The passed data is " + arg);
	}
}
let data = 1
tellType(data)
let dataFn = () => {
	// console.log("I'm a function");
}
tellType(dataFn)

// test-4
let crazy = () => {
	return String
}
// console.log(String("HOC"));
// console.log(crazy());
let fn2 = crazy()
// console.log(fn2("HOC"));/
// console.log(crazy()("HOC"));

// test-5
let object = {
	a: 1,
	b: 2
}
forEachObject(object, (k, v) => {
	console.log(k+": "+v);
})

// test-6