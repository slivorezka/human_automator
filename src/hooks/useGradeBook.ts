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
          for (const cell of [...row.querySelectorAll('.gradebook-narrow__cell.smart-cell')]) {
            if (
              cell.querySelector('.gradebook__ng-universal-rating-comments') &&
              !cell.querySelector('.pseudo-button--color-red') &&
              (cell.querySelector('.badge__item--no-border') as HTMLElement)?.innerText.trim()
            ) {
              filedCells.push(cell)
            }

            if (
              cell.querySelector('.gradebook__ng-universal-rating-comments') &&
              !cell.querySelector('.pseudo-button--color-red') &&
              !(cell.querySelector('.badge__item--no-border') as HTMLElement)?.innerText.trim()
            ) {
              emptyCells.push(cell)
            }
          }
        }
      }
    } else {
      for (const cell of cells) {
        if (
          cell.querySelector('.gradebook__ng-universal-rating-comments') &&
          !cell.querySelector('.pseudo-button--color-red') &&
          cell.querySelector('.badge__item--no-border')
        ) {
          filedCells.push(cell)
        }

        if (
          cell.querySelector('.gradebook__ng-universal-rating-comments') &&
          !cell.querySelector('.pseudo-button--color-red') &&
          !(cell.querySelector('.badge__item--no-border') as HTMLElement)?.innerText.trim()
        ) {
          emptyCells.push(cell)
        }
      }
    }

    return Math.round((filedCells.length / (filedCells.length + emptyCells.length)) * 100)
  }

  return { rows, cells, studentName, students, fillPercent }
}

export default useGradeBook
