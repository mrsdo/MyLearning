# This function compares two numbers and returns them
# in increasing order.


def order_numbers(number1, number2):
	if number2 > number1:
		return number1, number2
	else:
		return number2, number1

# 1) Fill in the blanks so the print statement displays the result
#    of the function call


smaller, bigger = order_numbers(100, 99)

print(smaller, bigger)

# 2) Relationship between "cat" and "Cat"
print("cat" > "Cat")

#  In Python uppercase letters are alphabetically sorted before lowercase letters


# 3)  Logical operators and, or not.  To evaluate as true, the and operator would need both expressions to be true
#     Bigger and smaller operators refer to alphabetical order.  Yellow comes after Cyan but Brown does not come after
#     Magenta

print("Yellow" > "Cyan" and "Brown" > "Magenta")

# 4) The or operator, the expression is true if either of the expressions are true and false when "both" are false
print(25 > 50 or 1 != 2)

# 5)  The not operator != inverts the value of the expression in front of it

print(not 42 == "Answer")
