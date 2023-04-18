// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameInputRef = React.useRef()
  const [error, setError] = React.useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    console.dir(e.target)
    const value = usernameInputRef.current.value
    onSubmitUsername(value)
  }

  function onChange(e) {
    const {value} = e.target
    const isLowerCase = value === value.toLowerCase()
    setError(isLowerCase ? null : 'Username must be lower case.')
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
        />
      </div>
      <div style={{color: 'red'}}>{error}</div>
      <button disabled={Boolean(error)} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
