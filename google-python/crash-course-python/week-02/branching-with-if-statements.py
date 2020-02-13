# 1).   The ability of a program to alter its execution sequence is called branching


def is_positive(a_number):
    if a_number > 0:
        print("True: " + str(a_number) + " is positive")
        return True
    else:
        print("False: " + str(a_number) + " is NOT positive")


is_positive(-13)
is_positive(7)

# 2).   More on 'else' statements


def hint_username(username):
    if len(username) < 3:
        print(username + " is an invalid username. Must be at least 3 characters long")
    else:
        print(username + " is a valid username")


hint_username("Max")
hint_username("Jo")

# 3).   Check if a value is even or odd.  Using the Modulo which checks to make sure 0 is the outcome
#       When a return statement is executed, the function exists, so that the code that follows doesn't get executed.
#       Else runs only when the if Block is false

def is_even(a_number):
    if a_number % 2 == 0:
        print("True")
        return True
    print("False")
    return False


is_even(7)
is_even(8)
