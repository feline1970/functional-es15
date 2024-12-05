/*
 * @Author: Freja
 * @Date: 2024-12-03 12:17:34
 * @FilePath: /learning-functional/functional-playground/play.js
 * @LastEditors: Freja
 * @LastEditTime: 2024-12-05 15:08:46
 */
import {forEach, forEachObject, times, every, some, sortBy} from '../lib/es15-functional.js';

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
	// console.log(k+": "+v);
})


// test-6
const unless = (predicate, fn) => {
	if (!predicate) {
		fn()
	}
}
// 命令式
forEach([0,1,2,3,4,5,6,7], (number) => {
	unless((number % 2), () => {
		// console.log(number, " is even");
	})
})
// 函数式
times(8, (number) => {
	unless((number % 2), () => {
		// console.log(number, " is even");
	})
})


// test-7
// 一个数组是否全部都是NaN
var every_test1 = every([NaN, NaN, NaN], isNaN)
var every_test2 = every([NaN, NaN, NaN], isNaN)
// console.log(every_test1);
// console.log(every_test2);


// test-8
// 一个数组是否包含NaN
var some_test1 = some([NaN, NaN, 4], isNaN)
var some_test2 = some([3, 4, 4], isNaN)
// console.log(some_test1);
// console.log(some_test2);


// test-9
var fruit = ["cherries", "apples", "bananas"]
var fruit_test = fruit.sort()
// console.log(fruit_test);

var num = [2, 12, 13, 5, 100]
var num_test = num.sort()
// console.log(num_test);

// sort函数的签名：num.sort([compareFunction])
// 不传compareFunction，被转换为字符串，按照Unicode编码点顺序排序
// 实现数字正确排序：
var num_test2 = num.sort((a, b) => {
	return a < b ? -1 : a > b ? 1 : 0
})
// console.log(num_test2);
var num_test3 = num.sort((a, b) => {
	return a - b
})
// console.log(num_test3);

var people = [
	{ firstName: 'aaFirstName', lastName: 'ccLastName' },
	{ firstName: 'ccFirstName', lastName: 'aaLastName' },
	{ firstName: 'bbFirstName', lastName: 'bbLastName' },
]
var people_sortByFirstName = people.sort((a, b) => {
	return a.firstName < b.firstName ? -1 : a.firstName > b.firstName ? 1 : 0
})
// console.log(people_sortByFirstName);
var people_sortByLastName = people.sort((a, b) => {
	return a.lastName < b.lastName ? -1 : a.lastName > b.lastName ? 1 : 0
})
// console.log(people_sortByLastName);

// 参数不同，同样的函数写了两遍，没有达到复用的目的。
// 将compareFunction抽象为sortBy高阶函数
var people_sortByFirstName2 = people.sort(sortBy('firstName'))
// console.log(people_sortByFirstName2);
var people_sortByLastName2 = people.sort(sortBy('lastName'))
// console.log(people_sortByLastName2);


// test-10
let global = "global"
function outer(value) {
	let outer = "outer"
	function inner() {
		let a = 5;
		console.log(value);
	}
	inner()
}
outer(global)