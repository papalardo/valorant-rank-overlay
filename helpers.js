export const objIsEmpty = (obj) => {
    for(let i in obj) return false;
    return true;
}