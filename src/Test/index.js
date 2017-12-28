import {cube} from './math'
import style from './style.css'
import './moment'

export const say_hello = () => {
    let html = `
            <h1 class="${style.title}">这个是标题</h1>
            <p class="${style.text}">这里是内容是的法定 </p>
    `
    document.getElementById('root').innerHTML = html
    
}

export const calc = () => {
        let num = cube(2),
        html = `2*2*2答案等于${num} ,对么,yese？`
        document.getElementById('root').innerHTML = html
       console.log()
}