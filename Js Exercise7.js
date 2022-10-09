function foodDelivery(input) {
    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let veganMenus = Number(input[2]);

    let chicken = chickenMenus * 10.35;
    let fish  = fishMenus * 12.40;
    let vegan = veganMenus * 8.15;
    let allMenus = chicken + fish + vegan



    let dessert = (20 / 100) * allMenus
    let finalPrice = (allMenus + dessert + 2.50).toFixed(2)

    console.log(finalPrice);
}

foodDelivery(["2", "4", "3"])