import { useCallback, useState } from 'react'
import { AddCategory } from '@/features/categories/components'
import { toast } from 'sonner'
import { GifsGrid } from '@/features/gifs/components'
import { ArrowDownIcon, ArrowUpIcon, PartyPopperIcon, SparklesIcon } from 'lucide-react'
import {
  CategoryNavigationButton
} from '@/features/categories/components/buttons/category-navigation-button.tsx'
import { toCategoryCase } from '@/features/categories/utils.ts'
import {
  SearchCategoryNavigationButton
} from '@/features/categories/components/buttons/search-category-navigation-button.tsx'
import { useCategoriesNavigation } from '@/features/categories/hooks'
import { ModeToggle } from './features/themes/components/buttons/mode-toggle'

export function LeMonGifts() {
  const [categories, setCategories] = useState<string[]>([])
  const {
    downCategoryIndex,
    upCategoryIndex,
    nextCategory,
    resetCategoriesIndexes,
  } = useCategoriesNavigation({ categories })

  const onNewCategory = useCallback((category: string) => {
    if (categories.includes(category)){
      toast.error('Category already exists')
      return
    }

    setCategories([category, ...categories])
  }, [categories])

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
        {
          categories.length === 0 && (
                <div className="flex flex-col gap-4 items-center justify-center">
                  <div className="flex flex-col items-center text-white bg-black dark:text-black dark:bg-white px-8 py-6 rounded-full">
                    <p className="text-2xl font-bold text-center flex gap-2 items-center justify-center">
                      <PartyPopperIcon/>
                      No categories yet, start up
                      <SparklesIcon/>
                    </p>
                  </div>
                  <ModeToggle align="center" />
                </div>
            )
        }
      </section>

      {
          categories.length > 2 && (
              <section className="fixed flex flex-col gap-2 right-4 bottom-4">
                <SearchCategoryNavigationButton onClick={resetCategoriesIndexes}/>
                <CategoryNavigationButton icon={ArrowUpIcon} category={toCategoryCase(categories[upCategoryIndex])} onClick={() => nextCategory('up')}/>
            <CategoryNavigationButton icon={ArrowDownIcon} category={toCategoryCase(categories[downCategoryIndex])} onClick={() => nextCategory('down')}/>
          </section>
        )
      }
    </main>
  )
}

