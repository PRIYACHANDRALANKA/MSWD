import ReactDOM from 'react-dom'
import App from './App.js'

const persons = [
  {
    id: 1,
    name: 'Priya',
    number: 9014048542
  },
  {
    id: 2,
    name: 'Chandra',
    number: 7981773595
  },
  {
    id: 3,
    name: 'Lanka',
    number: 9441363088
  }
]

ReactDOM.render(
  <App persons={persons} />,
  document.getElementById('root')
)
