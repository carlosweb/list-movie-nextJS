import { API_BASE, API_KEY } from '../../lib/tmdb'

export default async (req, res) => {
    let q = req.query.q

    const result = await fetch(`${process.env.API_BASE}/search/movie/?api_key=${process.env.API_KEY}&language=en-US&query=${q}`)
    const json = await result.json()

    res.status(200).json({
        list: json.results
    })
  }
  