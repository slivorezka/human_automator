import type { SelectOption, StudentList } from '@/types'

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const shuffleArray = <T>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }

  return array
}

export const beep = () => {
  const audioCtx = new window.AudioContext()
  const oscillator = audioCtx.createOscillator()

  oscillator.type = 'sine'
  oscillator.frequency.setValueAtTime(600, audioCtx.currentTime)
  oscillator.connect(audioCtx.destination)
  oscillator.start()
  oscillator.stop(audioCtx.currentTime + 0.2)
}

export const getSelectOption = (items: string[]): SelectOption[] => {
  return items
    .slice()
    .sort((a, b) => a.localeCompare(b))
    .map((item) => ({
      value: item,
      label: item,
    }))
}

export const getSelectListOption = (studentLists: StudentList[]): SelectOption[] => {
  return studentLists
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((studentList) => ({
      value: studentList.id,
      label: studentList.name,
    }))
}
