import { useEffect, useState, useRef } from 'react'
import { getRandomInt } from '../utils/gradebook'
import { TIMING } from '../constants/config'
import useGradeBook from './useGradeBook.ts'

const useProcessing = () => {
  const [isProcessing, setIsProcessing] = useState<boolean>(false)
  const isProcessingRef = useRef<boolean>(false)

  const { cellRemoveSelected } = useGradeBook()

  useEffect(() => {
    isProcessingRef.current = isProcessing
  }, [isProcessing])

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
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        if (!isProcessingRef.current) {
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
          if (!isProcessingRef.current) {
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
            if (!isProcessingRef.current) {
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

  return { isProcessing, setIsProcessing, processItem, isProcessingRef }
}

export default useProcessing
