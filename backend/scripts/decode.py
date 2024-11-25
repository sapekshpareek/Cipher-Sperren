import character


def decode(message_string, start_int, end_int, shift, sample):
    """This allows you to decode a secret message that you have previously encrypted (only encryption made with this program are supported).
    1. Enter the strange encrypted message given by program.
    2. It will give you the actual readable message that was entered previously."""

    strings = character.shift_characters(message_string, -shift)

    sample_string = sample
    # Splitting String into list elements by spaces.
    ele = strings.split(" ")

    size = len(ele)
    decoded_words = []

    for i in range(size):
        temp = ele[i]

        # decode main code
        temp = temp[start_int:]
        temp = temp[:-end_int]

        # for Single letter in a word
        if(len(temp)==(1+3)):
            start = temp
            ele[i] = start[-1:]

        # for two letters in a word
        elif(len(temp)<(3+3)):
            start = temp[-1:]

            start += temp[:-4]  # +1

            ele[i] = start

        # for more than two letters in a word
        else:
            start = temp[-3:]
            start += temp[:-3]
            start = start[:-3]
            ele[i] = start

        decoded_words.append(ele[i])

    decoded_message = " ".join(decoded_words)

    return decoded_message

if __name__ == "__main__":
    string = input('\nEnter The Message You Want to Decrypt (Decode): ')
    key = input('\nEnter Your Key: ')
    start_int = int(key[0])
    end_int = int(key[1])
    shift = int(key[2])
    sample = int(key[3])
    decrypted_message = decode(string, start_int, end_int, shift, sample)
    print(decrypted_message)
