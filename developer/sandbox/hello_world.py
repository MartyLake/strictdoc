# Python3 program to add two numbers

number1 = input("First number: ")
number2 = input("\nSecond number: ")

# STRICTDOC RANGE BEGIN: REQ-FILE-REF, REQ-FILE-REF2
# Adding two numbers
# User might also enter float numbers
sum = float(number1) + float(number2)
# STRICTDOC RANGE END: REQ-FILE-REF, REQ-FILE-REF2

# Display the sum
# will print value in float
# STRICTDOC RANGE BEGIN: REQ-FILE-REF, REQ-FILE-REF2
print("The sum of {0} and {1} is {2}".format(number1, number2, sum))
# STRICTDOC RANGE END: REQ-FILE-REF, REQ-FILE-REF2
