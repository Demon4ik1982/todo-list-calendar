export function stringСonversion(str:string) {
    let lowStr = str.toLowerCase();
    const firstLetter = lowStr.charAt(0).toUpperCase();
    lowStr = lowStr.slice(1);
    const newStr = firstLetter + lowStr;
    return newStr;
    }