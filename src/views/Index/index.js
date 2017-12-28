import style from './style.css'


export default () => {
    let template = `<article class="${style.wrapper}">
                    <header class="${style.header}">Header</header>

                    <section class="${style.content}">section</section>

                    <footer class="${style.footer}">footer</footer>

                </article>`
    $('#root').html(template)
}