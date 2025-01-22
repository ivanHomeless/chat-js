export function first<T>(list: T[]): T | undefined {
    if (list.length > 0) {
        return list[0]
    }
    return undefined
    
}