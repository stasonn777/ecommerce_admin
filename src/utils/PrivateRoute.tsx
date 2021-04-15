import React from 'react'
import {Route, Redirect } from "react-router-dom";
import { useTypedSelector } from '../hooks/useTypedSelector'

const PrivateRoute = ({component: Component, ...rest}: any) => {

  const {isAuthenticated, loading} = useTypedSelector(state => state.userAuth)


  return (
    <Route {...rest} render={props => !isAuthenticated && !loading ? (
      <Redirect to='/login' />
    ) : (
      <Component {...props} />
    )} />
  )
}

export default PrivateRoute
