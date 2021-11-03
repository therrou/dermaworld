
/// Footer

const buttonFooter = document.querySelector('.expand-cta-footer');
buttonFooter.addEventListener('click', (e) => {
    if(e.target.classList.contains('open') ) {
        e.target.classList.remove('open');
        document.querySelector('footer').classList.add('open')
    } else {
        e.target.classList.add('open');
        document.querySelector('footer').classList.remove('open')
    }
})