<?php
  $authorName = "Nathan";
  
  $num1 = 3;
  $num2 = 7;
  $math = $num1 + $num2;
  
  $videoGames = array("Factorio", "Demoncrawl", "Into The Breach", "FTL", "Titan Souls");
  
  echo "Welcome to my page! It was made by me, $authorName.";
  echo "\n";
  echo "num1: $num1 \nnum2: $num2";
  echo "\n";
  echo $math;
  echo "\n";
  
  // Basically a for loop but shorter. $videoGames array is assigned to $loopdata and the foreach loop will go throught every element in the $videoGames array
  foreach ($videoGames as $loopdata){
      echo "$loopdata \n";
  }
  
  echo "I've spent too many hours in $videoGames[0]."
?>
