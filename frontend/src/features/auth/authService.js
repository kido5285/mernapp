import axios from 'axios'

const API_URL = `https://mernapp112.herokuapp.com/api/users/`

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const login = async (userData) => {
  const res = await axios.post(API_URL + 'login', userData)
  console.log(res)
  if (res.data) {
    localStorage.setItem('user', JSON.stringify(res.data))
  }

  return res;
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
}

export default authService
