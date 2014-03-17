var contexto, elemento;
var alto, ancho;
var message;

function writeMessage(message) {
      contexto.fillStyle = "#3C65AB";
      contexto.fillRect(0, 0, 210, 25);
      contexto.font = '10pt Calibri';
      contexto.fillStyle = 'white';
      contexto.fillText(message, 5, 15);
    }
function getMousePos(elemento, evt) {
        var rect = elemento.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }

function cargaContextoCanvas(idCanvas){
   elemento = document.getElementById(idCanvas);
   if(elemento && elemento.getContext){
      var contexto = elemento.getContext('2d');
      if(contexto){
         return contexto;
      }
   }
   return FALSE;
}


window.onload = function(){
   //Recibimos el elemento canvas
   contexto = cargaContextoCanvas('paper');
   if(contexto){
      //Si tengo el contexto, defino la función periódica
        contexto.fillStyle = "#3C65AB";
        contexto.fillRect(0,0,elemento.width,elemento.height);
        contexto.strokeStyle = 'white';
        contexto.strokeRect(10 , 10, elemento.width-20, elemento.height-20);
        
        contexto.beginPath();
        contexto.strokeStyle = 'rgba(255,255,255,0.3)'
        
        for(i=20;i<=elemento.height-20;i=i+10){
            contexto.moveTo(10,i);
            contexto.lineTo(elemento.width-10, i);
            if(i<=elemento.width-20){
                contexto.moveTo(i,10);
                contexto.lineTo(i,elemento.height-10);
            }
            
            //contexto.moveTo(10,30);
            //contexto.lineTo(alto-10, 30);
        }
            contexto.stroke();
            
            elemento.addEventListener('mousemove', function(evt) {
                var mousePos = getMousePos(elemento, evt);
                
                var message = 'Posición Mouse: X: ' + mousePos.x + ', Y: ' + mousePos.y;
                writeMessage(message);
              }, false);
            
   }
   
} 
 
      
  

      