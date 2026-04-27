const axios = require('axios')

const getWeather = async (req,res) =>{
  try {
    const {city} = req.params
    const apiKey = process.env.OPENWEATHER_API_KEY

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          q: city,
          appid: apiKey,
          units: 'metric',
          lang: 'pt_br'    
        }
      }
    );

    const data = response.data
 
    res.json({
      city: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      feels_like: data.main.feels_like,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      icon: data.weather[0].icon
    })
  } catch (error) {
    if (error.response?.status===404) {
      return res.status(404).json({message: 'Cidade não encontrada'})
    } 
    res.status(500).json({message:'Erro ao buscar clima'})
  }
}

module.exports = {getWeather}