import choose
def decode():
    """This allows you to decode a secret message that you have previously encrypted (only encryption made with this program are supported).
    1. Enter the strange encrypted message given by program.
    2. It will give you the actual readable message that was entered previously."""

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
            # print(temp)

        #for more than two letters in a word
        else:
            start = temp[-3:]
            start += temp[:-3]
            ele[i] = start
    for i in range(size):
        # print(ele[i]) # testing
        print(ele[i], end=" ")
        # print()
    print()
    choose.choose()
