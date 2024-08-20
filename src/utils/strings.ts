const containsValue = (inputString: string, searchValue: string): boolean => {
    const regex = new RegExp(searchValue, "i"); // "i" para ignorar maiúsculas e minúsculas
    return regex.test(inputString);
}

export {
    containsValue
}