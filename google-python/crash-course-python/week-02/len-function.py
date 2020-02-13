name = "Kay"
number = len(name) * 9
print("Hello " + name + ". Your lucky number is " + str(number))

name = "Cameron"
number = len(name) * 9
print("Hello " + name + ". Your lucky number is " + str(number))

##len returns the length of a string then multiply that by 9

##Rewrite into a function to avoid repeating code.

def lucky_number(name):
    number = len(name) * 9
    print("Hello " + name + ". Your lucky number is " + str(number))
lucky_number("Alexa")
lucky_number("Martinique")
