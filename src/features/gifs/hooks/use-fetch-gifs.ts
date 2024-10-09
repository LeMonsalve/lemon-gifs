import { useEffect, useState } from 'react'
import { getGifs, Gif } from '@/features/gifs/api'

export function useFetchGifs(category: string) {
  const [gifs, setGifs] = useState<Gif[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    getGifs(category).then(setGifs)
    setIsLoading(false)
  }, [category])

  return { gifs, isLoading }
}