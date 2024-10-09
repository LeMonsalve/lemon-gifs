import { LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button.tsx'
import { useCallback } from 'react'

type Props = {
  icon: LucideIcon
  category: string
  onClick: () => void
}

export function CategoryNavigationButton({ icon: Icon, category, onClick }: Props) {
  const onButtonClick = useCallback(() => {
    const element = document.getElementById(category) as HTMLDivElement

    if (!element) return

    element.scrollIntoView({ behavior: 'smooth' })

    onClick()
  }, [category, onClick])

  return (
    <Button size="icon" onClick={onButtonClick}>
      <Icon size={24} />
    </Button>
  )
}