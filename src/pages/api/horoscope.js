import axios from 'axios';

export default async function handler(req, res) {
  const { sign, day } = req.query;

  try {
    let url = '';
    let params = {};

    if (day === 'TODAY' || day === 'TOMORROW') {
      url = 'https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily';
      params = { sign, day };
    } else if (day === 'WEEK') {
      url = 'https://horoscope-app-api.vercel.app/api/v1/get-horoscope/weekly';
      params = { sign };
    } else if (day === 'MONTH') {
      url = 'https://horoscope-app-api.vercel.app/api/v1/get-horoscope/monthly';
      params = { sign };
    } else {
      return res.status(400).json({ error: 'Invalid day parameter' });
    }

    const response = await axios.get(url, { params });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching horoscope:', error);
    res.status(error.response?.status || 500).json({
      error: error.message,
    });
  }
}
