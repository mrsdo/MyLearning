# 1).  hour = 3600 seconds, 60 seconds - 1 minute. Convert everything to seconds


def print_seconds(hours, minutes, seconds):
    hours = 3600 * hours
    minutes = 60 * minutes
    seconds = 1 * seconds
    print(hours + minutes + seconds)

# 2).  Get the total amount of seconds given hours, minutes, seconds


print_seconds(1, 2, 3)
print_seconds(0, 45, 15)
print_seconds(2, 30, 0)


# 3). Find the total amount of seconds given two variables with return

def get_seconds(hours, minutes, seconds):
    return 3600*hours + 60*minutes + seconds


amount_a = get_seconds(2, 30 ,0)

amount_b = get_seconds(0, 45, 15)

result = amount_a + amount_b
print("Total seconds in 'Get Seconds': " + str(result))

# "//" represents Floor division whereas 5 // 2 = 2


def convert_seconds(seconds):

    hours = seconds // 3600
    minutes = (seconds - hours * 3600) // 60
    remaining_seconds = seconds - hours * 3600 - minutes * 60
    return hours, minutes, remaining_seconds

# 4). Call the function

hours, minutes, seconds = convert_seconds(5000)


print(hours, minutes, seconds)
