/* eslint-disable @typescript-eslint/ban-types */
export const isObject = (data: unknown): data is Object => {
  return data !== null && Object.getPrototypeOf(data).constructor.name === 'Object'
}

export const isWindow = (element: Window | HTMLElement): element is Window => {
  return 'location' in element
}