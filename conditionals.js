///*  PART ONE: CONDITIONALS  *///

// PROBLEM 1
// Fill in the if statement of this conditional to respond to whether the user is buckledUp or not.
// Log the first message if buckledUp is false.
// Otherwise, log the second message.
const buckledUp = false;

if (buckledUp === false) {
    console.log("You are not buckled up. Click it or ticket!");
} else {
    console.log("You buckled up your seat belt. What a safe driver you are!");
}


// PROBLEM 2
// Let's negotiate. If the price variable is less than or equal to 5, log the message "I'll take it!"
// If the price variable is greater than 5, log the message "Take off 10% and you've got a deal."
// If the price variable is greater than 10, log the message "_____ for this? You must be joking!"
// For that last statement, fill in the blank with the value of the price variable, i.e. "500 for this? You must be joking!"
// Try setting the price variable to different values and test out your conditional statements.
const price = 100000;

if (price > 10) {
    console.log(price + " for this? You must be joking!");
}
else if (price > 5) {
    console.log("Take off 10% and you've got a deal.");
}
else {
    console.log("I'll take it!");
}

// PROBLEM 3 [BONUS]
// Do I want this bicycle? The kinds of bicycles I want are either:
// a) under 250 dollars and blue
// b) over 1000 dollars or a schwinn
// c) between 500-750 and either yellow or orange
// Write a conditional chain testing the bike variable based on my conditions.
// If the bike passes these conditions, log "I'd like to ride this <color-of-bike> <brand-of-bike>"
// Use variables so when you change the bike's name/brand, the message still describes the bike.
// Try changing the properties of the bicycle object to test our your conditional chain.

const bicycle = {
    wheels: 2,
    color: "orange",
    brand: "trek",
    price: 400
};

if (bicycle.price < 250) {
    if (bicycle.color === "blue") {
        console.log("I'd like to ride this " + bicycle.color + " " + bicycle.brand + ".");
    }
} else {
    if (bicycle.price > 1000 || bicycle.brand === "schwinn") {
        console.log("I'd like to ride this " + bicycle.color + " " + bicycle.brand + ".");
    }
    else if (bicycle.price > 500 && bicycle.price < 750 && (bicycle.color === "yellow" || bicycle.color === "orange")) {
        console.log("I'd like to ride this " + bicycle.color + " " + bicycle.brand + ".");
    }
    else {
        console.log("I don't want it.");
    }
}


///*  PART TWO: LOOPS  *///

// PROBLEM 1
// You put 1000 dollars into a new cryptocurrency. Good luck!
// Over ten years, the value of the investment increases by 5% each year.
// In the seventh year, the investment loses 75% instead of increasing. Eeek!
// Use a for loop to log how many years it has been and how much the investment is worth for each year.
let investment = 1000;

for (let i = 1; i < 11; i++) {

    if (i === 7) {
        investment = investment - (investment * 0.75);
        console.log(investment);
    } else {
        investment = (investment * 0.05) + investment;
        console.log(investment);
    }

}


// PROBLEM 2
// Use a while loop to count down the days until the finale of your favorite show.
// For each day, log the message "_____ days until the last episode!"
// If the daysUntilTheFinale is evenly divisible by 7, don't log the above message.
// Instead, log "Only _____ weeks until the last episode!"
let daysUntilTheFinale = 30;

while (daysUntilTheFinale > 0) {

    if (daysUntilTheFinale % 7 === 0) {
        weeksUntilTheFinale = daysUntilTheFinale / 7;
        console.log("Only " + weeksUntilTheFinale + " weeks until last episode")
    } else {
        console.log(daysUntilTheFinale + " days until the last episode!");
    }
    daysUntilTheFinale = daysUntilTheFinale - 1;


}


// PROBLEM 3
// Firing a laser has a 50% chance of hitting, reducing enemyHealth by 1 each time
// Use Math.random() to determine whether the laser was successful or not
// Continue firing lasers (subtract one from the lasers variable) until the enemyHealth is 0 or lasers is 0
// Each time, log how many lasers are left, and how much enemyHealth remains
let lasers = 10;
let enemyHealth = 5;



while (lasers > 0 && enemyHealth > 0) {
    if (Math.random() > 0.50) {
        enemyHealth = enemyHealth - 1;
        console.log("enemyHealth1 " + enemyHealth);
    } else {
        console.log("enemyHealth2 " + enemyHealth);
    }
    lasers = lasers - 1;
    console.log(" lasers " + lasers);
}
