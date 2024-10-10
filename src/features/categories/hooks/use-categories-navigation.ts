import { useCallback, useEffect, useState } from 'react'

type Props = {
  categories: string[]
}

export function useCategoriesNavigation({ categories }: Props) {
  const [upCategoryIndex, setUpCategoryIndex] = useState<number>(0)
  const [downCategoryIndex, setDownCategoryIndex] = useState<number>(categories.length - 1)

  useEffect(() => {
    if (categories.length < 2) return

    setUpCategoryIndex(0)
    setDownCategoryIndex(1)
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

  const resetCategoriesIndexes = useCallback(() => {
    setUpCategoryIndex(0)
    setDownCategoryIndex(1)
  }, [])

  return {
    upCategoryIndex,
    downCategoryIndex,
    nextCategory,
    resetCategoriesIndexes
  }
}