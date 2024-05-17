def shift_characters(input_string, key):
    shifted_string = []

    for char in input_string:
        if char.isalpha():
            # Determine the base (ord('A') for uppercase, ord('a') for lowercase)
            base = ord('A') if char.isupper() else ord('a')

            # Shift the character and wrap around the alphabet using modulo
            shifted_char = chr((ord(char) - base + key) % 26 + base)

            shifted_string.append(shifted_char)
        else:
            # If the character is not alphabetic, keep it unchanged
            shifted_string.append(char)

    return ''.join(shifted_string)


if __name__ == '__main__':
    input_string = input('\nEnter Message: ')
    key = int(input('\nEnter Key to Shift Character: '))
    result = shift_characters(input_string, key)
    print(result)
