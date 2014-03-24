var contexto, elemento;
var alto, ancho;
var message;

// Escribe las coordenadas del mouse dentro del elemento.

function writeMessage(message) {
      contexto.fillStyle = "#3C65AB";
      contexto.fillRect(0, 0, 210, 25);
      contexto.font = '10pt Calibri';
      contexto.fillStyle = 'white';
      contexto.fillText(message, 5, 15);
    }
    
// Obtiene coordenadas dentro del elemento.

function getMousePos(elemento, evt) {
        var rect = elemento.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }

// Carga contexto de Canvas en el documento

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
function cargarMundo(){
    // Crea fondo de trabajo
        contexto.fillStyle = "#3C65AB";
        contexto.fillRect(0, 0, elemento.width, elemento.height);
        contexto.strokeStyle = 'white';
        contexto.strokeRect(10 , 10, elemento.width-20, elemento.height-20);
        
        contexto.font = '8pt Calibri';
        contexto.fillStyle = 'white';
        contexto.fillText('0', 2, 698);
        
        contexto.beginPath();
        contexto.strokeStyle = 'rgba(255,255,255,0.3)'
        
        // Crea las lineas blancas y numeros de fondo del paper
        
        for(i = 20; i <= elemento.height - 20; i = i + 10){
            contexto.moveTo(10,i);
            contexto.lineTo(elemento.width - 10, i);
            
            contexto.font = '4pt Calibri';
            contexto.fillStyle = 'white';
            contexto.fillText(i, 1, i);
            
            if(i <= elemento.width - 20){
                contexto.moveTo(i,10);
                contexto.lineTo(i, elemento.height - 10);
                contexto.fillText(i, i, 695);
            }
            
            //contexto.moveTo(10,30);
            //contexto.lineTo(alto-10, 30);
        }
            contexto.stroke();
}
function eventoMouse(){
    elemento.addEventListener('mousemove', function(evt) {
                var mousePos = getMousePos(elemento, evt);
                var message = 'Posición Mouse: X: ' + (mousePos.x - 10) + ', Y: ' + (elemento.height - mousePos.y - 10);
                writeMessage(message);
              }, false);
}

// Ejecuta al abrir la pagina

window.onload = function(){
   //Recibimos el elemento canvas
   contexto = cargaContextoCanvas('paper');
   
   if(contexto){
      //Si tengo el contexto, defino la función periódica
       cargarMundo();
       cargaIconos();  
       eventoMouse();           
   }
   
} 
 
      
  

      