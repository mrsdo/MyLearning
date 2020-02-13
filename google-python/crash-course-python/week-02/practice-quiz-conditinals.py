# 1).   What is the value?

print((2 * 2) == 4)


# True

# 2).   Complete the script
def greeting(name):
    if name == "Taylor":
        return "Welcome back Taylor!"
    else:
        return "Hello there, " + name


print(greeting("Taylor"))
print(greeting("John"))


# 3).   What’s the output of this code if number equals 10?
def output(number):
    if number > 11:
        print(0)
    elif number != 10:
        print(1)
    elif number >= 20 or number < 12:
        print(2)
    else:
        print(3)


output(10)

# 4).   Is "A dog" smaller or larger than "A mouse"? Is 9999+8888 smaller or larger than 100*100?
#       Replace the plus sign in the following code to let Python check it for you and then answer.
if "A dog" > "A mouse":
    print("A dog " + "is larger than " + "A mouse")
else:
    print("A dog " + "is smaller than " + "A mouse")

if 9999 + 8888 < 100 * 100:
    print(str(9999 + 8888) + " is larger than " + str(100 * 100))
else:
    print(str(9999 + 8888) + " is smaller than " + str(100 * 100))

# 5).  If a filesystem has a block size of 4096 bytes, this means that a file comprised of only one byte will still use
#   4096 bytes of storage. A file made up of 4097 bytes will use 4096*2=8192 bytes of storage. Knowing this, can you fill
#   in the gaps in the calculate_storage function below, which calculates the storage size needed for a given filesize?


def calculate_storage(filesize):
    block_size = 4096

    # Use floor division to calculate how many blocks are fully occupied
    full_blocks = filesize // block_size

    # Use the modulo operator to check whether there's any remainder
    partial_block_remainder = filesize % block_size

    # Depending on whether there's a remainder or not, return the right number.
    if partial_block_remainder > 0:

        return block_size * 2


    return block_size


print(str(calculate_storage(1)) + " Storage 1")    # Should be 4096
print(calculate_storage(4096)) # Should be 4096
print(calculate_storage(4097)) # Should be 8192
print(calculate_storage(6000)) # Should be 8192
