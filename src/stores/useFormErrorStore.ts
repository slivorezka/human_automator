import { create } from 'zustand'

const useFormErrorStore = create<{
  ratingError: string
  percentError: string
  nameError: string
  setPercentError: (error: string) => void
  setRatingError: (error: string) => void
  setNameError: (error: string) => void
}>((set) => ({
  ratingError: '',
  percentError: '',
  nameError: '',
  setPercentError: (error) => set({ percentError: error }),
  setRatingError: (error) => set({ ratingError: error }),
  setNameError: (error) => set({ nameError: error }),
}))

export default useFormErrorStore
