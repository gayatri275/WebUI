<!DOCTYPE html> 

<html><head> 

<meta charset=utf-8 /> 

<title>Remove items from a dropdown list</title> 

</head><body><form> 

<select id="colorSelect"> 

<option>Red</option> 

<option>Green</option> 

<option>White</option> 

<option>Black</option> 

</select> 

<input type="button" onclick="removeColor()" value="Select and  Remove"> 

<script> 

    function removeColor() { 

        var x = document.getElementById("colorSelect") 

        x.remove(x.selectedIndex); 

    } 

</script> 

</form></body></html> 

 