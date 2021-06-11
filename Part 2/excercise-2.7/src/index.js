import ReactDOM from 'react-dom'
import App from './App.js'

const persons = [
  {
    id: 1,
    name: 'Priya'
  },
  {
    id: 2,
    name: 'Chandra'
  },
  {
    id: 3,
    name: 'Lanka'
  }
]

ReactDOM.render(
  <App persons={persons} />,
  document.getElementById('root')
)
