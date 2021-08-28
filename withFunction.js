const chalk=require("chalk");
const  readlinesync=require('readline-sync')

console.log(chalk.bgRed.bold("\n                                  Zomato                                \n"))
console.log(chalk.magenta("              🤗🤗🌹🌺🌻   Welcome To Zomato App   🌻🌺🌹🤗🤗\n"))
var price=chalk.greenBright("Price")
var details = {}
var availableFoodDetials={}
var addCart=[]



function login(){
        console.log("\nPlease First Login Your Account Here:--\n")
        var userName = readlinesync.question("Enter your name:-- ")        
        var email_id = readlinesync.question("Enter your email-id:-- ")
        var userNumber = readlinesync.questionInt("Enter your phone number:-- ")
        details["Name"] = userName
        details["Email-Id"] = email_id
        details["Number"] = userNumber
        console.log("\nYour Account Created Successfully!!!\n")
}
login()


function dish(){
    console.log(chalk.bgMagenta.white("\nthere is 3 types dishes are available"))
    console.log("\n1. biryani\n 2. indian drink\n 3. noodles\n")
    var dishses=readlinesync.question("select which dish you want :--")
    var yourDishses={"biryani":[{'brown rice biryani':240,'Brinjal biryani':300,'Rajma biryani':200,'chicken biryani':340}],"indian drink":[{"lassi":60,"masala chai":30,"mango lassi":120}],"noodles":[{"egg noodles":123,"meggi":70}] }
    for (myfood in yourDishses) {
        if (dishses=== myfood) {
            console.log("\n")
            console.log(chalk.bgYellow.black("These are the category of dishes...\n"));
            for (var i = 0; i < yourDishses[myfood].length; i++) {
                var itemNo=1
                for (key in yourDishses[myfood][i]) {  
                    availableFoodDetials[key]=yourDishses[myfood][i][key]
                    console.log(itemNo,key,"    ", price,"-", yourDishses[myfood][i][key]);
                    itemNo++;
                }
                var my_favfood = readlinesync.question("\nChoose any item what you want to order :-- ")
                console.log(chalk.bgRed.black(`  ${my_favfood}  `))
                choose=readlinesync.question("\nwhat do you want...?\n 1 order\n 2 add to cart\n choose 1 or 2 :-- ")
                if (choose==1 || choose=="order"){
                    numberOfItem=readlinesync.questionInt("\nenter the number how many item you want...")
                    console.log("\nyour order is coming within few minutes\n\nYour Total Payment Is :---")
                    console.log(chalk.bgGreen.black(`${availableFoodDetials[my_favfood]*numberOfItem} ₹`))
                    console.log("Time To Reach :- ",30,"min")
                    var payment=readlinesync.question("\nhow do you want to pay money 1. online or 2. case :-- ")
                    if (payment=="online" || payment=="1"){
                        var number=readlinesync.questionInt("tell me your google-pay or phone-pay number :--- ")
                        console.log(chalk.bgGreen.black("Paid ✔ "))
                    }else{
                        console.log(chalk.bgGreen.black("Paid ✔ "))
                    }       
                }else{
                    console.log("Your Item Added In Cart..👍")
                    addCart.push(my_favfood)
            }
            }}}
}
        

function restraurants() {
    console.log( "\n1.  punjabi dhaba ,rating3.4 \n2.  apna food rating,4.5 \n3.  pizza hut,rating 5 \n4.  the disaster cafe,rating3.9 \n5.  Empire restrorent,rating 4.8\n6.  new panjabi hotal")
    var restraurant = readlinesync.question("\nThese Are The Avalibal Restraurant You Can Select anyone:-- ")
    your_resto = {
    "punjabi dhaba": [{ "vegthali": 140, "eggcurry": 120, "chicken": 200, "vegbiryani": 300, "dahibare": 230 }], "apna food": [{ "cake": 300, "vegbiryani": 200, "dahibare": 200 }],
    "pizza hut": [{ "onion pizza": 65, "paneer pizza": 80, "corn pizza": 150, "cheez pizza": 200 }], "the disaster cafe": [{ "coffee": 50, "tea": 30, "milkshake": 50, "butternan": 120, "choole bhature": 50 }],
    "Empire restrorent": [{ "paneer_masala": 200, "matar_paneer": 100, "rajma-chawal": 120 }],"new panjabi hotal":[{'rice and biryani':300,'manchhorian':140,"momos":150,"tanduri dal":345}]
}
    for (myfood in your_resto) {
        if (restraurant === myfood) {
            console.log("\n")
            console.log(chalk.bgYellow.black("These are your available food items...\n"));
            for (var i = 0; i < your_resto[myfood].length; i++) {
                var itemNo=1
                for (key in your_resto[myfood][i]) {  
                    availableFoodDetials[key]=your_resto[myfood][i][key]
                    console.log(itemNo,key,"    ", price,"-", your_resto[myfood][i][key]);
                    itemNo++;
                }
                var my_favfood = readlinesync.question("\nChoose any item what you want to order :-- ")
                console.log(chalk.bgRed.black(`  ${my_favfood}  `))
                choose=readlinesync.question("\nwhat do you want...?\n 1 order\n 2 add to card\n choose 1 or 2 :-- ")
                if (choose==1 || choose=="order"){
                    numberOfItem=readlinesync.questionInt("\nenter the number how many item you want...")
                    console.log("\nyour order is coming within few minutes\n\nYour Total Payment Is :---")
                    console.log(chalk.bgGreen.black(`${availableFoodDetials[my_favfood]*numberOfItem} ₹`))
                    console.log("Time To Reach :- ",30,"min")
                    var payment=readlinesync.question("\nhow do you want to pay money 1. online or 2. case :-- ")
                    if (payment=="online" || payment=="1"){
                        var number=readlinesync.questionInt("tell me your google-pay or phone-pay number :--- ")
                        console.log(chalk.bgGreen.black("Paid ✔ "))
                    }else{
                        console.log(chalk.bgGreen.black("Paid ✔ "))
                    }       
                }else{
                    console.log("Your Item Added In Cart..👍")
                    addCart.push(my_favfood)
                }       
        }
    }}  
}



function order(){
var location= readlinesync.question("Add Your Location :-- ")
details['Location']=location
var search=readlinesync.question("do you want search 1. dish Or 2. restorant :-- ")
if (search=="dish" || search=="1"){
    dish()
}else{
    console.log(chalk.bgYellow.black(`\n ${location} restraurants.....`))
    restraurants()
}

}
var orderFun=order()



var i=0
while (true){
    var user=readlinesync.question("if you want to search again than put yes otherwise no :-- ")
    if (user=="yes"){
        order()
    }else{
        console.log("****************************** thank you *******************************\n")
        var seeCart=readlinesync.question("Do You Want To See Your Cart... yes or no :---")
        if (seeCart=="yes"){
            console.log(addCart)
            break
        }else{
            break
        }       
}}



