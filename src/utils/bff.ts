/* eslint-disable @typescript-eslint/array-type */
import { isObject } from './is'

function transformKeys<T>(data: T, transformFn: (key: string) => string): T
function transformKeys<T>(data: Array<T>, transformFn: (key: string) => string): Array<T>
function transformKeys<T>(
  data: T | Array<T>,
  transformFn: (key: string) => string
) {
  if (Array.isArray(data)) {
    return data.map(item => transformKeys<T>(item, transformFn))
  }
  if (isObject(data)) {
    const entries = Object.entries(data)
    const transformedEntries = entries.map(([key, val]) => [
      transformFn(key),
      transformKeys(val, transformFn)
    ])
    return Object.fromEntries(transformedEntries)
  }
  return data
}

export function toCamelCase<T>(data: T): CamelCase<T>
export function toCamelCase<T>(data: Array<T>): Array<CamelCase<T>>
export function toCamelCase<T>(data: T | Array<T>) {
  return transformKeys(data, key => `${key.substring(0, 1).toLowerCase()}${key.substring(1)}`)
}

export function toPascalCase<T>(data: T): PascalCase<T>
export function toPascalCase<T>(data: Array<T>): Array<PascalCase<T>>
export function toPascalCase<T>(data: T | Array<T>) {
  return transformKeys(data, key => `${key.substring(0, 1).toUpperCase()}${key.substring(1)}`)
}

export type PascalCase<T> = {
  [P in keyof T as Capitalize<string & P>]:
  T[P] extends Array<infer N> ? Array<PascalCase<N>> :
    T[P] extends Record<string, unknown> ? PascalCase<T[P]> : T[P]
}

export type CamelCase<T> = {
  [P in keyof T as Uncapitalize<string & P>]:
  T[P] extends Array<infer N> ? Array<CamelCase<N>> :
    T[P] extends Record<string, unknown> ? CamelCase<T[P]> : T[P]
}
