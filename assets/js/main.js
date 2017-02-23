var imprimirDatos = document.getElementById('enviarDatos');
imprimirDatos.onclick = function (){
    var card = "";
    var name = document.getElementById('name').value;
    var lastName = document.getElementById('lastname').value;
    var dni = document.getElementById('dni').value;
    var address = document.getElementById('address').value;
    var board = document.getElementById('board');
    card = "<ul><li>Nombre: "+name+"</li>"+
           "<li>Apellido: "+lastName+"</li>"+
           "<li>DNI: "+dni+"</li>"+
           "<li>Direccion: "+address+"</li>"+
           "</ul>";
    board.innerHTML = card;
    //return false;
  }
