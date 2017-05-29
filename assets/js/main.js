alert("hola");
function iniciarMapa(){
        var mapaContenedor = document.getElementById("mapa");
        var coordenadas = {lat: -12.1191427 , lng: -77.0349046 };
        var mapa = new google.maps.Map(
          mapaContenedor,
          {
            zoom: 18,
            center: coordenadas
          }
        );
      }