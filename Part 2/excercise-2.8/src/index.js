import ReactDOM from 'react-dom'
import App from './App.js'

const persons = [
  {
    id: 1,
    name: 'Priya',
    number: 9004048542
  },
  {
    id: 2,
    name: 'Chandra',
    number: 9100226132
  },
  {
    id: 3,
    name: 'Lanka',
    number: 9290552800
  }
]

ReactDOM.render(
  <App persons={persons} />,
  document.getElementById('root')
)
