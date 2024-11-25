import encode
import decode
from spacing import encrypt_string, decrypt_string
# Function to get valid 4-digit input


def get_four_digit_input():
    while True:
        user_input = input("Enter Your 4 Digit Key: ")

        # Check if the input is a 4-digit number
        if user_input.isdigit() and len(user_input) == 4:
            return user_input  # Convert to integer if valid
        else:
            print("Invalid input! Please enter exactly 4 digits.")


choice = int(input('What do you Want to do?\n1. Encryption\t\t2. Decryption\n\nEnter Your Choice: '))

if(choice==1):
    input_string = input('\nEnter The Message You Want to Encrypt (Encode): ')
    key = get_four_digit_input()
    start_int = int(key[0])
    end_int = int(key[1])
    shift = int(key[2])
    sample = int(key[3])
    psudo_cipher = encode.encode(input_string, start_int, end_int, shift, sample)
    # print(psudo_cipher)
    cipher_text = encrypt_string(psudo_cipher)
    print('\nEncrypted Message is:')
    print(cipher_text)
    print()

elif(choice==2):
    input_string = input('\nEnter The Message You Want to Decrypt (Decode): ')
    key = get_four_digit_input()
    start_int = int(key[0])
    end_int = int(key[1])
    shift = int(key[2])
    sample = int(key[3])
    psudo_cipher = decrypt_string(input_string)
    print(psudo_cipher)
    decrypted_text = decode.decode(psudo_cipher, start_int, end_int, shift, sample)
    print(decrypted_text)

else:
    print('Enter a Valid Choice')