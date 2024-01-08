import encode
import decode
import info
def choose():
    """This Function was used to ask choice of user."""
    print('\nWhat do you want to do?')
    choice = input('\n1. Encode\t\t2. Decode\n3. More Info\t\t4. Quit\n\nEnter a Choice (Number): ')
    if choice == '1':
        print(encode.encode())
    elif choice == '2':
        print(decode.decode())
    elif choice == '3':
        print(info.moreinfo())
    elif choice == '4':
        print('\nHave a Nice Day!')
        a = input()
    else:
        print('\nEnter a Correct Input!')
        choose()
