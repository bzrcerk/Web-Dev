'use strict'

// Intro
alert("I'm JavaScript")

// 1st
let name1 = 'John'
let admin
admin = name1
alert(admin)

// 2nd
const planet = 'Earth'
let userName = 'John'

// 3rd
let name2 = 'Ilya'
alert(`hello ${1}`) // hello 1
alert(`hello ${'name'}`) // hello name
alert(`hello ${name2}`) // hello Ilya

// 4th
let name3 = prompt('What is your name?')
alert(`Hello ${name3}`)

// 5th
let a = 1,
	b = 1
let c = ++a // 2
let d = b++ // 1

// 6th
5 > 4 // true
'apple' > 'pineapple' // false
'2' > '12' // true
undefined == null // true
undefined === null // false
null == '\n0\n' // false
null === +'\n0\n' // false

// 7th
let value = prompt('What is the "official" name of JavaScript?', '')
if (value == 'ECMAScript') {
	alert('Right!')
} else {
	alert("You don't know? ECMAScript!")
}

// 8th
let result = a + b < 4 ? 'Below' : 'Over'

// 9th
let message =
	login == 'Employee'
		? 'Hello'
		: login == 'Director'
			? 'Greetings'
			: login == ''
				? 'No login'
				: ''

// 10th
alert(null || 2 || undefined) //2
alert(alert(1) || 2 || alert(3)) // 1 2
alert(null || (2 && 3) || 4) // 3
if (!(age >= 14 && age <= 90));

let userName1 = prompt("Who's there?", '')

if (userName1 === 'Admin') {
	let pass = prompt('Password?', '')

	if (pass === 'TheMaster') {
		alert('Welcome!')
	} else if (pass === '' || pass === null) {
		alert('Canceled')
	} else {
		alert('Wrong password')
	}
} else if (userName1 === '' || userName1 === null) {
	alert('Canceled')
} else {
	alert("I don't know you")
}

// 11th
let i = 3

while (i) {
	alert(i--)
}

for (let i = 0; i < 5; i++) alert(i)

for (let i = 0; i < 3; i++) {
	alert(`number ${i}!`)
}
let num

do {
	num = prompt('Enter a number greater than 100?', 0)
} while (num <= 100 && num)

// 12th
let a_ = +prompt('a?', '')

switch (a_) {
	case 0:
		alert(0)
		break

	case 1:
		alert(1)
		break

	case 2:
	case 3:
		alert('2,3')
		break
}

function checkAge(age) {
	return age > 18 ? true : confirm('Did parents allow you?')
}

function checkAge(age) {
	return age > 18 || confirm('Did parents allow you?')
}

function min(a, b) {
	if (a < b) {
		return a
	} else {
		return b
	}
}

function min(a, b) {
	return a < b ? a : b
}

function pow(x, n) {
	let result = x

	for (let i = 1; i < n; i++) {
		result *= x
	}

	return result
}

let x = prompt('x?', '')
let n = prompt('n?', '')

if (n < 1) {
	alert(`Power ${n} is not supported, use a positive integer`)
} else {
	alert(pow(x, n))
}

function ask(question, yes, no) {
	if (confirm(question)) yes()
	else no()
}

ask(
	'Do you agree?',
	() => alert('You agreed.'),
	() => alert('You canceled the execution.'),
)
function pow(x, n) {
	let result = 1

	for (let i = 0; i < n; i++) {
		result *= x
	}

	return result
}

let x1 = prompt('x?', '')
let n1 = prompt('n?', '')

if (n1 <= 0) {
	alert(`Power ${n1} is not supported,
    please enter an integer number greater than zero`)
} else {
	alert(pow(x, n))
}

describe('Raises x to power n', function () {
	it('5 in the power of 1 equals 5', function () {
		assert.equal(pow(5, 1), 5)
	})

	// Mocha will run only this block
	it.only('5 in the power of 2 equals 25', function () {
		assert.equal(pow(5, 2), 25)
	})

	it('5 in the power of 3 equals 125', function () {
		assert.equal(pow(5, 3), 125)
	})
})
let user = {}
user.name = 'John'
user.surname = 'Smith'
user.name = 'Pete'
delete user.name
function isEmpty(obj) {
	for (let key in obj) {
		// if the loop has started, there is a property
		return false
	}
	return true
}
let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
}

let sum = 0
for (let key in salaries) {
	sum += salaries[key]
}

alert(sum) // 390
// before the call
let menu = {
	width: 200,
	height: 300,
	title: 'My menu',
}

multiplyNumeric(menu)

// after the call
menu = {
	width: 400,
	height: 600,
	title: 'My menu',
}
function makeUser() {
	return {
		name: 'John',
		ref() {
			return this
		},
	}
}

let user = makeUser()

alert(user.ref().name) // John
let calculator = {
	sum() {
		return this.a + this.b
	},

	mul() {
		return this.a * this.b
	},

	read() {
		this.a = +prompt('a?', 0)
		this.b = +prompt('b?', 0)
	},
}

calculator.read()
alert(calculator.sum())
alert(calculator.mul())
let ladder = {
	step: 0,
	up() {
		this.step++
		return this
	},
	down() {
		this.step--
		return this
	},
	showStep() {
		alert(this.step)
		return this
	},
}

ladder.up().up().down().showStep().down().showStep() // shows 1 then 0
