// import { initPrismJS } from './prism'

const setActivePage = () => {
    const currentPage = document.querySelectorAll('a[href="' + window.location.pathname + '"]');
    currentPage.forEach(function(page) {
        if (!page.classList.contains('super-navbar__logo') && !page.parentNode.classList.contains('notion-image')) {
            page.classList.add('page-active')
        }
    });
}

window.addEventListener('load', e => {
    // initPrismJS()
    setActivePage()
    next.router.events.on('routeChangeComplete', url => {
        // console.log(`Page has changed to ${url}`)
        setActivePage()
        initPrism()
    })
})