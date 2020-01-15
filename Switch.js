var dayOfwk = "thursday";
var ondata = dayOfwk.charAt(0).toUpperCase();
var ondata1 = dayOfwk.slice(1, dayOfwk.length);
var donename = ondata + ondata1;
console.log(donename);


switch (donename) {
    case "Sunday":
        console.log("Hyee");
        break;

    case "Monday":
        console.log("Hyee1");
        break;
    case "Tuesday":
        console.log("Hyee2");
        break;

    case "Thursday":
        console.log("Hyee3");
        break;

    default:
        console.log("Bye");

}