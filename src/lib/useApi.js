import axios from 'axios'

export const idPortenRequest = async (method, endpoint, body) => {
  const headers = {

  }
  const res = await axios[method](`${import.meta.env.VITE_SELVBETJENING_URI}/${endpoint}`, body, { headers })
  return { status: res.status, data: res.data }
}



// Get chucky
export const getChuck = async () => {
  const res = (await axios.get('https://api.chucknorris.io/jokes/categories')).data
  return res.map(ele => {
    return {
      value: ele,
      category: 'Et valg'
    }
  })
}
