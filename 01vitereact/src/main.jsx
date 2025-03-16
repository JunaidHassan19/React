import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = ' Hello JH'

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Visit Google with React Create Element',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    // myApp()
    // <App />
    // anotherElement
    reactElement
)
