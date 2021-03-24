import { API_BASE, API_KEY } from '../../../lib/tmdb'


export default async (req, res) => {
    const result = await fetch(`${API_BASE}/movie/${req.query.id}?api_key=${API_KEY}&language=en-US`)
    const json = await result.json()

    res.status(200).json({
        info: json
    })
  }
  