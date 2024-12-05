/*
 * @Author: Freja
 * @Date: 2024-12-03 12:15:03
 * @FilePath: /learning-functional/lib/es15-functional.js
 * @LastEditors: Freja
 * @LastEditTime: 2024-12-05 14:38:23
 */
export function forEach(array, fn) {
	for (let i = 0; i < array.length; i++) {
		fn(array[i]);
	}
};

export function forEachObject(obj, fn) {
	for(var property in obj) {
		if (obj.hasOwnProperty(property)) {
			fn(property, obj[property])
		}
	}
}

export function times(times, fn) {
	for(var i = 0; i < times; i++) {
		fn(i)
	}
}

export function every(arr, fn) {
	let result = true
	// for 循环
	// for(var i = 0; i < arr.length; i++) {
	// 	result = result && fn(arr[i])
	// }
	// for...of 抽象
	for(const value of arr) {
		result = result && fn(value)
	}
	return result
}

export function some(arr, fn) {
	let result = false
	for(const value of arr) {
		result = result || fn(value)
	}
	return result
}

export function sortBy(property) {
	return (a, b) => {
		var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0
		return result
	}
}