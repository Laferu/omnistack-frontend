import axios from 'axios'

const api = axios.create({
  baseURL: 'https://omnistack-backend-laferu.herokuapp.com'
})

export default api