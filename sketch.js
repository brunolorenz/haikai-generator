var letra1;
var letra2;
var letra3;

function preload () {
  myFont = loadFont('assets/BreeSerif-Regular.ttf')
  frase1 = loadStrings("frases1.txt");
  frase2 = loadStrings("frases2.txt")
  frase3 = loadStrings("frases3.txt");

}

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(255,253,234);
  textFont(myFont);
  fill(31,31,122,100);
  textSize(20);
  text("no Ateliê de Artefatos Pós Normais da effêmera, basta pressionar a tela para criar seu próprio objeto",50,50,150);

}

function touchStarted() {

  var catalogo = random(9999);
  var linha1 = random(frase1)
  var linha2 = random(frase2)
	var linha3 = random(frase3)
  var centrov = windowWidth/2;
  var centroh = windowHeight/2;

textSize(40);
textStyle(BOLD);
textAlign(CENTER);
textFont(myFont);
background(255,253,234);
fill(31,31,122,255);
text(linha1, centrov, centroh-50);
fill(31,31,122,200);
text(linha2, centrov, centroh);
fill(31,31,122,150);
text(linha3, centrov, centroh+50);

textSize(12);
fill(31,31,31,150);
text("S E U  H A I K A I   nº "+round(catalogo), centrov, 50);


}
