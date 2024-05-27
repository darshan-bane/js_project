const acordians = document.querySelectorAll('.acordian')

acordians.forEach(acordian => {
    const icon = acordian.querySelector('.icon')
    const answer = acordian.querySelector('.answer')

    acordian.addEventListener('click', () => {
        icon.classList.toggle('active')
        answer.classList.toggle('active')
    })
})

