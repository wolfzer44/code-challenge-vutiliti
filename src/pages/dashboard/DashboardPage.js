import React, { useState, useEffect } from "react"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { useHistory } from "react-router-dom"
import { randomAll, randomCreate } from "../../services/api"
import { Form, Input } from "ninti"

import "./styles.scss"
toast.configure()

export default function DashboardPage() {
  const history = useHistory()
  const [randoms, setRandoms] = useState([])

  useEffect(() => {
    async function fetchRandoms() {
      const response = await randomAll()
      setRandoms(response.data)
    }

    fetchRandoms()
  }, [])

  function logout() {
    delete localStorage.token
    delete localStorage.isAuthenticated
    delete localStorage.user_id
    history.push("/login")
  }

  async function handleCreateTime(data) {
    try {
      const response = await randomCreate(data)

      toast.success(response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true
      })
    } catch (err) {
      toast.error("Something went wrong!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true
      })
    }
  }

  return (
    <div className="DashboardPage">
      <div className="header">
        <span>Vutiliti Code Challenge</span>
        <div className="logout">
          <button onClick={() => logout()}>logout</button>
        </div>
      </div>

      <div className="container">
        <div className="create-timer-container">
          <h1>Create timer</h1>
          <Form onSubmit={handleCreateTime} reset={true}>
            <span>Start:</span>
            <Input name="start" type="datetime-local" />
            <span>End:</span>
            <Input name="end" type="datetime-local" />
            <button>create timer</button>
          </Form>
        </div>
        <div className="list-randoms">
          <h1>Randoms</h1>
          <div className="list-randoms__list">
            {randoms?.map(item => (
              <div className="list__item" key={item.id}>
                <div className="list__item-average">
                  <span>{parseInt(item.average) | "-"}</span>
                </div>
                <div className="list__item-description">average</div>
                <div className="list__item-id">
                  <span>ID: {item.id}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
