export function setUserData(user: string, keyNote: string): void {
    localStorage.setItem(keyNote, JSON.stringify(user));
  }
