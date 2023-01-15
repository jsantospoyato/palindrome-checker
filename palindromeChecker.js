function palindrome(str) {
    // We get the string with only alphanumeric chars and without spacing or undercase
    var simp = str
        .toLowerCase()
        .replace(/[^0-9a-z]/gi, '');

    // If the resulting string length is odd
    var len = simp.length;
    if (len % 2 != 0) {
        // We obtain the new string without the middle char i.e. ('y' in eye doesn't have pair)
        simp = simp
            .substring(0, len / 2)
            .concat(simp.substring(len / 2 + 1, len));

        // It loses 1 char length
        len--;
    }

    // With a string of an even length, we compare each pair of chars
    for (var i = 0; i < len / 2; i++) {
        // Assuming is a palindrome until proven false
        if (simp[i] != simp[len - 1 - i]) return false;
    }

    // If none of the pairs was different, that means we got a palindrome
    return true;
}