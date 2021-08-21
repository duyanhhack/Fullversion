var myCenter = new google.maps.LatLng(21.0896254, 105.79711676);

function initialize() {
var mapProp = {
  center:myCenter,
  zoom:12,
  scrollwheel:false,
  draggable:false,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
var marker = new google.maps.Marker({
  position:myCenter,
  });
marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);

// Animation
$(document).ready(function(){

     $(window).scroll(function(){
          $('.slideanim').each(function(){
               var pos = $(this).offset().top

               var winTop = $(window).scrollTop()
               if(pos < winTop + 700){
                    $(this).addClass("slide")
               }
          })
     })
})