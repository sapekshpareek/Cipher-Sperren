import character
import sys

def decode(message_string, start_int, end_int, shift, sample):
    """This allows you to decode a secret message that you have previously encrypted."""
    try:
        strings = character.shift_characters(message_string, -shift)
        sample_s = sample
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
    except Exception as e:
        print(f"Error in decode: {str(e)}", file=sys.stderr)
        raise

if __name__ == "__main__":
    try:
        if len(sys.argv) != 3:
            print("Error: Required arguments missing", file=sys.stderr)
            print("Usage: python decode.py <message> <key>", file=sys.stderr)
            sys.exit(1)
            
        # Get arguments from command line
        message = sys.argv[1]
        key = sys.argv[2]
        
        # Validate key
        if not key.isdigit() or len(key) != 4:
            print("Error: Key must be exactly 4 digits", file=sys.stderr)
            sys.exit(1)
            
        start_int = int(key[0])
        end_int = int(key[1])
        shift = int(key[2])
        sample = int(key[3])
        
        # Process and print result
        decrypted_message = decode(message, start_int, end_int, shift, sample)
        print(decrypted_message)  # This will be captured by Node.js
        sys.exit(0)
        
    except Exception as e:
        print(f"Error: {str(e)}", file=sys.stderr)
        sys.exit(1)
