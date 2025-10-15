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

  return {
    rows,
    cells,
    cellsNarrow,
    cellAbsent,
    rating,
    ratingComment,
    studentName,
    students,
    fillPercent,
  }
}

export default useGradeBook
