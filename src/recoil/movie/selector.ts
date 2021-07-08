import { selector } from 'recoil'
import { apiClient } from '../../lib/apiClient'

interface Categories {
  id: number
  name: string
}

const getCategories = async (): Promise<Categories[]> => {
  const res = await apiClient.get('/categories')
  return res.data
}

export const categoriesSelector = selector<Categories[]>({
  key: 'categoriesSelector',
  get: async () => {
    try {
      const res = await getCategories()
      return res
    } catch (error) {
      throw new Error(error)
    }
  },
})
