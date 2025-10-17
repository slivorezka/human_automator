import type { Student } from '../types'

const useGradeBook = () => {
  const rows: HTMLElement[] = [
    ...(document.querySelectorAll(
      '.gradebook-container__table2-outlet .gradebook-container__table2-row'
    ) as unknown as HTMLElement[]),
  ]

  const cells: HTMLElement[] = [
    ...(document.querySelectorAll(
      '.gradebook-container__table .gradebook-container__table2-row .gradebook-narrow__cell.smart-cell'
    ) as unknown as HTMLElement[]),
  ]

  const className: string = (
    document.querySelector('.group-switcher-title.label') as HTMLElement
  )?.innerText.trim()

  const cellRating = (cell: HTMLElement): HTMLElement | null => {
    return cell.querySelector('.badge__item--no-border')
  }

  const rating = (cell: HTMLElement): number | null => {
    const rating = cellRating(cell)?.innerText.trim()
    return rating ? Number(rating) : null
  }

  const ratingComment = (cell: HTMLElement): HTMLElement | null => {
    return cell.querySelector('.gradebook__ng-universal-rating-comments')
  }

  const cellAbsent = (cell: HTMLElement): HTMLElement | null => {
    return cell.querySelector('.pseudo-button--color-red')
  }

  const cellsNarrow = (row: HTMLElement): NodeListOf<HTMLElement> => {
    return row.querySelectorAll('.gradebook-narrow__cell.smart-cell')
  }

  const studentName = (row: HTMLElement): string => {
    return (row.querySelector('.bem-user__name') as HTMLElement).innerText.trim()
  }

  const students = (): Student[] => {
    const students: Student[] = []

    for (const row of rows) {
      const name = studentName(row)

      students.push({
        value: name,
        label: name,
      })
    }

    return students
  }

  const fillPercent = (students?: Student[]): number => {
    const filedCells = []
    const emptyCells = []

    if (students && students.length > 0) {
      for (const row of rows) {
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
      for (const cell of cells) {
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

  const toolPanel = (isHide: boolean): void => {
    const toolPanel = document.querySelector('.gradebook-page__tool-panel')

    if (isHide) {
      toolPanel?.classList.add('d-none')
    } else {
      toolPanel?.classList.remove('d-none')
    }
  }

  const cellRemoveSelected = (isRemove: boolean, cell?: HTMLElement): void => {
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

  return {
    rows,
    cells,
    cellsNarrow,
    cellAbsent,
    className,
    rating,
    ratingComment,
    studentName,
    students,
    fillPercent,
    toolPanel,
    cellRemoveSelected,
  }
}

export default useGradeBook
