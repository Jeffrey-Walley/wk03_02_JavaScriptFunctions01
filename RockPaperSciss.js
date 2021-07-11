let hands = ["rock", "paper", "scissors"]

function getComputerHand() {
    return hands[parseInt(Math.random() * 10 % 3];
    }

    console.log(getComputerHand());

    function compare(choice1, choice2) {
        console.log("Hand 1 is: " + choice1);
        console.log("Hand 2 is: " + choice2);
    }

    let winner;
    if (choice1 === 'rock') {
        if (choice2 === 'rock') {
            winner = 'tie'
        }
    }