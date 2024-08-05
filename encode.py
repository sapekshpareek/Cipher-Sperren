import choose
def encode():
    """This is used to encrypt the message in an encrypted form that is only decrypted by the same programme, creating a secret message.
    1. Enter a message and it will give a strange message copy it and use it anywhere.
    2. When needed use decryptor and enter above message given by program.
    3. It will give you the correct readable message."""

    string = input('\nEnter The Message You Want to Encrypt (Encode): ')

    # Splitting String into list elements by spaces.
    ele = string.split(" ")

    size = len(ele)
    import string
    import random
    for i in range(size):
        temp = ele[i]


        # For words with fewer than three letters
        if len(temp) < 3:
            inti_val = temp[0:1]
            temp += inti_val
            a = temp[1:]


            #Three ranom letters at the beginning and conclusion

            start = ''.join(random.choices(string.ascii_uppercase + string.ascii_lowercase, k=3))
            end = ''.join(random.choices(string.ascii_uppercase + string.ascii_lowercase, k=3))
            ele[i] = str(start) + a + str(end)


        # For words with more than three letters
        else:
            inti_val = temp[0:3]
            temp += inti_val
            a = temp[3:]


            # three ranom letters at the beginning and conclusion
            start = ''.join(random.choices(string.ascii_uppercase + string.ascii_lowercase, k=3))
            end =  ''.join(random.choices(string.ascii_uppercase + string.ascii_lowercase, k=3))
            ele[i] = str(start)+a+str(end)

    print('\nYour Secret Message is:\n')
    for i in range(size):
        print(ele[i], end=" ")
    print()
    choose.choose()
