<html>
<head>
<title>
Race
</title>
<script>


//This fuction will give each car a 1/2 chance to increase its position by 1. When reaching the

//fifth position it win. If they get there at the same time then there will be a tie.

function go(){
 document.Race.Racer1Pos.value = parseInt(document.Race.Racer1Pos.value) + Math.floor(Math.random()*2);
 document.Race.Racer2Pos.value = parseInt(document.Race.Racer2Pos.value) + Math.floor(Math.random()*2);
 if(document.Race.Racer1Pos.value =="2"){ document.Racer1Image.src= "pos2.jpg"; }

 else if(document.Race.Racer1Pos.value == "3"){ document.Racer1Image.src= "pos3.jpg"; }
 else if(document.Race.Racer1Pos.value == "4"){ document.Racer1Image.src = "pos4.jpg"; }
 else if(document.Race.Racer1Pos.value == "5"){ document.Racer1Image.src = "pos4.jpg"; }

 if(document.Race.Racer2Pos.value == "2"){ document.Racer2Image.src = "pos2.jpg"; }
 else if(document.Race.Racer2Pos.value == "3"){ document.Racer2Image.src = "pos3.jpg"; }
 else if(document.Race.Racer2Pos.value == "4"){ document.Racer2Image.src = "pos4.jpg"; }
 else if(document.Race.Racer2Pos.value == "5"){ document.Racer2Image.src = "pos5.jpg"; }


 if(document.Race.Racer1Pos.value < 5 && document.Race.Racer2Pos.value < 5){ setTimeout("go()",1000) }
 else if(parseInt(document.Race.Racer1Pos.value) == 5 && parseInt(document.Race.Racer2Pos.value) == "5"){
  alert("It is a tie!");
  resetRacers();
 }
 else if(document.Race.Racer1Pos.value == 5){
  R1Win();
 }
 else {
  R2Win();
 }


}

//does a popup saying Racer 1 won and if it was betted on then the amount bet goes into the Walllet
//otherwise the amount bet is taken out

function R1Win(){
 alert("Racer 1 wins!")
 if(document.Race.betamount.value == "1"){
  document.Race.Wallet.value = parseInt(document.Race.Wallet.value)+parseInt(document.Race.wager.value);
 }
 else{
  document.Race.Wallet.value = parseInt(document.Race.Wallet.value) - parseInt(document.Race.wager.value);
 }
 resetRacers();
}

//exactly the same as the previous function except this is for when racer2 wins and the outcome of
//a wager

function R2Win(){
 alert("Racer 2 wins!");
 if(document.Race.betamount.value == "2"){
  document.Race.Wallet.value = parseInt(document.Race.Wallet.value)+parseInt(document.Race.wager.value);
 }
 else{
  document.Race.Wallet.value = parseInt(document.Race.Wallet.value) -parseInt(document.Race.wager.value);
 }
  resetRacers();
 }

//After the whole race is over, the images revert to what they were before the race started and if
//the wallet has reached 0 or below it goes back to the default amount of 100

function resetRacers(){
 document.Race.Racer1Pos.value="1";
 document.Race.Racer2Pos.value="1";
 document.Racer1Image.src="pos1.jpg";
 document.Racer2Image.src="pos1.jpg";
 if (document.Race.Wallet.value <= 0){
  document.Race.Wallet.value = "100";
 }
}
</script>
</head>
<body>

<form name = "Race">


<img src="pos1.jpg" name="Racer1Image"><br>
<img src="pos1.jpg" name="Racer2Image"><br>


Car 1 position: <input type=text value="1" name="Racer1Pos"><br>

Car 2 position: <input type=text value="1" name="Racer2Pos"><br>

Which car?: <input type = text value = "1" name ="wager">

Bet Amount: <input type = text value = "10" name = "betamount">

Wallet:<input type = text value = "100" name= "Wallet"><br>


<input type=button value= "race!" name = "startbutton" onclick='go()'>

</form>



</body>
