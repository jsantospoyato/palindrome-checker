/**
 * Indicates if the passed string is a palindrome
 * @param {*} str 
 * @returns 
 */
function palindrome(str) {
    // We get the string with only alphanumeric chars and without spacing or undercase
    let simp = str
        .toLowerCase()
        .replace(/[^0-9a-z]/gi, '');

    // If the resulting string length is odd
    const len = simp.length;
    simp = evenize(simp);

    // With a string of an even length, we compare each pair of chars
    for (var i = 0; i < len / 2; i++) if (simp[i] != simp[len - 1 - i]) return false;

    // If none of the pairs was different, that means we got a palindrome
    return true;
}

/**
 * Return an even string, transforming it if necessary
 */
function evenize(simp){
    if (len % 2 != 0) {
        // We obtain the new string without the middle char i.e. ('y' in eye doesn't have pair)
        simp = simp
            .substring(0, len / 2)
            .concat(simp.substring(len / 2 + 1, len));

        // It loses 1 char length
        len--;
    }

    return simp;
}

// Execution examples with non-palindrome and palindrome
palindromeChecker("hello");
palindromeChecker("ey e");