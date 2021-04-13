import React from 'react'
import styled, { keyframes } from 'styled-components'

const spinnerBorder = keyframes`
  100% {
    transform: rotate(1turn);
  }
`
const Div = styled.div`
  display: inline-block;
  color: #4caf50;
  width: 4rem;
  height: 4rem;
  vertical-align: text-bottom;
  border: .25em solid;
  border-right: .25em solid transparent;
  border-radius: 50%;
  animation: ${spinnerBorder} .75s linear infinite;
`
const Span = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
  border: 0;
`
const Spinner = () => {
  return (
    <Div>
      <Span>Loading...</Span>
    </Div>
  )
}

export default Spinner
