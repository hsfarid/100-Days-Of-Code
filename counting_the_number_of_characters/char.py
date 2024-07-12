# Create a program that prompts for an input string and displays
# output that shows the input string and the number of
# characters the string contains.
# Example Output
# What is the input string? Homer
# Homer has 5 characters.

input_string = input("What is the input string? ").strip()

length = len(input_string)

if length == 0:
    output = "You must enter a string!"

else:
    output = f"{input_string} has {length} characters."

print(output)



# using for loop
# char_total = 0
# for char in input_string:
#     char_total += 1

# print(f"{input_string} has {char_total} characters.")


