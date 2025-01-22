import './scss/index.scss' // Подключение файла SCSS
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

console.info(isEmpty(null))
