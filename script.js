const link = document.createElement('a')
var infoShowed = false

const text = document.createElement('div')
text.style.fontSize = '15px'
text.style.lineHeight = '1'

var lastIndex = 0
var ids = [
    'header',
    'about-us',
    'portfolio',
    'comments',
    'contact-us'
]

function setActive(index) {
    if (index != lastIndex) {
        const navLinks = document.querySelectorAll('.nav_link'),
              navLink = navLinks[index],
              lastNavLink = navLinks[lastIndex]

        navLink.classList.add('active')
        lastNavLink.classList.remove('active')

        var id = ids[index]
        link.setAttribute('href', '#' + id)
        link.click()

        lastIndex = index
    }
}

function creatingMessage(textarea) {
    textarea.style.height = '213px'
    textarea.style.height = textarea.scrollHeight + 'px'
}

function showInfo() {
    const nav = document.querySelector('nav')
    const infoBlock = document.querySelector('.info_block')
    infoBlock.classList.toggle('showed')

    if (!infoShowed && window.scrollY >= 80)
        nav.style.marginTop = '0'

    infoShowed = !infoShowed
}

document.addEventListener('scroll', () => {
    const scrollY = window.scrollY
    const windowHeight = window.innerHeight

    if (!infoShowed) {
        const nav = document.querySelector('nav')

        if (scrollY >= 80) {
            if (window.innerWidth >= 898) {
                nav.style.marginTop = '-80px'
            }

            else {
                nav.style.marginTop = '-160px'
            }
        }

        else {
            nav.style.marginTop = '0'
        }
    }

    var infoLines = document.querySelectorAll('.info_line div')
    for (var index = 0; index < 5; index++) {
        var id = ids[index],
            infoLine = infoLines[index],
            htmlElement = document.querySelector(`#${id}`),
            {top, height} = htmlElement.getBoundingClientRect()

        if (top <= 0) {
            var percent = Math.abs(top) / height * 100
            if (percent < 100) {infoLine.style.height = percent + '%'}
            else {infoLine.style.height = '100%'}
        }

        else {infoLine.style.height = '0%'}
    }
})

document.addEventListener('mousemove', e => {
    const nav = document.querySelector('nav')
    const scrollY = window.scrollY
    
    if (scrollY >= 80) {
        if (e.clientY <= 80) {
            nav.style.marginTop = '0px'
        }

        else if (!infoShowed) {
            if (window.innerWidth >= 898) {
                nav.style.marginTop = '-80px'
            }
    
            else {
                nav.style.marginTop = '-160px'
            }
        }
    }
})