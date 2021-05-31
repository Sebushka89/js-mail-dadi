var emailUser = prompt('Inserisci la tua Email');
var emailList =['himaxal626@revutap.com','unnysserrutt-1201@yopmail.com','enunippaja-0231@yopmail.com','elliffegenne-8954@yopmail.com', 'sebastian.rizzo@hotmail.it']
var check = false;

for (var i = 0; i < emailList.length; i++) {
    if (emailList[i] === emailUser) {
        check = true;
    } 
}
if (check === true){
    alert('Accesso autorizzato');
} else {
    alert('Accesso negato');
}


var player = Math.floor(Math.random() * 6) + 1;
    console.log(player);
var computer = Math.floor(Math.random() * 6) + 1;
    console.log(computer);

if (player > computer) {
    document.getElementById('dice').innerHTML = 'Hai vinto tu!!!';
} else if (player == computer) {
    document.getElementById('dice').innerHTML = 'Pareggiato!!!';
} else {
    document.getElementById('dice').innerHTML = 'Ha vinto il computer!!!';
}
  
