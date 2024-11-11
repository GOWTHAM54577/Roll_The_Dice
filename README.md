# Roll_The_Dice

# index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dice</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Playpen+Sans:wght@100..800&family=Playwrite+CU:wght@100..400&display=swap" rel="stylesheet">
    <style>
        body {
            background-color: #4A628A;
        }
        h1 {
            text-align: center;
            font-size: 8rem;
            font-family: "Playfair Display", serif;
            font-optical-sizing: auto;
            font-weight: 1000;
            font-style: normal;
        }
        
        #playerForm {
            text-align: center;
            font-size: 2rem;
            margin: 50px;
            font-family: "Playfair Display", serif;
            font-optical-sizing: auto;
            font-weight: 700;
            font-style: normal;
        }
        
        button {
            text-align: center;
            font-family: "Playfair Display", serif;
            font-optical-sizing: auto;
            font-weight: 700;
            font-style: normal;
            padding: 15px 40px;
            border-radius: 12px;
            cursor: pointer;
        }
        
        button:hover {
            background-color: #285299;
            border-radius: 12px;
        }
        
        input[type="text"] {
            font-family: "Montserrat", sans-serif;
            font-size: 2rem;
            font-weight: bold;
            color: #646262;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        
        form input {
            margin-left: 20px;
            border-radius: 12px;
        }
        
        input[type="text"]:focus {
            color: #000000;
            font-weight: 1000;
            background-color: #F0F8FF;
            border-color: #000000;
            outline: #000000;
            font-family: 'Indie Flower', cursive;
        }
        
        input[type="text"]:valid {
            color: #000000;
            font-weight: 1000;
            background-color: #F0F8FF;
            border-color: #000000;
            outline: #000000;
            font-family: 'Indie Flower', cursive;
        }
        
        footer {
            margin-top: 5%;
            color: black !important;
            text-align: center;
            font-family: 'Indie Flower', cursive;
        }

        @media(min-width: 481px) and (max-width : 600px){
            body {
              background-color: #4A628A;
            }
            h1{
                font-size: 3rem ;
                margin: 50px;
                margin-bottom: 100px;
            }
            form label{
                text-align: center;
                font-size: 1.5rem;
            }
            form input{
                text-align: center;
            }
            input[type="text"] {
                width: 300px;
                padding: 8px;
                font-size: 1rem;
            }
            button{
                padding: 10px 50px;
        }
    }
        @media(max-width: 480px ){
            body{
                background-color: #4A628A;
            }
            h1{
                margin: 60px;
                margin-top: 20%;
                font-size: 1.8rem;
            }
            form label{
                text-align: center;
                font-size: 1rem;
            }
            form input{
                text-align: center;
            }
            input[type="text"] {
                width: 200px; 
                padding: 8px;
                font-size: 0.9rem;
            }
            button{
                padding: 10px 50px;
            }

        }
          
    </style>
</head>
<body>

    <h1>Enter Player Names</h1>

    <form id="playerForm">
        <label for="player1">Player 1 :</label>
        <input type="text" id="player1" name="player1" required placeholder="Enter The Your Name">
        <br><br>

        <label for="player2">Player 2 :</label>
        <input type="text" id="player2" name="player2" required placeholder="Enter The Opponent Name">
        <br><br>

        <button type="button" onclick="playGame()" >Play</button>
    </form>
    <footer>
        CREATED BY 🎲 GOWTHAM N🎲 
    </footer>

    <script>
        function playGame() {
            const player1 = document.getElementById("player1").value;
            const player2 = document.getElementById("player2").value;
            if (!player1 || !player2) {
                alert("Please enter names for both players.");
            } else {
                localStorage.setItem("player1",player1);
                localStorage.setItem("player2",player2);
                window.location.href="page2.html";
            }
            
        }
    </script>

</body>
</html>
