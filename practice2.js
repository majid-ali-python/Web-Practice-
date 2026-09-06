// Majid Ali kia hal hai (is ko 50 dafa print karvao)
// write a program to calculate a number from 1 -> 5
// let sum = 0;
// for (let i=1; i<=5;i++){
//     sum = sum+i;
// }
// console.log("The sum of first five number is :",sum);


// ab hum parhy gay k while loop kia hota hai 
// asa koi b kam ni hai jo hum for loop say kar saky or while say na kar sakty 


// print number from one to five using while loop 
// let i = 1;
// sum = 0;
// while(i<=5){
//     sum = sum+i;
//     i++;
// }
// console.log(sum)

// today our topic is loop in for of loop and for in loop
// pixel ki full form hoti hai picture element
// let me = "Majid Ali"
// for (let i of me){
//     console.log(i)
// }

// ab hum karta hai for in loop ya object k lia use hota hai 
// let majid={
//     full_name : "Majid Ali",
//     roo_number: 121251,
//     department: "BSCS",
//     Age: 21

// };

// ab agar mujy key values ko access karna hai to yaha par for ,while ,do while use ni hosakty 
// yaha par sirf for in loop use ho gha
// for (let i in majid){
//     console.log(i)
// }

// // print all the even numbers from 0 to 50 
// for(let i=1;i<=50;i++){
//     if(i%2==0){
//         console.log(i)
//     }

// }

// create a game where you start with any random game number ask the user to key gussing the game number 
// intil the user enters correct value

let game_number = 9;
let user_number = prompt("Gess the Game Number from 1 to 10")
while (game_number!=user_number){
    user_number=prompt("Your Entered the wrong number pleasd Guess Again?")
}
console.log("Congratulation you entered the correct nuber")



