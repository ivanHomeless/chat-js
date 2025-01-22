export function isEmpty(value?: unknown): boolean {
  // Проверка на null, undefined, boolean, number
  if (value === null || value === undefined || typeof value === 'boolean' || typeof value === 'number') {
    return true
  }

  // Проверка на пустую строку
  if (typeof value === 'string' && value === '') {
    return true
  }

  // Проверка на массив
  if (Array.isArray(value) && value.length === 0) {
    return true
  }

  // Проверка на Map или Set
  if ((value instanceof Map || value instanceof Set) && value.size === 0) {
    return true
  }

  // Проверка на объект (остались только обычные объекты)
  if (typeof value === 'object' && Object.keys(value).length === 0) {
    return true
  }

  // Если ничего из выше перечисленного не сработало, то не пусто
  return false
}
