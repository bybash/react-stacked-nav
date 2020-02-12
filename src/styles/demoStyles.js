import { css } from 'emotion'

export const panel = css({
  height: '100vh',
  width: '100%',
  backgroundColor: '#0F4C81',
  boxSizing: 'border-box',
  color: 'white',
  fontFamily: 'Arial',
  padding: 16,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline'
})

export const root = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  color: '#0F4C81',
  flexDirection: 'column'
})

export const label = css({
  fontFamily: 'Arial',
  fontWeight: 700
})

export const button = css({
  backgroundColor: '#0F4C81',
  border: 'none',
  padding: '20px',
  borderRadius: '5px',
  color: 'white',
  fontSize: '14px',
  cursor: 'pointer'
})

export const button2 = css({
  backgroundColor: '#658DC6',
  border: 'none',
  padding: '10px',
  borderRadius: '3px',
  color: 'white',
  fontSize: '14px',
  cursor: 'pointer'
})
