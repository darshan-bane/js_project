const inputs = document.getElementById('inp')
const text = document.querySelector('.text')

function add() {
    if (inputs.value == '') {
        alert('please enter the task')
    }
    else {
        const newEle = document.createElement('ul')
        newEle.classList.add('newElement')
        newEle.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        inputs.value = '';
        newEle.querySelector('i').addEventListener('click', remove)
        function remove() {
            newEle.remove()
        }
    }
}