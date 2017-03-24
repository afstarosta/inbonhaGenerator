function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}
generate();

function generate(){
  if(Math.random() > 0.5){
    names = ["CAS","MÔ","CÃO","CA","IN","BO","NHA","CE","GA","LI","BI","LI","MA","DU"];
  }else{
    names = ["CAS","MÔ","CÃO","CA","NI","BO","NHA","CE","GA","LI","BI","LI","MA","DU"]
  }
  shuffle(names);

  document.getElementById("tf1").textContent = names[0];
  document.getElementById("tf2").textContent = names[1];
  document.getElementById("tf3").textContent = names[2];
  document.getElementById("tf4").textContent = names[3];
  document.getElementById("tf5").textContent = names[4];
  document.getElementById("tf6").textContent = names[5];
  document.getElementById("tf7").textContent = names[6];
  document.getElementById("tf8").textContent = names[7];
  document.getElementById("tf9").textContent = names[8];
  document.getElementById("tf10").textContent = names[9];
  document.getElementById("tf11").textContent = names[10];
  document.getElementById("tf12").textContent = names[11];
  document.getElementById("tf13").textContent = names[12];
  document.getElementById("tf14").textContent = names[13];
}
