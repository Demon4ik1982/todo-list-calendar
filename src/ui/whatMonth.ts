export function whatMonth(): string {
    const today = new Date();
    today.getMonth()

    if(today.getMonth() === 0) return 'Январь'
    if(today.getMonth() === 1) return 'Февраль'
    if(today.getMonth() === 2) return 'Март'
    if(today.getMonth() === 3) return 'Апрель'
    if(today.getMonth() === 4) return 'Май'
    if(today.getMonth() === 5) return 'Июнь'
    if(today.getMonth() === 6) return 'Июль'
    if(today.getMonth() === 7) return 'Август'
    if(today.getMonth() === 8) return 'Сентябрь'
    if(today.getMonth() === 9) return 'Октябрь'
    if(today.getMonth() === 10) return 'Ноябрь'
    if(today.getMonth() === 11) return 'Декабрь'
    return ''
}
