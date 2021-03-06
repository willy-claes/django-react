import 'whatwg-fetch'
import cookie from 'cookie'

const getCsrf = () => {
  const cookies = cookie.parse(document.cookie)
  return cookies.csrftoken
}

export const fetchGet = url => (
  fetch(`/api${url}`, {
    credentials: 'same-origin',
  })
)

export const fetchPost = (url, payload) => (
  fetch(`/api${url}`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': getCsrf(),
    },
    credentials: 'same-origin',
  })
)

export const fetchPut = (url, payload) => (
  fetch(`/api${url}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'same-origin',
  })
)

export const fetchDelete = url => (
  fetch(`/api${url}`, {
    method: 'DELETE',
    credentials: 'same-origin',
  })
)
