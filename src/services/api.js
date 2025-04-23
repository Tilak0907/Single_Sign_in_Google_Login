import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:8080', // Spring Boot backend
})

export const addEventToCalendar = (event, token) =>
  API.post('/api/calendar/add', { event }, {
    headers: { Authorization: `Bearer ${token}` }
  })
