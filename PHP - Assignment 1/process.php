<?php  
// Get the answer submitted in the html form
  $goodTaste = $_GET["yes"];
  $badTaste = $_GET["no"];
  echo $goodTaste;
  
  // Evaluate taste value
  if ($goodTaste == "Yes") {
    echo "Are you sure about that??";
  } else if ($badTaste == "No") {
    echo "At least you know your place.";
  } else {
    echo "Invalid answer, please try again.";
  }

  $shoppingList = array("Milk", "Eggs");
  
  // Adds an element to the array. First arg is the array to target and second is the value
  array_push($shoppingList, $_Get["item"]);

  foreach ($shoppingList as $loopdata){
      echo "You need: $loopdata \n";
  }
?>
