def key():
    import re
    key = input('\nCreate a Key to Encrypt it: ')
    key.lower()

    # Splitting Key into characters.
    key1 = []

    x = re.findall("[a-z0-9]", key)

    for char in key:
        key1.append(char)

    key2 = [eval(i) for i in key1]
    return key2


def encode():
    """This is used to encrypt the message in an encrypted form that is only decrypted by the same programme, creating a secret message.
    1. Enter a message and it will give a strange message copy it and use it anywhere.
    2. When needed use decryptor and enter above message given by program.
    3. It will give you the correct readable message."""

    string = input('\nEnter The Message You Want to Encrypt (Encode): ')
    pin = key()

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
            inti_val = temp[0:pin[2]]   # Start Part Slice
            rand = ''.join(random.choices(string.ascii_uppercase + string.ascii_lowercase, k=pin[3]))
            rand += inti_val    #Random Value + Start Value
            temp += rand    # Main String + Random String + Starting
            a = temp[pin[2]:]   # Slicing Start from Main's Beginning

            # three ranom letters at the beginning and conclusion
            start = ''.join(random.choices(string.ascii_uppercase + string.ascii_lowercase, k=pin[0]))
            end =  ''.join(random.choices(string.ascii_uppercase + string.ascii_lowercase, k=pin[1]))
            ele[i] = str(start) + a + str(end)

    print('\nYour Secret Message is:\n')
    for i in range(size):
        print(ele[i], end=" ")
    print()
    choose()


def decode():
    """This allows you to decode a secret message that you have previously encrypted (only encryption made with this program are supported).
    1. Enter the strange encrypted message given by program.
    2. It will give you the actual readable message that was entered previously."""

    string = input('\nEnter The Message You Want to Dencrypt (Decode): ')
    pin = key()

    # Splitting String into list elements by spaces.
    ele = string.split(" ")

    size = len(ele)
    for i in range(size):
        temp = ele[i]

         # decode main code
        temp = temp[pin[0]:]
        temp = temp[:-pin[1]]

        # for Single letter in a word
        if(len(temp)==1):
            ele[i] = temp

        #for two letters in a word
        elif(len(temp)<3):
            temp += temp[:-1]
            temp = temp[1:]
            ele[i] = temp
            print(temp)

        #for more than two letters in a word
        else:
            start = temp[-3:]
            start += temp[:-3]
            ele[i] = start
    for i in range(size):
        print(ele[i], end=" ")
    print()
    choose()


def choose():
    """This Function was used to ask choice of user."""
    print('\nWhat do you want to do?')
    choice = input('\n1. Encode\t\t2. Decode\n3. More Info\t\t4. Quit\n\nEnter a Choice (Number): ')
    if choice == '1':
        print(encode())
    elif choice == '2':
        print(decode())
    elif choice == '3':
        print(moreinfo())
    elif choice == '4':
        print('\nHave a Nice Day!')
        a = input()
    else:
        print('\nEnter a Correct Input!')
        choose()


def moreinfo():
    """This Function was used to Give info About Functions used in the Program."""

    print('\nWant Information about: ')
    choice = input('\n1. Encryption (Encode)\n2. Decryption (Decode)\n3. About Developer\n4. Back To Main Menu\n\nEnter a Choice: ')
    if choice == '1':
        print()
        print(encode.__doc__)
        choose()
    elif choice == '2':
        print()
        print(decode.__doc__)
        choose()
    elif choice == '3':
        print('\nThis Program is Developed by Sapeksh Pareek')
        choose()
    elif choice == '4':
        choose()
    else:
        print('\nEnter a Correct Input!')
        moreinfo()


print('Welcome To Secret Messenger!')
choose()
# decode()
# encode()
# moreinfo()
# test()
