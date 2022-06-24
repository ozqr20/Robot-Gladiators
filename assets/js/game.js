var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this

console.log(playerName, playerAttack,playerHealth);

var enemyName = "Robocop";
var enemyHealth = 50;
var enemyAtack = 12;


/* Another way to create a function by passing a value to it 

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
};
*/


function fight() {
    window.alert("Welcome to Robot Gladiators!");
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

            // IF PLAYER CHOSES TO FIGHT, THEN FIGHT //

        if (promptFight === 'FIGHT' || promptFight === 'fight'){
            enemyHealth = enemyHealth - playerAttack ;

        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
        
        // CHECK ENEMY'S HEALTH

        if(enemyHealth <= 0){
            window.alert(enemyName + "has died!");
        } else{
            window.alert(enemyName + " still has " + enemyHealth + " health left.")
        }
    
        // REMOVE PLAYER'S HEALTH BY SUBSTRACTING THE AMOUNT SET IN THE ENEMYATTACK VARIABLE 

        playerHealth = playerHealth - enemyAtack;

        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
          );

            // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

        // IF PLAYER CHOSES TO SKIP 

        }else if (promptFight == "skip" || promptFight == "SKIP"){
            window.alert(playerName + " has chosen to skip the fight!")

            var confirmSkip = window.confirm("Are you sure tou'd like to quit?");

            if(confirmsSkip){
                window.alert(playerName + " has decided to skip this fight. Goodbye!");

                playerMoney = playerMoney - 2;

            } else {
                fight();
            }

        } else {
            window.alert("You need to choose a valid option. Try again!");
        }


};

fight();