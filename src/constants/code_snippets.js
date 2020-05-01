

module.exports = {

    py: ` 

# Python program to display all the prime numbers within an interval

lower = 900
upper = 1000

print("Prime numbers between", lower, "and", upper, "are:")

for num in range(lower, upper + 1):
   # all prime numbers are greater than 1
   if num > 1:
       for i in range(2, num):
           if (num % i) == 0:
               break
       else:
           print(num)  `,

           
    js: `
// Hello.
//
// This is Kludge, a tool that helps to detect errors and potential
// problems in your code.
//
// To start, simply enter some code anywhere on this editor and press ctrl+enter. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.

function abc(m,n){
    console.log("shubham");
}

function def(p,r){
    console.log("bhardwaj");
}

def();`,



    
};