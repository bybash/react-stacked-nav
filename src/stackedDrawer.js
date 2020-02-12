import React, { useState, useEffect, useMemo } from 'react'
import { cx } from 'emotion'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import useStackedDrawer from './hooks/useStackedDrawer'
import usePrevious from './hooks/usePrevious'
import makeStyles from './styles'

const noop = () => {}

export default function StackedDrawer ({
  onClose = noop,
  closeOnOverlayClick = true,
  animationTimeout = 250,
  drawerWidth = 840,
  onAfterPush = noop,
  onAfterPop = noop
}) {
  const styles = useMemo(() => makeStyles(animationTimeout, drawerWidth), [animationTimeout, drawerWidth])
  const stackedManager = useStackedDrawer()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const previousComponentCount = usePrevious(stackedManager.all().length)

  const isDrawerActive = stackedManager.selectedIndex >= 0

  useEffect(() => {
    if (previousComponentCount < stackedManager.count()) {
      setSelectedIndex(stackedManager.count() - 1)
      onAfterPush(stackedManager.selectedIndex)
    }
  }, [previousComponentCount, stackedManager])

  function handleClose () {
    if (closeOnOverlayClick) {
      stackedManager.close()
      onClose()
    }
  }

  return (
    <div className={cx(styles.mainHolder, isDrawerActive && styles.toTopClass)}>
      <div
        className={cx(styles.overlay, isDrawerActive && styles.overlayActive)}
        onClick={() => handleClose()}
      />
      <div className={cx(styles.drawer, isDrawerActive && styles.moveClass)}>
        <div className={styles.drawerContainer}>
          <TransitionGroup className='drawer-components'>
            {stackedManager.all().map((Component, index) => (
              <CSSTransition
                key={index}
                timeout={300}
                classNames={{
                  enter: styles.drawerItemEnter,
                  enterActive: styles.drawerItemEnterActive,
                  exit: styles.drawerItemExit,
                  exitActive: styles.drawerItemExitActive
                }}
                onExited={(_) => {
                  setSelectedIndex(stackedManager.count() - 1)
                  onAfterPop(stackedManager.count() - 1)
                }}
              >
                <TabPanel overlayed={index !== selectedIndex} styles={styles}>
                  {Component}
                </TabPanel>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    </div>

  )
}

function a11yProps (index) {
  return {
    id: `drawer-tab-${index}`,
    'aria-controls': `drawer-tab-${index}`
  }
}

const TabPanel = React.forwardRef((props, ref) => {
  const { children, overlayed, index, styles } = props

  return (
    <div
      className={cx(styles.drawerItem, styles.drawerPanel)}
      ref={ref}
      {...a11yProps(index)}
    >
      {children}
      <div className={cx(styles.overlayDrawer, (overlayed && styles.overlayActive))} />
    </div>
  )
})
