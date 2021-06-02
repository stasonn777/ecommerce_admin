import React from 'react'
import styled from 'styled-components'
import { useTypedSelector } from '../../hooks/useTypedSelector'

interface Props { 
  background: string
}

const AlertWrapper = styled.div<Props>`
  background: ${(p) => p.background};
  padding: 30px;
  font-size: 18px;
  text-align: center;
  width: max-content;
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  color: white;
`
const Alert = () => {

  const { msg, type} = useTypedSelector(state => state.alert) // type

  return (
    msg !== null ?
      <AlertWrapper background={type === 'success' ? '#14c161' : '#c05050'}>
        <span>{msg}</span>
      </AlertWrapper>
      :
      <div></div>
  )
}

export default Alert
