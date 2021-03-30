

export default async (req, res) => {
    const result = await fetch(`${process.env.API_BASE}/movie/${req.query.id}?api_key=${process.env.API_KEY}&language=en-US`)
    const json = await result.json()

    res.status(200).json({
        info: json
    })
  }
  