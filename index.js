const people = [
  { id: 1, name: 'Luciana' },
  { id: 2, name: 'Davi' },
  { id: 3, name: 'Tammy' },
  { id: 4, name: 'Monique' }
]

const root = document.getElementById('root')

const h1 = document.createElement('h1')
h1.textContent = 'Users'
root.appendChild(h1)

// for ( const person of people ) {
//   const p = document.createElement('p')
//   p.textContent = person.name
//   root.appendChild(p)
// }

for ( let i = 0; i < people.length; i++ ) {
  const p = document.createElement('p')
  p.textContent = people[i].name
  root.appendChild(p)
}