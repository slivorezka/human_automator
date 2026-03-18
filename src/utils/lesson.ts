import type { HomeTaskDateOption } from '@/types'

export function getLessonHomeTaskLink(): HTMLAnchorElement | null {
  for (const link of document.querySelectorAll<HTMLAnchorElement>(
    '.mat-mdc-tab-list .mat-mdc-tab-links a'
  )) {
    if (link.textContent?.trim() === 'Завдання') {
      return link
    }
  }

  return null
}

export function getLessonHomeTaskExpireDate(): HTMLElement | null {
  return document.querySelector<HTMLElement>('.hometask-expire-date .hometask-expire-date_title')
}

export function getLessonHomeTaskExpireDateDropdown(
  homeTaskDateOption: HomeTaskDateOption
): HTMLElement | null {
  for (const button of document.querySelectorAll<HTMLElement>(
    'dropdown .custom-scrollbar.dropdown .button'
  )) {
    if (button.textContent?.trim() === homeTaskDateOption) {
      return button
    }
  }

  return null
}

export function getLessonHomeTaskNextLessonLink(): HTMLAnchorElement | null {
  for (const link of document.querySelectorAll<HTMLAnchorElement>(
    'button.button.event-strategy-1.clickable'
  )) {
    if (link.textContent?.trim() === 'Наступний урок  →') {
      return link
    }
  }

  return null
}
