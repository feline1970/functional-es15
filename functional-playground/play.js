/*
 * @Author: Freja
 * @Date: 2024-12-03 12:17:34
 * @FilePath: /learning-functional/functional-playground/play.js
 * @LastEditors: Freja
 * @LastEditTime: 2024-12-03 13:04:02
 */
import forEach from '../lib/es15-functional.js';

var array = [1, 2, 3];
forEach(array, (data) => {
	console.log(data*2);
});
