import React from 'react'
import ReactDOM from 'react-dom'
import { StackedDrawerProvider } from './context/stackedComponentContext'
import DemoComponent from './demo'

function App () {
  return (
    <StackedDrawerProvider>
      <DemoComponent />
    </StackedDrawerProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
