import axios from 'axios'

const API_URL = 'http://152.228.137.213:4001'

// Register user
const getCategories = async (userData) => {
  const response = await axios.post ('http://152.228.137.213:4001/data/query-entities', {
    "entityType": "offerCategory"
})
  if (response.data) {
    // localStorage.setItem('userMail', JSON.stringify(response.data.user.email))
    // localStorage.setItem('userName', JSON.stringify(response.data.user.name))
    // localStorage.setItem('userId', JSON.stringify(response.data.useur.userId))
  console.log(response.data);
    
  }
  return response.data
}


const categoryService = {
  getCategories,


}

export default categoryService
