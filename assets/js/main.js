//Obtener el nodo boton 'enviarDatos' del HTML
var printData = document.getElementById('enviarDatos');
//Funcion que reinicia el formulario, limpia los valores ingresados
function cleanForm() {
    //Obtener el nodo formulario "dataSheet" y
    document.getElementById("dataSheet").reset();
  }
//Asociar al evento onclick la impresión de los datos obtenidos
printData.onclick = function (){
    var card;
    var name = document.getElementById('name').value;
    var lastName = document.getElementById('lastname').value;
    var dni = document.getElementById('dni').value;
    var address = document.getElementById('address').value;
    var board = document.getElementById('board');
    if (name == "" || lastName == "" || dni == "" || address == "") {
      alert("Debe ingresar todos los Datos solicitados");
    }else {
      card = "<ul><li>Nombre: "+name+"</li>"+
             "<li>Apellido: "+lastName+"</li>"+
             "<li>DNI: "+dni+"</li>"+
             "<li>Direccion: "+address+"</li>"+
             "</ul>";
      board.innerHTML = card;
      cleanForm();
    }
    //return false;
  }
