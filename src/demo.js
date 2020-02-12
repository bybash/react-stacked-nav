import React from 'react'
import StackedDrawer from './stackedDrawer'
import useStackedDrawer from './hooks/useStackedDrawer'
import { root, label, button, button2, panel } from './styles/demoStyles'

export default function DemoComponent () {
  const stackedDrawerManager = useStackedDrawer()

  function handleClose () {
    console.log('Stacked Drawer is closed')
  }

  function handlePush (index) {
    console.log('Pushed Index', index)
  }

  function handlePop (index) {
    console.log('Popped Index', index)
  }

  function pushComponent (text) {
    stackedDrawerManager.push(<DrawerPanel text={text + ' - ' + stackedDrawerManager.selectedIndex} />)
  }

  return (
    <div className={root}>
      <h3 className={label}>React Stacked Navigation</h3>
      <StackedDrawer onClose={handleClose} onAfterPush={handlePush} onAfterPop={handlePop} />
      <button className={button} type='button' onClick={() => pushComponent('Test Drawer')}> Open Navigation </button>
    </div>
  )
}

function DrawerPanel ({ text }) {
  const stackedDrawerManager = useStackedDrawer()
  function pushComponent (text) {
    stackedDrawerManager.push(<DrawerPanel text={text + ' - ' + stackedDrawerManager.selectedIndex} />)
  }
  function popComponent () {
    stackedDrawerManager.pop()
  }
  return (
    <div className={panel}>
      <button type='button' className={button2} onClick={() => popComponent()}> Pop </button>
      {text}
      <button type='button' className={button2} onClick={() => pushComponent('Test Drawer Inner')}> Add Another </button>
    </div>
  )
}
