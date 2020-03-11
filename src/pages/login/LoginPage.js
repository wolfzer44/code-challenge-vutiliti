import React from "react"

import "./styles.scss"

export default function LoginPage() {
  return (
    <div className="LoginPage">
      <div className="background"></div>
      <div className="form">
        <div className="login">
          <h1>Welcome</h1>
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button>Enter</button>
        </div>
      </div>
    </div>
  )
}
