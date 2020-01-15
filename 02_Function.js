function Merchant(costOfItem) {

    var totalCost;


    if (costOfItem >= 100) {
        totalCost = costOfItem;
        console.log(totalCost);

    }
    else if (costOfItem < 50) {
        totalCost = costOfItem + (50 * 0.3);
        console.log(totalCost);

    }
    else if (costOfItem > 50 && costOfItem < 100) {
        totalCost = costOfItem + 50;
        console.log(totalCost);

    }
    alert(totalCost);
    return totalCost;
}

//Merchant(230000);