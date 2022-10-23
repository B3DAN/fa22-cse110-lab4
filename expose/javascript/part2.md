1. line 12 will return 3, the var i is kept outside of the for loop since it is still in the function

2. line 13 will return 150, the last value pushed to discountPrice which is kept throught the function by var

3. line 14 will return 150, the last value pushed to finalPrice

4. The function will return an array of discounted prices which were achieved from the initial inputs

5. The function will error, because i is now defined by 'let' it is not accessible outside of the for loop

6. The function will error, because discountedPrice is now defined by 'let' it is not accessible outside of the for loop

7. line 14 will return 150, let works for FinalPrice since it was defined outside of the for loop

8. The function will correctly return the discounted prices because each discounted price was pushed to discountedPrices before losing their value

9. let i is not defined outside the for loop so an error is thrown

10. 3 will be returned as that is the length of the array

11. the correct discounted prices will be returned, the const variable isn't an issue as the value are not being updated to new values, the const is either being redefined or the array value is being added to, no reassignments.

12. 
a. student.name
b. student['Grad Year']
c. student.greeting()
d. student['Favorite Teacher'].name
e. student.courseLoad[0]

13.
a. '32' because of string concatentation
b. 1 because there is no minus in strings so it converts 3 to an integer instead
c. 3 because null will stand for 0 in an integer view
d. 3null because null is converted to a string
e. 4 because the numerical value of true is 1
f. 0 because false is 0 and null is nothing
g. 3unedfined because undefined is converted to a stirng
h. NaN because there is no minus operation and no combination for a string and an undefined value

14.
a. true, 2 is conveted to integer
b. the first string val is compared first and two is greater than 1 so false
c. '2' is converted to a number which is equal
d. checks without conversion and not equal
e. true is converted to number which is false
f. Boolean(2) returns true and which is equivalent to true

15. === checks equality without type conversion

17. when newArr is returned, each original value will be multiplied by 2. This occurs because doSomething which multiplies a num by two is called on each part of the array passed in.

19. 1 4 3 2. One prints first, 2 prints after a second, so 3 and 2 excute first, and 2 executes before 3 because even though it was 0, a time was still set for it.