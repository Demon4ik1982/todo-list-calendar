export function checkingTodo(data: string): boolean {
    const localData = localStorage.getItem(data)
    if (localData !== null && localData !== undefined) {
      if (JSON.parse(localData).length > 0) return true
    }
    return false
  }
