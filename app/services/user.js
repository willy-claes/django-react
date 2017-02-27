import { fetchPost } from './helpers'

export const loginUser = (username, password) => (
  new Promise((resolve, reject) => {
    fetchPost('/auth/login/', {
      username,
      password,
    }).then((response) => {
      if (response.status !== 200) {
        response.json().then((json) => {
          let message = json.message
          if (Array.isArray(message)) {
            message = message.join()
          }
          reject(message)
        })
      } else {
        response.json().then((user) => {
          resolve(user)
        })
      }
    })
  })
)

export const logoutUser = () => (
  new Promise((resolve) => {
    fetchPost('/auth/logout/').then(() => {
      resolve()
    })
  })
)
