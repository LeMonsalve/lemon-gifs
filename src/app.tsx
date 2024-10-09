import { LeMonGifts } from '@/lemon-gifts.tsx'
import { ThemeProvider } from '@/features/themes/components'
import { Toaster } from '@/components/ui/sonner'

export function App() {
  return (
    <ThemeProvider>
      <LeMonGifts />
      <Toaster />
    </ThemeProvider>
  )
}
