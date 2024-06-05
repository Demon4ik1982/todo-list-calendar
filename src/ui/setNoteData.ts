export function setNoteData(arr: object, keyNote: string): void {
    localStorage.setItem(keyNote, JSON.stringify(arr));
  }