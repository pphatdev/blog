export default async function getImages(req, res) {
  try {
    const NAME = process.env.CLOUDINARY_NAME
    const API_KEY = process.env.CLOUDINARY_API_KEY
    const API_SECRET = process.env.CLOUDINARY_API_SECRET
    const data = await fetch(
      `https://${API_KEY + ':' + API_SECRET}@api.cloudinary.com/v1_1/${NAME}/resources/image`
    ).then((r) => r.json(r))
    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() })
  }
}
