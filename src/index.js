import'babel-polyfill'

import {say_hello} from './test.js'


//  if (module.hot) {
//        module.hot.accept('./test.js',function() {
//          console.log('Accepting the updated printMe module!');
//          say_hello()
//        })
// }
say_hello()