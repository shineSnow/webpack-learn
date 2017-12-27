// import 'babel-polyfill'
import 'normalize.css'

import {say_hello,calc} from './Test'
if(module.hot) {
    // if(process.env.NODE_ENV == 'development') module.hot.accept();
    module.hot.accept()
}

say_hello()  

    