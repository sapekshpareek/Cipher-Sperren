import encode
import decode
import choose
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
