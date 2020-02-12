import { css } from 'emotion'

export default function makeStyles (animationTimeOut, drawerWidth) {
  const styles = {
    mainHolder: css({
      position: 'fixed',
      zIndex: '-1',
      right: 0,
      bottom: 0,
      top: 0,
      left: 0
    }),
    toTopClass: css({
      zIndex: '1300'
    }),
    drawer: css({
      top: '0',
      right: `-${drawerWidth}px`,
      left: 'auto',
      flex: '1 0 auto',
      height: '100%',
      display: 'flex',
      outline: 0,
      zIndex: 1200,
      position: 'fixed',
      overflowY: 'auto',
      flexDirection: 'column',
      boxSizing: 'border-box',
      transition: `transform ${animationTimeOut}ms cubic-bezier(0, 0, 0.2, 1) 0ms`
    }),
    moveClass: css({
      transform: `translateX(-${drawerWidth}px)`
    }),
    drawerContainer: css({
      width: `${drawerWidth}px`,
      maxWidth: `${drawerWidth}px`,
      display: 'flex',
      overflowX: 'hidden',
      boxSizing: 'border-box'
    }),
    overlay: css({
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      zIndex: -1,
      position: 'fixed',
      alignItems: 'center',
      touchAction: 'none',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0)',
      opacity: 0,
      visibility: 'hidden',
      transition: `all ${animationTimeOut}ms ease-in`
    }),
    drawerPanel: css({
      height: '100vh',
      width: '100%',
      backgroundColor: '#0F4C81',
      boxSizing: 'border-box'
    }),
    drawerItem: css({
      position: 'absolute',
      zIndex: '4',
      height: '100vh'
    }),
    drawerItemEnter: css({
      left: `${drawerWidth}px`
    }),
    drawerItemEnterActive: css({
      left: '0px',
      transition: `left ${animationTimeOut}ms ease-in`
    }),
    drawerItemExit: css({
      left: '0px'
    }),
    drawerItemExitActive: css({
      left: `${drawerWidth}px`,
      transition: `left ${animationTimeOut}ms ease-in`
    }),
    overlayDrawer: css({
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100vh',
      zIndex: 1,
      backgroundColor: 'rgb(0, 0, 0)',
      opacity: 0,
      visibility: 'hidden',
      transition: `all ${animationTimeOut}ms ease-in`
    }),
    overlayActive: css({
      opacity: 0.5,
      visibility: 'visible'
    })
  }
  return styles
}
