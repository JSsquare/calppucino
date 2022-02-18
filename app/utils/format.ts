export const capitalizeFirstLetter = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

export const pluralize = (count: number, noun: string) => {
    return `${count} ${noun}${count !== 1 ? 's' : ''}`;
}