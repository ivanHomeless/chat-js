export const get = function <T, K>(obj: unknown, path: string, defaultValue: K): T | K {
  const keys = path.split('.')

  return keys.reduce((result: unknown, key: string) => {
    // Проверяем, что result является объектом (и не null)
    if (result && typeof result === 'object' && result !== null) {
      return (result as Record<string, unknown>)[key]
    }
    return defaultValue
  }, obj) as T | K // Не забываем кастить результат после работы с reduce
}
