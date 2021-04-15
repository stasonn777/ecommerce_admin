import React, { useEffect } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Create, Input } from '../../styles'

const Login = (props: { history: string[] }) => {
  const { email, password, isAuthenticated, error } = useTypedSelector(state => state.userAuth)
  const {setUserFields, loginUser, setAlert} = useActions()

  const onChange = (e: { target: { name: string; value: string } }) => {
    const data = {[e.target.name]: e.target.value}
    setUserFields(data)
  }
  const login = (e: { preventDefault: () => void }) => {
    if ( password === '' || email === '') { 
      setAlert('Fill in all fields', 'warning')
    } else {
      loginUser({ email, password })
    }
    e.preventDefault()
  }

  useEffect(() => {
    if(isAuthenticated) { 
      props.history.push('/')
    }

    if (error !== null) {
      setAlert(error, 'warning')
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history])

  return (
    <div>
      <h1>User Login</h1>
      <form onSubmit={login}>
        <Input type="text" name="email" placeholder="Email" value={email} onChange={onChange} required />
        <Input type="password" name="password" placeholder="Password" value={password} onChange={onChange} required minLength={6} />
        <Create type="submit">Log In</Create>
      </form>
    </div>
  )
}

export default Login