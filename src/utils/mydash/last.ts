export function last<T>(list: T[]): T | undefined {
  // Проверяем, что переданный аргумент является массивом и не пуст
  if (list.length > 0) {
    return list[list.length - 1]
  }

  // Если аргумент не массив или массив пустой, возвращаем undefined
  return undefined
}
