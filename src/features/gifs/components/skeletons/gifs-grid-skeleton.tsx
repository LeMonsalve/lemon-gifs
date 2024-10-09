import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx'
import { Skeleton } from '@/components/ui/skeleton.tsx'

type Props = {
  category: string
}

export function GifsGridSkeleton({ category }: Props) {
  return (
      <Card className="border-transparent w-screen">
        <CardHeader>
          <CardTitle className="uppercase">
            {category} loading...
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {
            Array.from({ length: 9 }, (_, i) => i + 1).map((value) => (
                <Skeleton key={value} className="w-full h-80" />
            ))
          }
        </CardContent>
      </Card>
  )
}