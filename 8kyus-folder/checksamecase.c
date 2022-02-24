// Check same case

// Write a function that will check if two given characters are the same case.

// If any of characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters and not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1

FUNDAMENTALS

int same_case(char a, char b)
{
    if (a >= 65 && a <= 90 && b >= 65 && b <= 90)
        return 1;
    else if (a >= 97 && a <= 122 && b >= 97 && b <= 122)
        return 1;
    else if (a >= 65 && a <= 90 && b >= 97 && b <= 122)
        return 0;
    else if (b >= 65 && b <= 90 && a >= 97 && a <= 122)
        return 0;
    else
        return -1;
}