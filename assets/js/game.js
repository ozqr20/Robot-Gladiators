// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less




var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


  var fight = function(enemyName){

        while(playerHealth > 0 && enemyHealth > 0){
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

            if (promptFight == "skip" || promptFight == "SKIP"){
                var confirmSkip = window.confirm("Are you sure tou'd like to quit?");

                if(confirmSkip){
                    window.alert(playerName + " has decided to skip this fight. Goodbye!");
                    playerMoney = playerMoney - 10;
                    console.log("playerMoney", playerMoney);
                    break;
                }
            }

            enemyHealth = enemyHealth - playerAttack ;

            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );
            
            // CHECK ENEMY'S HEALTH

            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                  // award player money for winning
                playerMoney = playerMoney + 20;
                // leave while() loop since enemy is dead
                break;
            } else {
                window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
            }

            // REMOVE PLAYER'S HEALTH BY SUBSTRACTING THE AMOUNT SET IN THE ENEMYATTACK VARIABLE 

            playerHealth = playerHealth - enemyAttack;

            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );
            
            // CHECK PLAYER'S HEALTH

            if (playerHealth <= 0){
                window.alert(enemyName + "has died!");
                break;

            } else {
                window.alert(playerName + ' still has ' + playerHealth + ' health left.');
            }
        } // End of while loop
    }; // End of fight function 

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight([pickedEnemyName]);
  }