import { Button } from '@/components/ui/button.tsx'
import { useCallback } from 'react'
import { SearchIcon } from 'lucide-react'

export function SearchCategoryNavigationButton() {
  const onButtonClick = useCallback(() => {
    const input = document.getElementById('search-category-input') as HTMLInputElement
    input.focus()
  }, [])

  return (
    <Button size="icon" onClick={onButtonClick}>
      <SearchIcon size={24} />
    </Button>
  )
}