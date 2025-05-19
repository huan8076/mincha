/**
 * 定義單一步驟的介面
 */
export interface Step {
  id: number
  step: string
  description: string
  image: string
}

/**
 * 定義章節的介面
 */
export interface Chapter {
  id: number
  chapter: string
  stepList: Step[]
}

/**
 * 定義課程的介面
 */
export interface Course {
  id: number
  course: string
  description: string
  courseNote: string
  completed: boolean
  image: string
  chapterList?: Chapter[] // chapterList 是可選的，因為部分課程可能沒有章節
}