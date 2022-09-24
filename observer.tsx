const options: IntersectionObserverInit = {
    threshold: 0.6
}

export const handleNavLinks = (id: string) => {
    const navLinks = document.querySelectorAll('a.navLink');
    navLinks.forEach(navLink => {
        if(!id) return;
        navLink.classList.remove('text-primary');
        (navLink as HTMLAnchorElement).href.includes(id) ? navLink.classList.add('text-primary') : ''
    })
}

export const handleAsideLinks = (id: string) => {
    const asideLinks = document.querySelectorAll('a.asideLink');
    asideLinks.forEach(asideLink => {
        if(!id) return;
        asideLink.classList.remove('text-primary');
        (asideLink as HTMLAnchorElement).href.includes(id) ? asideLink.classList.add('text-primary') : ''
    })
}

const observer = (fn: typeof handleNavLinks | typeof handleAsideLinks) => {
    return new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                fn(entry.target.id)
            }
        })
    }, options)
}

export default observer