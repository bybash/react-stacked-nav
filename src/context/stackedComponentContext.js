import React, { useState } from 'react'
export const StackedComponentContext = React.createContext({
  stackedComponent: [],
  setStackedComponent: () => []
})

export const StackedDrawerProvider = ({ children }) => {
  const [stackedComponent, setStackedComponent] = useState([])
  const { Provider } = StackedComponentContext

  const value = [
    stackedComponent,
    setStackedComponent
  ]

  return (
    <Provider value={value}>
      {children}
    </Provider>
  )
}
