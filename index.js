const people = [
  { id: 1, name: 'Luciana' },
  { id: 2, name: 'Davi' },
  { id: 3, name: 'Tammy' },
  { id: 4, name: 'Monique' }
]

const root = document.getElementById('root')

root.innerHTML = '<h1>Users</h1>'

function render(array) {
  for ( const object of array ) {
    root.innerHTML += `<p>${object.name}</p>`
  }
}

render(people)