import { TIMING } from '../constants/config'
import useAppStore from '../stores/useAppStore'
import { getRandomInt } from '../utils/gradebook'
import { cellRemoveSelected } from '../utils/gradebook'

const useProcessing = () => {
  const processItem = async ({
    cell,
    minRating,
    maxRating,
    remove,
  }: {
    cell: HTMLElement
    minRating?: number
    maxRating?: number
    remove?: boolean
  }): Promise<void> => {
    const appStore = useAppStore.getState()

    return new Promise<void>((resolve) => {
      setTimeout(() => {
        if (!appStore.isProcessing) {
          resolve()
          return
        }

        cellRemoveSelected(false, cell)

        cell.click()
        cell.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest',
        })

        setTimeout(() => {
          if (!appStore.isProcessing) {
            resolve()
            return
          }

          const inputMarkGroup = document.querySelector(
            '.mark-group__input-container input.mark-group__input'
          ) as HTMLInputElement

          if (minRating && maxRating) {
            inputMarkGroup.value = String(getRandomInt(minRating, maxRating))
          }

          if (remove) {
            inputMarkGroup.value = ''
          }

          inputMarkGroup.dispatchEvent(new Event('input', { bubbles: true }))

          setTimeout(() => {
            if (!appStore.isProcessing) {
              resolve()
              return
            }

            const approve = document.querySelector(
              '.mark-group .mark-buttons button .clickable'
            ) as HTMLElement

            if (approve) {
              approve.click()
            }

            resolve()
          }, TIMING.APPROVAL_DELAY)
        }, TIMING.INNER_TIMEOUT)
      }, TIMING.OUTER_TIMEOUT)
    })
  }

  return { processItem }
}

export default useProcessing
