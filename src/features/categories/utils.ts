export function toCategoryCase(category: string): string {
  return category.toLowerCase().split(' ').join('-')
}