import type { Student } from '../types'

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

export const getRows = (): HTMLElement[] => [
  ...(document.querySelectorAll(
    '.gradebook-container__table2-outlet .gradebook-container__table2-row'
  ) as unknown as HTMLElement[]),
]

export const getCells = (): HTMLElement[] => [
  ...(document.querySelectorAll(
    '.gradebook-container__table .gradebook-container__table2-row .gradebook-narrow__cell.smart-cell'
  ) as unknown as HTMLElement[]),
]

export const className = (): string =>
  (document.querySelector('.group-switcher-title.label') as HTMLElement)?.innerText.trim()

export const cellRating = (cell: HTMLElement): HTMLElement | null => {
  return cell.querySelector('.badge__item--no-border')
}

export const rating = (cell: HTMLElement): number | null => {
  const rating = cellRating(cell)?.innerText.trim()
  return rating ? Number(rating) : null
}

export const ratingComment = (cell: HTMLElement): HTMLElement | null => {
  return cell.querySelector('.gradebook__ng-universal-rating-comments')
}

export const cellAbsent = (cell: HTMLElement): HTMLElement | null => {
  return cell.querySelector('.pseudo-button--color-red')
}

export const cellsNarrow = (row: HTMLElement): NodeListOf<HTMLElement> => {
  return row.querySelectorAll('.gradebook-narrow__cell.smart-cell')
}

export const studentName = (row: HTMLElement): string => {
  return (row.querySelector('.bem-user__name') as HTMLElement).innerText.trim()
}

export const students = (): Student[] => {
  const students: Student[] = []

  for (const row of getRows()) {
    const name = studentName(row)

    students.push({
      value: name,
      label: name,
    })
  }

  return students
}

export const fillPercent = (students?: Student[]): number => {
  const filedCells = []
  const emptyCells = []

  if (students && students.length > 0) {
    for (const row of getRows()) {
      if (students.find((student) => student.value === studentName(row))) {
        for (const cell of [...cellsNarrow(row)]) {
          if (
            ratingComment(cell as HTMLElement) &&
            !cellAbsent(cell as HTMLElement) &&
            rating(cell as HTMLElement)
          ) {
            filedCells.push(cell)
          }

          if (
            ratingComment(cell as HTMLElement) &&
            !cellAbsent(cell as HTMLElement) &&
            !rating(cell as HTMLElement)
          ) {
            emptyCells.push(cell)
          }
        }
      }
    }
  } else {
    for (const cell of getCells()) {
      if (
        ratingComment(cell as HTMLElement) &&
        !cellAbsent(cell as HTMLElement) &&
        cellRating(cell as HTMLElement)
      ) {
        filedCells.push(cell)
      }

      if (
        ratingComment(cell as HTMLElement) &&
        !cellAbsent(cell as HTMLElement) &&
        !rating(cell as HTMLElement)
      ) {
        emptyCells.push(cell)
      }
    }
  }

  return Math.round((filedCells.length / (filedCells.length + emptyCells.length)) * 100)
}

export const toolPanel = (isHide: boolean): void => {
  const toolPanel = document.querySelector('.gradebook-page__tool-panel')

  if (isHide) {
    toolPanel?.classList.add('d-none')
  } else {
    toolPanel?.classList.remove('d-none')
  }
}

export const cellRemoveSelected = (isRemove: boolean, cell?: HTMLElement): void => {
  if (cell) {
    if (isRemove) {
      cell.classList.add('remove-smart-cell-selected')
    } else {
      cell.classList.remove('remove-smart-cell-selected')
    }
    return
  }

  const cells = document.querySelectorAll('.gradebook-narrow__cell.smart-cell')

  if (isRemove) {
    cells.forEach((cell) => {
      cell.classList.add('remove-smart-cell-selected')
    })
  } else {
    cells.forEach((cell) => {
      cell.classList.remove('remove-smart-cell-selected')
    })
  }
}
