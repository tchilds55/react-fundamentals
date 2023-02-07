// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameInputRef = React.useRef()
  const [userName, setUserName] = React.useState('')

  function handleSubmit(e) {
    e.preventDefault()
    console.dir(e.target)
    onSubmitUsername(userName)
  }

  function onChange(e) {
    const {value} = e.target
    setUserName(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userForm">Usernamey:</label>
        <input
          onChange={onChange}
          ref={usernameInputRef}
          id="userForm"
          type="text"
          value={userName}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
