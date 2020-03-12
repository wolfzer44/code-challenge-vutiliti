import axios from "axios"

export const api = axios.create({
  baseURL: "https://codechallenge-vutiliti-backend.herokuapp.com/",
  headers: {
    "content-type": "application/json",
    token: localStorage.token,
    userid: localStorage.user_id
  }
})

export const login = async data => {
  return await api.post("auth", data)
}

export const randomAll = async () => {
  return await api.get("random")
}

export const randomCreate = async data => {
  return await api.post("random", data)
}
