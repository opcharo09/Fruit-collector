$(document).ready(function() {

    // The number we will manipulate by clicking fruits. Our "current guess" number.
    var yourMatchingNumber = 0;
  
    // Generates the random "target number" we will try to reach.
    var randomNum = randomNumGen();
  
    // Setting up our starting variables.
    var wins = 0;
    var losses = 0;
    var fruits;
  
    // Function that generates random values for our fruits and returns our fruits object.
    function randomNumFruits() {
      // Crystals object.
      return {
        red: {
          points: Math.floor(Math.random() * 12) + 1,
          imageUrl: "assets/images/eduardo-sanchez-235047-unsplash.jpg"
        },
        blue: {
          points: Math.floor(Math.random() * 12) + 1,
          imageUrl: "assets/images/graphic-node-1360832-unsplash.jpg"
        },
        yellow: {
          points: Math.floor(Math.random() * 12) + 1,
          imageUrl: "assets/images/jo-lanta-711875-unsplash.jpg"
        },
        green: {
          points: Math.floor(Math.random() * 12) + 1,
          imageUrl: "assets/images/marten-bjork-436940-unsplash.jpg"
        }
      };
    }
  
    // Function to create a random number between 19 and 120.
    function randomNumGen() {
      return Math.floor(Math.random() * 102) + 19;
    }
  
    // Function that resets the game.
    function setGame() {
      // Make our current total number 0.
      yourMatchingNumber = 0;
      // Generate random fruit values.
      fruits = randomNumFruits();
      // Generate a random target number and render it to the page.
      randomNum = randomNumGen();
      $("#random-area").text(randomNum);
    }
  
    // Function that handles updating the page.
    function updateDom(didUserWin) {
      $("#win-area").empty();
  
      // If the user won...
      if (didUserWin === true) {
        // Show victory message, restart the game, and render the new "current guess" number.
        $("#win-area").append($("<p>").text("You won!!"));
        setGame();
        renderMatchingNumber();
      }
      // If the user lost...
      else if (didUserWin === false) {
        // Show defeat message, restart the game, and render the new "current guess" number.
        $("#win-area").append($("<p>").text("You lost!!"));
        setGame();
        renderMatchingNumber();
      }
  
      // Building our win/loss display and appending it to the page.
      var wSpan = $("<span>").text(wins);
      var lSpan = $("<span>").text(losses);
  
      var pWins = $("<p>").text("Wins: ");
      var pLosses = $("<p>").text("Losses: ");
  
      pWins.append(wSpan);
      pLosses.append(lSpan);
  
      $("#win-area").append(pWins);
      $("#win-area").append(pLosses);
    }
  
    // Function to render our fruits to the page.
    function renderFruits() {
      for (var key in fruits) {
        var fruitDiv = $("<div class='fruits-button' data-name='" + key + "'>");
        var fruitImg = $("<img alt='image' class='fruit-img'>").attr("src", fruits[key].imageUrl);
        fruitDiv.append(fruitImg);
        $("#fruit-area").append(fruitDiv);
      }
    }
  
    // Function to update our "current guess" number. We are passing in the fruit that was clicked as an argument.
    function updateMatchingNumber(fruit) {
      // Update our "current guess" number based on which fruit was clicked.
      yourMatchingNumber += fruits[fruit.attr("data-name")].points;
    }
  
    // Function that will render your "current guess" number to the page.
    function renderMatchingNumber() {
      var scoreNumDiv = $("<div id='score-number'>").text(yourMatchingNumber);
      $("#score-area").html();
      $("#score-area").html(scoreNumDiv);
    }
  
    // Call our functions to start the game!
    setGame();
    updateDom();
    renderFruits();
    renderMatchingNumber();
  
    // Here we create an on.click event for the fruits.
    $(".fruits-button").on("click", function(event) {
      // Update our "current guess" number and re-render it.
      updateMatchingNumber($(this));
      renderMatchingNumber();
  
      // Check to see if we have won or lost.
      // If our current guess number equals the target number..
      if (yourMatchingNumber === randomNum) {
        // Increment wins, restart the game, and update the page.
        wins++;
        setGame();
        updateDom(true);
      }
      // If our guess number exceeded our target number...
      else if (yourMatchingNumber > randomNum) {
        // Increment losses, restart the game, and update the page.
        losses++;
        setGame();
        updateDom(false);
      }
    });
  
  });
  