 import './scss/index.scss'; // Подключение файла SCSS
/*import { get } from './lib/minerX'

const obj = {
	data: {
		first: 'Vladislav',
		second: true,
	},
};


console.log(get(obj, 'data.first', 'dev'))
 */

import { isEmpty } from './utils/mydash/is-empty'

console.log(isEmpty(null)) // => true
console.log(isEmpty(true)) // => true
console.log(isEmpty(1)) // => true
console.log(isEmpty([1,2,3])) // => false
console.log(isEmpty({'a':1})) // => false
console.log(isEmpty('123')) // => false
console.log(isEmpty(123)) // => true
console.log(isEmpty('')) // => true
console.log(isEmpty(0)) // => truee





