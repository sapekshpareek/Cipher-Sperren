def encode():
    """By using this you can encrypt you message in a secret message which can only decoded by this same program."""

    string = input('\nEnter The Message You Want to Encrypt (Encode): ')

    # Splitting String into list elements by spaces.
    ele = string.split(" ")

    size = len(ele)
    import string
    import random
    for i in range(size):
        temp = ele[i]


        # for less than 3 letters in a word
        if len(temp) < 3:
            inti_val = temp[0:1]
            temp += inti_val
            a = temp[1:]


            #including 3 ranom letters at start and end
            start = ''.join(random.choices(string.ascii_uppercase + string.ascii_lowercase, k=3))
            end = ''.join(random.choices(string.ascii_uppercase + string.ascii_lowercase, k=3))
            ele[i] = str(start) + a + str(end)


        # for more than 3 letters in a word
        else:
            inti_val = temp[0:3]
            temp += inti_val
            a = temp[3:]


            # including 3 ranom letters at start and end
            start = ''.join(random.choices(string.ascii_uppercase + string.ascii_lowercase, k=3))
            end =  ''.join(random.choices(string.ascii_uppercase + string.ascii_lowercase, k=3))
            ele[i] = str(start)+a+str(end)

    print('\nYour Secret String:',end = " ")
    for i in range(size):
        print(ele[i], end=" ")
    choose()


def decode():
    """By using this you can decrypt the secret message which you encrypted previously (Encryption done by this program are only supported)."""

    string = input('\nEnter The Message You Want to Dencrypt (Decode): ')

    # Splitting String into list elements by spaces.
    ele = string.split(" ")

    size = len(ele)
    for i in range(size):
        temp = ele[i]

         # decode main code
        temp = temp[3:]
        temp = temp[:-3]

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
    choose()


def choose():
    """This Function was used to ask choice of user."""
    print('\nWhat do you want to do?')
    choice = input('\n1. Encode\n2. Decode\n3. More Info\n4. Quit\n\nEnter a Choice: ')
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
