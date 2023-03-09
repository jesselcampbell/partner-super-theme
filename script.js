import { initPrismJS } from './prism'

const setActivePage = () => {
    const currentPage = document.querySelectorAll('a[href="' + window.location.pathname + '"]');
    currentPage.forEach(function(page) {
        if (!page.classList.contains('super-navbar__logo') && !page.parentNode.classList.contains('notion-image')) {
            page.classList.add('page-active')
        }
        const pageIcon = page.querySelector('.notion-page__icon')
        if (pageIcon) {
            pageIcon.setAttribute("style", "opacity:1!important; filter:grayscale(0%)!important;")
        }
    });
}

window.addEventListener('load', e => {
    initPrismJS()
    setActivePage()
    next.router.events.on('routeChangeComplete', url => {
        // console.log(`Page has changed to ${url}`)
        setActivePage()
        initPrism()
    })
})