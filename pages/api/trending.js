import { API_BASE, API_KEY } from '../../lib/tmdb'


export default async (req, res) => {
    const result = await fetch(`${API_BASE}/trending/movie/week?api_key=${API_KEY}&language=en-US`)
    const json = await result.json()

    res.status(200).json({
        list: json.results
    })
  }
  