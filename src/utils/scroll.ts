import { isWindow } from './is'
import { CallbackFunctionType } from '@/types/index'
/**
   * 下滑滾動載入事件，此為 Promise Function，回傳一個物件，物件內有 removeEventListener 方法，可用來移除監聽事件
   * @param element 要監聽滾動的元素
   * @param callback 滾動條件達成時觸發的事件
   * @param distancePx 距離底部多少px時觸發。預設 20px
   * @param needCheckNoShowScroll 是否需要再初始化時確認內容長度是否不足以產生滾動條，若不足則直接觸發 callback。預設 true
*/
export const handleScroll = async (
  element: Window | HTMLElement,
  callback: CallbackFunctionType<void>,
  distancePx = 20,
  needCheckNoShowScroll = true
) => {
  const runAsyncCallBack = async () => {
    await callback()
  }

  const getScrollData = () => {
    const scrollTop = isWindow(element) ? document.documentElement.scrollTop : element.scrollTop
    const clientHeight = isWindow(element) ? document.documentElement.clientHeight : element.clientHeight
    const scrollHeight = isWindow(element) ? document.documentElement.scrollHeight : element.scrollHeight
    return { scrollTop, clientHeight, scrollHeight }
  }

  const onScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = getScrollData()
    const endTop = scrollHeight - clientHeight
    if (scrollTop >= endTop - distancePx) {
      void runAsyncCallBack()
    }
  }

  if (needCheckNoShowScroll) {
    let cacheScrollHeight = 0
    const checkNoShowScroll = async () => {
      const { clientHeight, scrollHeight } = getScrollData()
      if (cacheScrollHeight === scrollHeight) return
      if (clientHeight >= scrollHeight) {
        await runAsyncCallBack()
        cacheScrollHeight = scrollHeight
        await checkNoShowScroll()
      }
    }

    setTimeout(() => {
      void checkNoShowScroll()
    }, 100)
  }

  element.addEventListener('scroll', onScroll)

  return {
    removeEventListener: () => element.removeEventListener('scroll', onScroll)
  }
}