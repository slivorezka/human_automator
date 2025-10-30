import Papa from 'papaparse'
import * as XLSX from 'xlsx'

import type { SelectOption, StudentList } from '@/types'
import type {ParsedRow} from "../types";

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
  if (studentLists.length === 0) return []

  return [...studentLists]
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((studentList) => ({
      value: studentList.uuid,
      label: studentList.name,
    }))
}

export const chunkArray = <T>(arr: T[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  )

export async function parseBrowserFile(file: File): Promise<ParsedRow> {
  const ext = file.name.toLowerCase().split('.').pop()

  if (ext === 'csv') {
    return new Promise((resolve, reject) => {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        dynamicTyping: false,
        complete: (res) => resolve(res.data as ParsedRow),
        error: reject,
      })
    })
  }

  if (ext === 'xlsx' || ext === 'xls') {
    const buf = await file.arrayBuffer()
    const wb = XLSX.read(buf, { type: 'array' })
    const firstSheet = wb.SheetNames[0]
    const ws = wb.Sheets[firstSheet]
    return XLSX.utils.sheet_to_json(ws, { defval: '' }) as ParsedRow
  }

  throw new Error('Unsupported file type')
}
