import { Button } from '@/components/ui/button.tsx'
import { useCallback } from 'react'
import { SearchIcon } from 'lucide-react'

type Props = {
  onClick: () => void
}

export function SearchCategoryNavigationButton({ onClick }: Props) {
  const onButtonClick = useCallback(() => {
    const input = document.getElementById('search-category-input') as HTMLInputElement
    input.focus()
    onClick()
  }, [onClick])

  return (
    <Button size="icon" onClick={onButtonClick}>
      <SearchIcon size={24} />
    </Button>
  )
}