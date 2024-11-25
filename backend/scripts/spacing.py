import string


# Helper function to convert a number to a string like a=1, b=2, ... z=26, aa=27, ab=28, etc.
def number_to_alpha(n):
    result = []
    while n > 0:
        n -= 1
        result.append(string.ascii_lowercase[n % 26])
        n //= 26
    return ''.join(result[::-1])


# Helper function to convert an alpha string back to a number
def alpha_to_number(s):
    result = 0
    for char in s:
        result = result * 26 + (ord(char) - ord('a') + 1)
    return result


# Encrypt the string
def encrypt_string(input_string):
    space_positions = []
    # Find the positions of spaces
    for i, char in enumerate(input_string):
        if char == ' ':
            space_positions.append(i)

    # Remove spaces from the original string
    encrypted_string = input_string.replace(' ', '')

    # Convert space positions to corresponding alphabetical representations
    space_representation = ''.join([number_to_alpha(pos + 1) for pos in space_positions])  # Adding 1 since a=1

    # Add the master character indicating how many characters represent the spaces
    master_char = number_to_alpha(len(space_positions))

    # Append the space positions and the master character to the end of the string
    encrypted_string += space_representation + master_char

    return encrypted_string


# Decrypt the string and restore the spaces
def decrypt_string(encrypted_string):
    # Extract the master character to get the number of space indicators
    master_char = encrypted_string[-1]
    num_space_indicators = alpha_to_number(master_char)

    # Separate the message and the space indicators
    string_part = encrypted_string[:-num_space_indicators - 1]
    space_part = encrypted_string[-num_space_indicators - 1:-1]

    # Convert the alphabetical space indicators back to their original positions
    space_positions = []
    i = 0
    while i < len(space_part):
        for length in range(1, len(space_part) + 1):
            current_alpha = space_part[i:i + length]
            position = alpha_to_number(current_alpha)
            space_positions.append(position - 1)  # Subtracting 1 since a=1
            i += length
            break

    # Reconstruct the original string by inserting spaces at the appropriate positions
    decrypted_string = list(string_part)
    for pos in space_positions:
        decrypted_string.insert(pos, ' ')

    return ''.join(decrypted_string)



if __name__ == "__main__":
    entered_string = input('Enter String to Encrypt: ')
    encrypted_message = encrypt_string(entered_string)
    print('Encrypted Message: ', encrypted_message)
    decrypted_message = decrypt_string(encrypted_message)
    print('Decrypted Message: ', decrypted_message)
