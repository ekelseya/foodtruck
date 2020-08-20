# foodtruck
Who doesn't love a food truck website?

## Demo

See the live demo at https://wolftruck.herokuapp.com/

## Install
Although this looks like a PHP app to hosting platforms like Heroku, it's a static HTML/CSS/JavaScript website.

### Clone
Download or clone the repo: https://github.com/ekelseya/foodtruck.git

### New Mapbox Token
The mapbox token is url restricted. You will need to generate your own (https://www.mapbox.com/) and make the following changes:

<code>
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=YOUR.TOKEN.HERE', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'YOUR.TOKEN.HERE'
  }).addTo(mymap);
  </code>
  
  ## Run
  Open <code>home.html</code> 
