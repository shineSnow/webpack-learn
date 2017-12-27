import'babel-polyfill'

import {say_hello,calc} from './Test'

if(process.env.NODE_ENV == 'development') module.hot.accept();

calc()