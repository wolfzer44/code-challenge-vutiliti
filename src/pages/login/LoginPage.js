import React, { useState } from "react"
import { Form, Input } from "ninti"
import { login } from "../../services/api"
import { useHistory } from "react-router-dom"

import "./styles.scss"

export default function LoginPage() {
  const history = useHistory()
  const [loginError, setLoginError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(data) {
    try {
      const response = await login(data)
      localStorage.isAuthenticated = true
      localStorage.token = response.data.token
      localStorage.user_id = response.data.user_id
      history.push("/dashboard")
    } catch (err) {
      setLoginError(true)
      setTimeout(() => {
        setLoginError(false)
      }, 2000)
      setErrorMessage(err.response.data.message)
    }
  }

  return (
    <div className="LoginPage">
      <div className="background"></div>
      <div className="form">
        <div className="login">
          <h1>Welcome</h1>
          <Form onSubmit={handleSubmit} reset={true}>
            <Input name="username" type="text" placeholder="username" />
            <Input name="password" type="password" placeholder="password" />
            <button>Enter</button>
          </Form>

          {loginError ? (
            <div className="handle-error">{errorMessage}</div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  )
}
