var testObjekt = new XMLHttpRequest();
testObjekt.onload = function() {
    if (testObjekt.readyState == 4 && testObjekt.status == 200) {
        myObj = JSON.parse(testObjekt.responseText);
        var myNewtable = document.getElementById("mytable");
        myNewtable.innerHTML=""
        var zaglavlje = document.createElement("TH");
        var zaglavlje1 = document.createElement("TH");
        var naslov1 = document.createTextNode("Slika usera");
        var naslov = document.createTextNode("Imena usera");
        zaglavlje1.appendChild(naslov1);
        zaglavlje.appendChild(naslov);
        myNewtable.appendChild(zaglavlje);
        myNewtable.appendChild(zaglavlje1);
    for (var i=0;i<myObj.length;i++) {
        var tables_row = document.createElement("TR");
        var tables_row1 = document.createElement("TR");
        var celije1 = document.createElement("TD");
        var celije = document.createElement("TD");
        var images = document.createElement("IMG");
        images.setAttribute("src",myObj[i].avatar_url);
        images.setAttribute("width",100);
       	var user_linkovi = document.createElement("A");
        user_linkovi.setAttribute("href",myObj[i].html_url);
        user_linkovi.appendChild(images);
        myNewtable.appendChild(tables_row);
        tables_row.appendChild(celije);
        tables_row.appendChild(celije1);
        celije1.appendChild(user_linkovi);
        celije.innerHTML += "<br>" +myObj[i].login;
        }
}
};
function myfunc() {
var username = document.getElementById("unos").value;
if(username==="") {username="octocat"};
var api = 'https://api.github.com/users/'+username+'/followers'
testObjekt.open("GET", api, true);
testObjekt.send();

}


function handle(e){
      if(e.keyCode === 13){
          myfunc();
      }
  }
