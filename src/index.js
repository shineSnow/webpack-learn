// import 'babel-polyfill'
import 'normalize.css'

import Index from './views/Index'
import {say_hello} from './Test'

if(module.hot) {
    // if(process.env.NODE_ENV == 'development') module.hot.accept();
    module.hot.accept()
}


say_hello()
