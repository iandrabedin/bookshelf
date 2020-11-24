import React, {Fragment, useState} from 'react'
import ReactDOM from 'react-dom'
import VisuallyHidden from '@reach/visually-hidden'
import {Dialog} from '@reach/dialog'
import {Logo} from './components/logo'
import {LoginForm} from './components/loginForm'
import '@reach/dialog/styles.css'

const App = () => {
  const [showDialog, setShowDialog] = useState('none')

  function handleLogin(formData) {
    console.log('login', formData)
  }

  function handleRegister(formData) {
    console.log('register', formData)
  }

  return (
    <Fragment>
      <Logo />
      <h1>Bookshelf</h1>
      <button onClick={() => setShowDialog('login')}>Login</button>
      <button onClick={() => setShowDialog('register')}>Register</button>

      <Dialog
        aria-label="Login form"
        isOpen={showDialog === 'register'}
        onDismiss={() => setShowDialog('none')}
      >
        <button className="close-button" onClick={() => setShowDialog('none')}>
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>×</span>
        </button>
        <p>Register</p>
        <LoginForm onSubmit={handleLogin} buttonText="Login" />
      </Dialog>
      <Dialog
        aria-label="Registration form"
        isOpen={showDialog === 'login'}
        onDismiss={() => setShowDialog('none')}
      >
        <button className="close-button" onClick={() => setShowDialog('none')}>
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>×</span>
        </button>
        <p>Login</p>
        <LoginForm onSubmit={handleRegister} buttonText="Login" />
      </Dialog>
    </Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
