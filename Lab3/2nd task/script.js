const taskList = document.querySelector('.todo-list')
const taskInput = document.getElementById('input')
const addBtn = document.querySelector('.add-btn')

let todos = []

function render() {
	taskList.innerHTML = ''
	for (let i = 0; i < todos.length; i++) {
		const li = document.createElement('li')
		li.classList.add('todo')

		const span = document.createElement('p')
		span.textContent = todos[i].text

		const right = document.createElement('div')
		right.className = 'right-block'

		const checkbox = document.createElement('div')
		checkbox.className = 'checkbox'

		const delBtn = document.createElement('button')
		delBtn.className = 'del-btn'

		const delBtnImg = document.createElement('div')
		delBtnImg.className = 'del-img'

		delBtn.appendChild(delBtnImg)

		right.appendChild(checkbox)
		right.appendChild(delBtn)

		li.appendChild(span)
		li.appendChild(right)

		taskList.appendChild(li)
		taskInput.value = ''

		delBtn.addEventListener('click', e => {
			e.preventDefault()

			todos = todos.filter(todo => todo.id !== todos[i].id)
			render()
		})

		li.addEventListener('click', () => {
			li.classList.toggle('done')
			checkbox.classList.toggle('checked')
		})
	}
}

addBtn.addEventListener('click', e => {
	e.preventDefault()
	if (taskInput.value != '') {
		todos.push({
			id: Date.now(),
			text: taskInput.value,
			done: false,
		})
	}

	render()
})
