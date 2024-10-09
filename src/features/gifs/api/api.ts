import axios from 'axios'
import { Gif, GiphyResponse } from '@/features/gifs/api/types.ts'

export const gifsApi = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  params: {
    api_key: import.meta.env.VITE_GIPHY_API_KEY,
    limit: 10,
  }
})

export const getGifs = async (category: string) => {
  const { data: { data } } = await gifsApi.get<GiphyResponse>('/search', {
    params: {
      q: category
    }
  })

  const gifs: Gif[] = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url
  }))

  return gifs
}