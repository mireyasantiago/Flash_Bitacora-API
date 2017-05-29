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
/*Funcion para modales de materialize*/

 $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });
          
/* para el datepicker*/

$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
        