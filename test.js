let btn = document.querySelector('#click')
let root = document.querySelector('#root')

function drawElems(limit, arr) {
    for (let i = 0; i < limit; i++) {
        let elem = document.createElement('div')
        let curr = arr[i]
        let remove = document.createElement('button')
        remove.innerHTML = 'Delete me'
        remove.classList.add('remove')
        elem.id = 'post_' + curr.id
        elem.append(curr.id)
        elem.append(curr.title)
        elem.appendChild(remove)
        root.appendChild(elem)
    }
}
async function fetchElems() {
    await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => drawElems(10, json))
        .catch(error => console.log(error))

}
btn.addEventListener('click', function () {
    fetchElems()
    btn.setAttribute('disabled', '')
})
let cache = {
    prev: '',
    elem: ''
};
root.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove')) {
        let parentBtn = e.target
        let parent = parentBtn.closest('div')
        if (parent) {
            console.log(parent)
            cache.elem = parent
            cache.prev = parent.previousElementSibling
            root.removeChild(parent)
        }
    }
    console.log(cache)
})
document.body.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey && cache.prev) {
        if (e.key == 'z') {
            if (cache.prev) {
                console.log(1)
                cache.prev.insertAdjacentElement('afterend', cache.elem)
            } else {
                console.log(2)
                root.prepend(cache.elem)
            }
            cache.elem = ''
            cache.prev = ''
        }
    }
})
