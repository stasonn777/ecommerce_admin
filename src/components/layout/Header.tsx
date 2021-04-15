import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Edit, Remove } from '../../styles'

const Div = styled.div`
  background: #242e3e;
  padding: 10px;
  border-bottom: 0.5px solid #181924;
  display: flex;
  justify-content: space-between;
`
const H1 = styled.h1`
  color: #fff;
  font-size: 24px;
`
const Span = styled.span`
  color: #fff;
  font-size: 16px;
`
const Header = () => {
  const { user, isAuthenticated } = useTypedSelector(state => state.userAuth)
  const { logoutUser } = useActions()
  const logout = () => {
    logoutUser()
  }

  const authLinks = (
    <>
      <H1>Shop admin panel</H1>
      <Span>Hello { user && user.name}</Span>
      <Remove onClick={logout}>Logout</Remove>
    </>
  )
  const gustLinks = (
    <>
      <NavLink to='/register'><Edit>Register</Edit></NavLink>
      <NavLink to='/login'><Edit>Login</Edit></NavLink>
    </>
  )

  return (
    <Div>
      {isAuthenticated ? authLinks : gustLinks}
    </Div>
  )
}

export default Header
