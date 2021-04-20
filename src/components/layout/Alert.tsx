import React from 'react'
import styled from 'styled-components'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const AlertWrapper = styled.div`
  background: #c05050;
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

  const { msg } = useTypedSelector(state => state.alert) // type

  return (
    msg !== null ?
      <AlertWrapper>
        <span>{msg}</span>
      </AlertWrapper>
      :
      <div></div>
  )
}

export default Alert
