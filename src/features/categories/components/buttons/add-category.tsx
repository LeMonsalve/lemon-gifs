import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { Input } from '@/components/ui/input.tsx'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { SearchIcon, XIcon } from 'lucide-react'

type Props = {
  onNewCategory: (category: string) => void
}

export function AddCategory({ onNewCategory }: Props) {
  const [category, setCategory] = useState<string>('')

  const onInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value)
  }, [])

  const onFormSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (category.trim().length <= 1) {
      toast.error('Category name is too short')
      return
    }

    setCategory('')
    onNewCategory(category.trim().toLowerCase())
  }, [category, onNewCategory])

  return (
      <form onSubmit={onFormSubmit} className="relative w-full max-w-md">
        <div className="relative">
          <SearchIcon className="absolute left-6 top-1/2 size-6 -translate-y-1/2 text-muted-foreground pointer-events-none"/>
          <Input
              type="text"
              placeholder="Search Gifs..."
              value={category}
              onChange={onInputChange}
              className="px-16 py-10 text-lg font-semibold rounded-full"
              id="search-category-input"
          />
          {category && (
              <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-6 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full"
                  onClick={() => setCategory('')}
              >
                <XIcon className="size-6"/>
                <span className="sr-only">Clear search</span>
              </Button>
          )}
        </div>
        <Button type="submit" className="sr-only">
          Search
        </Button>
      </form>
  )
}