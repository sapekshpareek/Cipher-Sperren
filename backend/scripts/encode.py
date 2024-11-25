import sys
import character


def encode(string, start_int, end_int, shift, sample):
    """This is used to encrypt the message in an encrypted form that is only decrypted by the same programme, creating a secret message.
    1. Enter a message, and it will give a strange message copy it and use it anywhere.
    2. When needed, use decrypt and enter above message given by program.
    3. It will give you the correct readable message."""

    # Splitting String into list elements by spaces.
    ele = string.split(" ")
    sample = sample
    size = len(ele)
    import string
    import random
    for i in range(size):
        temp = ele[i]

        # For words with fewer than three letters
        if len(temp) < 3:
            init_val = temp[0:1]
            intrim_ran = ''.join(random.choices(string.ascii_uppercase + string.ascii_lowercase, k=3))
            intrim_val = intrim_ran + init_val
            temp += intrim_val
            a = temp[1:]

            # Three random letters at the beginning and at end

            start = ''.join(random.choices(string.ascii_uppercase + string.ascii_lowercase, k=start_int))
            end = ''.join(random.choices(string.ascii_uppercase + string.ascii_lowercase, k=end_int))
            ele[i] = str(start) + a + str(end)

        # For words with more than three letters
        else:
            init_val = temp[0:3]
            intrim_ran = ''.join(random.choices(string.ascii_uppercase + string.ascii_lowercase, k=3))
            intrim_val = intrim_ran + init_val
            temp += intrim_val
            a = temp[3:]

            # three random letters at the beginning and conclusion
            start = ''.join(random.choices(string.ascii_uppercase + string.ascii_lowercase, k=start_int))
            end = ''.join(random.choices(string.ascii_uppercase + string.ascii_lowercase, k=end_int))
            ele[i] = str(start) + a + str(end)

    # Joining Array to a String
    message_string = ' '.join(ele)

    psudo_cipher = character.shift_characters(message_string, shift)

    return psudo_cipher


if __name__ == "__main__":
    if len(sys.argv) > 2:
        string = sys.argv[1]
        key = sys.argv[2]
        start_int = int(key[0])
        end_int = int(key[1])
        shift = int(key[2])
        sample = int(key[3])
        encrypted_message = encode(string, start_int, end_int, shift, sample)
        print(encrypted_message)
    else:
        print("Error: Missing arguments")
