import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card.tsx'
import { Gif } from '@/features/gifs/api'

type Props = {
  gif: Gif
}

export function GifItemCard({ gif }: Props) {
  return (
      <Card className="w-auto h-min ">
        <CardHeader></CardHeader>
        <CardContent className="flex items-center justify-center">
          <div className="flex items-center justify-center w-auto h-auto">
            <img
                src={gif.url}
                alt={gif.title}
                key={gif.id}
                className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </CardContent>
        <CardFooter>
          <CardDescription>
            {gif.title}
          </CardDescription>
        </CardFooter>
      </Card>
  )
}
