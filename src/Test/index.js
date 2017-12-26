import {cube} from '../math'


export const say_hello = () => {
    let html = `
            <h1>这个是标题</h1>
            <p>这里是内容</p>
    `
    document.getElementById('root').innerHTML = html
    
}

export const calc = () => {
        let num = cube(2),
        html = `2*2*2 = ${num}`
        document.getElementById('root').innerHTML = html
}