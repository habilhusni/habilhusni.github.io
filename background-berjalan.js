var body = document.body;


body.style.background = 'url("img2/valley-wide700.jpg") repeat-x center';


var img = document.createElement('img');
img.setAttribute('id', 'tower');
body.appendChild(img);


var img2 = document.createElement('img');
img2.setAttribute('id', 'rapunzel');
body.appendChild(img2);


var img3 = document.createElement('img');
img3.setAttribute('id', 'rapunzelHair');
body.appendChild(img3);


var img4 = document.createElement('img');
img4.setAttribute('id', 'flynnRider');
body.appendChild(img4);


//Rapunzel
var div = document.createElement('div');
div.setAttribute('id', 'rapAsk');
body.appendChild(div);

var par = document.createElement('p');
par.setAttribute('id', 'soal1');
div.appendChild(par);

var nextBut = document.createElement('button');
var nextButText = document.createTextNode('Next');
nextBut.appendChild(nextButText);
nextBut.setAttribute('id', 'nextButton');
div.appendChild(nextBut);
var nextButton = document.getElementById('nextButton');
nextButton.style.position ='absolute';
nextButton.style.left = '80px';
nextButton.style.top = '80px';
nextButton.style.width = '50px';
nextButton.style.height = '20px';

var soal1 = document.getElementById('soal1');
soal1.style.position ='absolute';
soal1.style.left = '20px';
soal1.style.top = '-20px';

var rapAsk = document.getElementById('rapAsk');
rapAsk.style.width = '200px';
rapAsk.style.height = '142px';
rapAsk.style.position = 'absolute';
rapAsk.style.top = '80px';
rapAsk.style.left = '720px';
rapAsk.style.backgroundColor = 'white';
rapAsk.style.background = 'url("img2/askBoxEdit.png") no-repeat center';


//Flynn
var div2 = document.createElement('div');
div2.setAttribute('id', 'flynnAns');
body.appendChild(div2);

var par2 = document.createElement('p');
par2.setAttribute('id', 'jawab1');
div2.appendChild(par2);

var nextBut2 = document.createElement('button');
var nextBut2Text = document.createTextNode('Next');
nextBut2.appendChild(nextBut2Text);
nextBut2.setAttribute('id', 'nextButton2');
div.appendChild(nextBut2);
var nextButton2 = document.getElementById('nextButton2');
nextButton2.style.position ='absolute';
nextButton2.style.left = '10px';
nextButton2.style.top = '350px';
nextButton2.style.width = '50px';
nextButton2.style.height = '20px';
nextButton2.style.zIndex = '4';

var jawab1 = document.getElementById('jawab1');
jawab1.style.position ='absolute';
jawab1.style.left = '20px';
jawab1.style.top = '-20px';

var flynnAns = document.getElementById('flynnAns');
flynnAns.style.width = '200px';
flynnAns.style.height = '142px';
flynnAns.style.position = 'absolute';
flynnAns.style.top = '350px';
flynnAns.style.left = '650px';
flynnAns.style.backgroundColor = 'white';
flynnAns.style.background = 'url("img2/askBoxEdit.png") no-repeat center';


var image = document.getElementById('tower');
var char1 = document.getElementById('rapunzel');
var char2 = document.getElementById('rapunzelHair');
var char3 = document.getElementById('flynnRider');


image.src = "img2/tower.jpg";
char1.src = "img2/rapunzelEdit2.png";
char2.src = "img2/hairRapunzel.png";
char3.src = "img2/flynnRyderEdit.png";


char2.style.width = '45px';
char2.style.position = 'relative';
char2.style.left = '581px';
char2.style.top = '-310px';


char1.style.width = '100px';
char1.style.position = 'relative';
char1.style.left = '680px';
char1.style.top = '-310px';


char3.style.width = '100px';
char3.style.position = 'relative';
char3.style.left = '440px';
char3.style.top = '0px';


image.style.position = 'relative';
image.style.left = '70%';
image.style.top = '24px';
image.style.height = '95%';


var button = document.createElement('button');
var jalan = document.createTextNode('MOVE');
button.appendChild(jalan);
button.setAttribute('id', 'move');
body.appendChild(button);
var pencetan = document.getElementById('move');
pencetan.style.position = 'relative';
pencetan.style.left = '270px';
pencetan.style.top = '-100px';
pencetan.style.visibility = 'hidden';

var inc = 1;
char2.style.webkitTransform = 'scaleY('+inc+')';
char2.style.transformOrigin = '0 0';


button.addEventListener('click', function() {
  char2.style.webkitTransform = 'scaleY('+(inc=inc+0.5)+')';
  if(inc >= 6) {
	soal1.innerHTML = '<h4>Sekarang kamu bisa naik kesini!</h4>';
	jawab1.innerHTML = '<h4>Terima kasih Rapunzel!</h4>';
	char2.style.webkitTransform = 'scaleY(6)';
  }	
});


//CONVERSATION
nextButton2.style.visibility = 'hidden';
soal1.innerHTML = '<h4>Hi Flynn!</h4>';
nextButton.addEventListener('click', function() {
	jawab1.innerHTML = '<h4>Hi Rapunzel, bagaimana caranya saya dapat pergi kesana?</h4>';
	nextButton.style.visibility = 'hidden';
	nextButton2.style.visibility = 'visible';
});
nextButton2.addEventListener('click', function() {
	soal1.innerHTML = '<h4>Tekan tombol MOVE di sebelahmu!</h4>';
	nextButton2.style.visibility = 'hidden';
    pencetan.style.visibility = 'visible';
});