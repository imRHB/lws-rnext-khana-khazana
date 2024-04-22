export function convertToURLString(str) {
    return str.toLowerCase().replace(/\s+/g, "-");
}

export function retrieveOriginalString(urlString) {
    let stringWithSpaces = urlString.replace(/-/g, " ");

    return stringWithSpaces.replace(/\b\w/g, function (char) {
        return char.toUpperCase();
    });
}
