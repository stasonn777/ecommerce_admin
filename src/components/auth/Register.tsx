import React, { ChangeEvent, useEffect } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Create, Input } from '../../styles'

const Register = (props: { history: string[] }) => {
  const { name, password, password2, email, error, isAuthenticated } = useTypedSelector(state => state.userAuth)
  const { setUserFields, registerUser, setAlert } = useActions()

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const data = { [e.target.name]: e.target.value }
    setUserFields(data)
  }
  const register = (e: { preventDefault: () => void }) => {
    if ( name === '' || password === '' || password2 === '' || email === '') { 
      setAlert('Fill in all fields', 'warning')
    } else if (password2 !== password){
      setAlert('Password do not match', 'warning')
    } else {
      registerUser({ name, email, password })
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
      <form onSubmit={register}>
        <Input type="text" name="name" placeholder="Username" value={name} onChange={onChange} />
        <Input type="text" name="email" placeholder="Email" value={email} onChange={onChange} />
        <Input type="password" name="password" placeholder="Password" value={password} onChange={onChange} minLength={6} />
        <Input type="password" name="password2" placeholder="Confirm Password" value={password2} onChange={onChange} />
        <Create type="submit">Register</Create>
      </form>
    </div>
  )
}

export default Register
