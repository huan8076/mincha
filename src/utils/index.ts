/**
   * 等待 sleepMs 毫秒
   * @param sleepMs 等待時間。預設 2000 毫秒
*/
export async function sleep(sleepMs = 2000) {
  return await new Promise<void>(resolve => setTimeout(() => { resolve() }, sleepMs))
}