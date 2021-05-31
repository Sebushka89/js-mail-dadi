var emailUser = prompt('Inserisci la tua Email');
var emailList =['himaxal626@revutap.com','unnysserrutt-1201@yopmail.com','enunippaja-0231@yopmail.com','elliffegenne-8954@yopmail.com', 'sebastian.rizzo@hotmail.it']
var check = false;

for (var i=1; i < emailList.length; i++) {
    if (emailList[i] === emailUser) {
        check = true;
    } 
}
if (check){
    alert('Accesso autorizzato');
} else {
    alert('Accesso negato');
}