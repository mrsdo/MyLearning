# 1).  Takes more conditions into account.


def hint_username(username):
    if len(username) < 3:
        print(username + " is an invalid username. Must be at least 3 characters long")

    else:
        if len(username) > 5:
            print(username + " is a valid username. Must be at less than 5 characters long")

        else:
            print(username + " is a valid username")


hint_username("Max")
hint_username("Jo")
hint_username("Jonathan")


# 2).   Use the elif to remove unnecessary nesting.  Rewrite using elif


def hint_username(username):
    if len(username) < 3:
        print(username + " is an invalid username. Must be at least 3 characters long")

    elif len(username) > 5:
        print(username + " is a valid username. Must be at less than 5 characters long")
    else:
        print(username + " is a valid username")


hint_username("Max")
hint_username("Jo")
hint_username("Jonathan")


# 3).   The number_group function should return "Positive" if the number received is positive, "Negative if negative
#       "Zero if it's 0.

def number_group(number):
    if number > 0:
        #print("Positive: " + str(number) + " is positive")
        return "Positive"
    elif number < 0:
        #print("Negative: " + str(number) + " is negative")
        return "Negative"

    else:
        number == 0
        #print("Zero: " + str(number) + " is the number")
        return "Zero"


print(number_group(10))  # positive
print(number_group(0))  # Zero 0
print(number_group(-5))  # negative
