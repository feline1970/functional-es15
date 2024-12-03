/*
 * @Author: Freja
 * @Date: 2024-12-03 12:15:03
 * @FilePath: /learning-functional/lib/es15-functional.js
 * @LastEditors: Freja
 * @LastEditTime: 2024-12-03 13:00:13
 */
const forEach = (array, fn) => {
	let i;
	for (i = 0; i < array.length; i++) {
		fn(array[i]);
	}
};

export default forEach;
