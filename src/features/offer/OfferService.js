import axios from 'axios'
const API_URL = 'http://152.228.137.213:4001/market'

const getOffers = async () => {
  const response = await axios.post(`${API_URL}/search`)
  return response.data
}
const getOffer = async (offerId) => {
  const response = await axios.get(`${API_URL}/get-offer/${offerId}`)
  return response.data
}

const createOffer = async () => {
  axios.defaults.headers.common['X-Auth-Token'] = `${JSON.parse(
    localStorage.getItem('userToken'),
  )}`
  const response = await axios.post(`${API_URL}/create-offer`)
  return response.data
}

const offerService = {
  getOffers,
  getOffer,
  createOffer,
}

export default offerService
