// Check if input string can be converted to a number, this function is passed to prompt validator
export default function (input: string): boolean | string {
    if (isPositiveInteger(input)) {
        return true;
    }
    return 'Please enter a number.';
}

function isPositiveInteger(str: string) {
    const num = Number(str);
    return Number.isInteger(num) && num > 0;
}
