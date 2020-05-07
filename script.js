// referenced https://www.w3schools.com/html/html5_geolocation.asp

let x = document.getElementById("latitudeLongitude");
function getLocation(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
  } else{
    x.innerHTML = "Sorry, geolocation is not supported by your browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Your latitude is: " + position.coords.latitude + "<br>Your longitude is: " + position.coords.longitude + "<br>(It's not completely accurate, but it's close enough.)";
}
