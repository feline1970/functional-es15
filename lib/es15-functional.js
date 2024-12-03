/*
 * @Author: Freja
 * @Date: 2024-12-03 12:15:03
 * @FilePath: /learning-functional/lib/es15-functional.js
 * @LastEditors: Freja
 * @LastEditTime: 2024-12-03 15:34:15
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
