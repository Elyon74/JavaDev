// JavaScript source code
    // <BR> saut de ligne
function datee() {
    var date = new Date();
    date.setMonth(2)
    var hours = date.getHours();
    var min = date.getMinutes();
    var year = date.getFullYear();
    var day = date.getDate();
    var month = date.getMonth();
    var txtAccueil = hours < 18 ? "Bonjour ," : "Bonsoir ,";
    console.log("dt.getDate()=" + day)
    console.log("dt.getMonth()=" + month);
    console.log("dt.getFullYear()=" + year);
    console.log("dt.getHours()=" + hours);
    console.log("dt.getMinutes()=" + min);
    document.write(txtAccueil);
    var date2 = "<BR><BR>Votre navigateur indique que nous somme le " + day + " " + month + " " + year + " " + "il est : " + hours + ":" + min;
    return date2;
}
function test() {

}
// Execution de la fonction
var date1 = datee();
document.write(date1);