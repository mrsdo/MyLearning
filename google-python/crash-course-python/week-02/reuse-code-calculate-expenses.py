# 1). Reduce code duplication

# Ready to try it yourself? See if you can reduce the code duplication in this script.

# In this code, identify the repeated pattern and replace it with a function called
# print_monthly_expense, that receives the name of the month and the hours as parameters.
# Adapt the rest of the code so that the result is the same.

# june_hours = 243
# june_cost = june_hours * 0.65
# print("In June we spent: " + str(june_cost))

# july_hours = 325
# july_cost = july_hours * 0.65
# print("In July we spent: " + str(july_cost))

# august_hours = 298
# august_cost = august_hours * 0.65
# print("In August we spent: " + str(august_cost))

# 2). Function to calculate monthly costs.  Consider figuring out the total costs for months listed?


def monthly_expense(month_name, month_hours):
    month_cost = month_hours * 0.65

    print("In " + month_name + " we spent: $" + str(month_cost))


monthly_expense("June", 243)
monthly_expense("July", 325)
monthly_expense("August", 298)







