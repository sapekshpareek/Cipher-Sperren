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