# 1).  Using the Len function to calculate a number

name = "Kay"
number = len(name) * 9
print("Hello " + name + ". Your lucky number is " + str(number))

name = "Cameron"
number = len(name) * 9
print("Hello " + name + ". Your lucky number is " + str(number))

# 2). Reuse code: Rewrite the previous example using a function


def lucky_number(from_name):

    random_number = len(from_name) * 9 # use len to generate a number
    print("Hello " + from_name + ".  Your lucky number is " + str(random_number))

# 3). Call the function


lucky_number("Malcolm")
lucky_number("Ann")
