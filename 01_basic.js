//alert("Bsic File Runnin");
var a = "mani"; // Variables String + Numbers
//console.log(a);
var num = 25;
var j = num + 9;
//console.log(j);
//var aty="Alert"; // Alerting
//alert(aty);
//alert(2+2);
//console.log(10 % 3);
var num = 9;
--num;
//console.log(num);
var name = ("MAni");
//alert ("thanks " + name + ""); // Concatenating 
var name1 = "mani";
var name2 = "mani";
var name3 = "mani";
var name4 = name1 + name2 + name3;
//console.log(name4);
//var a =prompt ("Your name is","Mani?"); // prompt

/* var p=prompt("Are you human");  
if(p==="Yes")
{
    alert("You can procced");
}
else {
    alert("No")
} 
*/

var city = ["karachi", "lahore", "Hello"];
//console.log(city[2]);
var pets = [];
pets[0] = "Dog";
pets[1] = "Cat";
pets.shift();
//console.log(pets[1]); // Arrays

var city = "Karachi";
var citytocheck = ["lahore", "raw", "Karachi", "INd"];
for (var i = 0; i < citytocheck.length; i++) {
    if (city == citytocheck[i]) {
        //console.log("Yes");
        break;
    }
    else {
        //console.log("No")
    }

}

/*var nums = [1, 2];
for (var i = 0; i < 2; i++) {
 if (nums[i] === nums[i]) {
   alert(nums[i]);
 }
}*/

/*var cityToCheck = "Karachi";
var cleanestCities = ["Lahrre", "Karachi", "Hello"];
var matchFound = true;
for (var i = 0; i <= 4; i++) {
    if (cityToCheck === cleanestCities[i]) {
        matchFound = true;
        alert("It's one of the cleanest cities");
    }
}
if (matchFound === false) {
    alert("It's not on the list");
} */
var fname = ["mani", "hello", "hye"];
var lname = ["abid", "khan", "Khhhhh"];
var fullname = [];
for (var i = 0; i < fname.length; i++) {
    for (var j = 0; j < lname.length; j++) {
        fullname.push(fname[i] + lname[j]);

    }
}

//console.log("hye", fullname);
var someWord = "captain";
var segment = someWord.slice(2, 4);
//console.log(segment);

var name1 = "mani";
//var name2 = name1.charAt(0).toUpperCase();

//console.log(name2);
var lastChar = name1.charAt(name1.length - 1);
//console.log(lastChar);
var scoreAvg = Math.round(.0678437);
//console.log(scoreAvg);


var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 6) + 1;
var numberOfStars = Math.floor(improvedNum);
//console.log(numberOfStars);

var profit = 201 - 150;
//console.log(profit);

var result = "200" - 150;
//console.log(result);

//var currentAge = prompt("Enter your age.");  
//var qualifyingAge = parseInt(currentAge);
//console.log(qualifyingAge);

var myInteger = parseFloat("1.9999");
//console.log(myInteger);

var numberAsNumber = 1234;
var numberAsString = numberAsNumber.toString();
//console.log(numberAsString);

var totalPrice = 10 * 8.98787;

//console.log(totalPrice.toFixed());

var rightNow = new Date();
//console.log(rightNow);

var d = new Date();
var f = d.getMinutes();
//console.log(f);

function Time() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var n = "Time is" + hours + ":" + minutes + ":" + seconds;
    return n
}

//alert(Time());


var j = 8;
var num = 23;
var showMessage = (j + "'s Winner is" + num);
// alert(showMessage);


function aRt(p, l) {
    var ko = p + l;
    return ko
}

//alert(aRt(3,7));

var user = "Helloo";
//alert((user));

//var costOfItem = 230;


