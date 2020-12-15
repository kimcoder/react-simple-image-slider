import _get from 'lodash/get'

export function getValue(obj: Record<string, unknown>, path: string):string {
  const value = _get(obj, path)
  if (typeof value === 'string') return value
  return ''
}
