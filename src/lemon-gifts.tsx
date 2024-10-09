import { useCallback, useEffect, useState } from 'react'
import { AddCategory } from '@/features/categories/components'
import { toast } from 'sonner'
import { GifsGrid } from '@/features/gifs/components'
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react'
import {
  CategoryNavigationButton
} from '@/features/categories/components/buttons/category-navigation-button.tsx'
import { toCategoryCase } from '@/features/categories/utils.ts'
import {
  SearchCategoryNavigationButton
} from '@/features/categories/components/buttons/search-category-navigation-button.tsx'

export function LeMonGifts() {
  const [categories, setCategories] = useState<string[]>([])

  const [upCategoryIndex, setUpCategoryIndex] = useState<number>(0)
  const [downCategoryIndex, setDownCategoryIndex] = useState<number>(categories.length - 1)

  useEffect(() => {
    if (categories.length < 2) return

    setUpCategoryIndex(0)
    setDownCategoryIndex(1)
  }, [categories])

  const onNewCategory = useCallback((category: string) => {
    if (categories.includes(category)){
      toast.error('Category already exists')
      return
    }

    setCategories([category, ...categories])
  }, [categories])

  const nextCategory = useCallback((type: 'up' | 'down') => {
    if (type === 'up') {
      if (upCategoryIndex === 0) return

      setUpCategoryIndex(upCategoryIndex - 1)
      setDownCategoryIndex(downCategoryIndex - 1)
    } else {
      if (downCategoryIndex === categories.length - 1) return

      setUpCategoryIndex(upCategoryIndex + 1)
      setDownCategoryIndex(downCategoryIndex + 1)
    }
  }, [categories.length, downCategoryIndex, upCategoryIndex])

  return (
    <main className="flex flex-col items-center h-screen px-4 md:px-0">
      <section className="flex flex-col items-center justify-center gap-10 mt-10 mb-14 py-10" id="search-category-section">
        <h1 className="text-8xl font-bold">LeMon Gifs</h1>

        <AddCategory onNewCategory={onNewCategory}/>
      </section>

      <section className="flex flex-col justify-center items-center gap-5">
        {categories.map((category) => (
            <GifsGrid category={category} key={category} />
        ))}
      </section>

      {
        categories.length > 2 && (
          <section className="fixed flex flex-col gap-2 right-4 bottom-4">
            <SearchCategoryNavigationButton />
            <CategoryNavigationButton icon={ArrowUpIcon} category={toCategoryCase(categories[upCategoryIndex])} onClick={() => nextCategory('up')}/>
            <CategoryNavigationButton icon={ArrowDownIcon} category={toCategoryCase(categories[downCategoryIndex])} onClick={() => nextCategory('down')}/>
          </section>
        )
      }
    </main>
  )
}

