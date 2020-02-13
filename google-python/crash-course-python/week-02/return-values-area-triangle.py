# 1). Returning Values from functions


def area_triangle(base, height):
    return base*height/2

# 2). Calculate two areas separately


area_a = area_triangle(5, 4)

area_b = area_triangle(7, 3)

# 3). Get the total area of the triangle


sum = area_a + area_b

print("The sum of both areas is: " + str(sum))


