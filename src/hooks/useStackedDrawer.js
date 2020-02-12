import { useContext } from 'react'
import { StackedComponentContext } from '../context/stackedComponentContext'

export default function useStackedDrawer () {
  const [stakedComponents, setStackedComponents] = useContext(StackedComponentContext)

  function push (component) {
    setStackedComponents([...(stakedComponents || []), component])
  }

  function pop () {
    if (stakedComponents && stakedComponents.length > 1) {
      stakedComponents.pop()
      setStackedComponents(stakedComponents.slice())
    } else {
      close()
    }
  }

  function close () {
    setStackedComponents([])
  }

  function all () {
    return stakedComponents || []
  }

  function count () {
    return (stakedComponents || []).length
  }

  const selectedIndex = (stakedComponents || []).length ? stakedComponents.length - 1 : -1
  const topComponent = selectedIndex >= 0 ? stakedComponents[selectedIndex] : null

  return {
    all,
    close,
    count,
    push,
    pop,
    selectedIndex,
    topComponent
  }
}
