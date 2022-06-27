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

    if (promptFight == "fight" || promptFight == "FIGHT"){
            // generate random damage value based on player's attack power.
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

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

    var startGame = function(){

          // reset player stats
        playerHealth = 100;
        playerAttack = 10;
        playerMoney = 10;

        for(var i = 0; i < enemyNames.length; i++) {
            if (playerHealth > 0) {
                // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
                window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
                // pick new enemy to fight based on the index of the enemyNames array
                var pickedEnemyName = enemyNames[i];
                // reset enemyHealth before starting new fight
                enemyHealth = 50;

                // use debugger to pause script from running and check what's going on at that moment in the code
                // debugger;

                // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
                fight([pickedEnemyName])
            } else {
                window.alert("You have lost your robot in battle! Game Over!");
                break;
            }; // For loop ends 

            endGame();

        };

        startGame();
    };

    // function to end the entire game
    var endGame = function() {
      // if player is still alive, player wins!
        if (playerHealth > 0) {
            window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
        } 
        else {
            window.alert("You've lost your robot in battle.");
        }
    var playAgainConfirm = window.confirm("Would you like to play again?");

        if (playAgainConfirm) {
        // restart the game
        startGame();
        } 
        else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
        }

    };

    startGame();

// function to end the entire game
var endGame = function() {
    // if player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    } 
    else {
        window.alert("You've lost your robot in battle.");
    }
var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
    // restart the game
    startGame();
    } 
    else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }

};

var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

    // use switch to carry out action
    switch (shopOptionPrompt) {
        case "refill":
        case "REFILL":
            playerInfo.refillHealth();
            break;

        case "upgrade":
        case "UPGRADE":
            playerInfo.upgradeAttack();
            break;

        case "leave":
        case "LEAVE":
            window.alert("Leaving the store.");
            // do nothing, so function will end
            break;

        default:
            window.alert("You did not pick a valid option. Try again.");
            // call shop() again to force player to pick a valid option
            shop();
            break;
    }

};    

// function to generate a random numeric VALUE
var randomNumber = function(min,max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
  
    return value;
  };


  var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    }, //  comma!
    refillHealth: function() {
        if (this.money >= 7) {
          window.alert("Refilling player's health by 20 for 7 dollars.");
          this.health += 20;
          this.money -= 7;
        } 
        else {
          window.alert("You don't have enough money!");
        }
      },
      upgradeAttack: function() {
        if (this.money >= 7) {
          window.alert("Upgrading player's attack by 6 for 7 dollars.");
          this.attack += 6;
          this.money -= 7;
        } 
        else {
          window.alert("You don't have enough money!");
        }
      }
  };

  // Creating an Object array using []
  var enemyInfo = [
    {
      name: "Roborto",
      attack: randomNumber(10, 14)
    },
    {
      name: "Amy Android",
      attack: randomNumber(10, 14)
    },
    {
      name: "Robo Trumble",
      attack: randomNumber(10, 14)
    }
  ];
  
    startGame();