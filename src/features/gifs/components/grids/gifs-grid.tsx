import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx'
import { GifItemCard } from '@/features/gifs/components/card/gif-item-card.tsx'
import { useFetchGifs } from '@/features/gifs/hooks'
import { GifsGridSkeleton } from '@/features/gifs/components/skeletons/gifs-grid-skeleton.tsx'
import { toCategoryCase } from '@/features/categories/utils.ts'

type Props = {
  category: string
}

export function GifsGrid({ category }: Props) {
  const { gifs, isLoading } = useFetchGifs(category)
  const cardId = toCategoryCase(category)

  return (
    <>
      {
        isLoading ? (<GifsGridSkeleton category={category} />) : (
            <Card className="border-transparent" id={cardId}>
              <CardHeader>
                <CardTitle className="uppercase">
                  {category}
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {
                  gifs.map((gif) => (
                      <GifItemCard gif={gif} key={gif.id}/>
                  ))
                }
              </CardContent>
            </Card>
        )
      }
    </>
  )
}

