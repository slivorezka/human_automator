function translateUkrainianDate(text: string | undefined): string | undefined {
  const ukToEnDays: Record<string, string> = {
    Понеділок: 'Monday',
    Вівторок: 'Tuesday',
    Середа: 'Wednesday',
    Четвер: 'Thursday',
    'П’ятниця': 'Friday',
  }

  const ukToEnMonths: Record<string, string> = {
    січня: 'January',
    лютого: 'February',
    березня: 'March',
    квітня: 'April',
    травня: 'May',
    червня: 'June',
    липня: 'July',
    серпня: 'August',
    вересня: 'September',
    жовтня: 'October',
    листопада: 'November',
    грудня: 'December',
  }

  for (const [uk, en] of Object.entries(ukToEnDays)) {
    text = text?.replace(new RegExp(uk, 'i'), en)
  }

  for (const [uk, en] of Object.entries(ukToEnMonths)) {
    text = text?.replace(new RegExp(uk, 'i'), en)
  }

  return text?.replace('-го', '')
}

export const getDates = (): {
  startDate: Date | undefined
  endDate: Date | undefined
} => {
  const dates = document.querySelectorAll(
    '.g-main-header__date.gradebook-narrow__header-date.date.date--smaller'
  ) as unknown as HTMLElement[]

  const first = dates.length > 0 ? dates[0] : null
  const last = dates.length > 0 ? dates[dates.length - 1] : null

  const firstDate = translateUkrainianDate(
    first
      ?.getAttribute('data-awesome-tooltip')
      ?.replace(/^Урок:\s*|\s*,\s*\d{1,2}:\d{2}$/g, '')
      .trim()
  )

  const lastDate = translateUkrainianDate(
    last
      ?.getAttribute('data-awesome-tooltip')
      ?.replace(/^Урок:\s*|\s*,\s*\d{1,2}:\d{2}$/g, '')
      .trim()
  )

  const year = new Date().getFullYear()

  return {
    startDate: firstDate ? new Date(`${firstDate} ${year}`) : undefined,
    endDate: lastDate ? new Date(`${lastDate} ${year}`) : undefined,
  }
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

export const getClassId = (): number => {
  try {
    const classId = new URL(document.location.href).pathname.split('/').filter(Boolean).pop()

    return classId ? Number(classId) : 0
  } catch {
    return 0
  }
}

export const getClassLabel = (): string =>
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

export const students = (): string[] => {
  return getRows().map((row) => studentName(row))
}

export const fillPercent = (students?: string[]): number => {
  const filedCells = []
  const emptyCells = []

  if (students && students.length > 0) {
    for (const row of getRows()) {
      if (students.find((student) => student === studentName(row))) {
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
