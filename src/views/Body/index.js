import Footer from '../Footer'
import Navbar from '../Navbar'
import Content from '../Content'

import style from './style.css'

export default () => {
    let html =`<article class="${style.wrapper}">

                    <header class="${style.header}">${Navbar()}</header>
                     
                    <section class="${style.content_a}">${Content()}</section>
                    
                    <footer class="${style.footer}"> ${Footer()} </footer>
                    
                </article>`
    $('.home').html(html)
}