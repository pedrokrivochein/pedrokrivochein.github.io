var aboutme = document.getElementById("aboutme");
var aboutmeText = document.getElementById("aboutmetext");
var aboutmeCircle = document.getElementById("aboutmecircle");
var aboutmeMiddleball = document.getElementById("aboutmemiddleball");
var aboutmeMiddleballOutline = document.getElementById("aboutmemiddleballoutline");
var contactme = document.getElementById("contact");
var contactText = document.getElementById("contacttext");
var contactMiddleball = document.getElementById("contactmiddleball");
var contactMiddleballOutline = document.getElementById("contactmiddleballoutline");

window.addEventListener("scroll", function () {
    var value = -10 + window.scrollY / 40;
    if (value >= 10) {
        value = 10;
    }
    aboutme.style.transform = "skewY(" + value + "deg)";
    aboutmeText.style.transform = "skewY(" + -value + "deg)";
    aboutmeCircle.style.transform = "skewY(" + -value + "deg)";
    aboutmeMiddleball.style.transform = "translateX(-8px) translateY(-8px) skewY(" + -value + "deg)";
    aboutmeMiddleballOutline.style.transform = "translateX(-17px) translateY(-17px) skewY(" + -value + "deg)";
});

window.addEventListener("scroll", function () {
    var value = -10 + window.scrollY / 60;
    if (value >= 10) {
        value = 10;
    }
    contactme.style.transform = "skewY(" + -value + "deg)";
    contactText.style.transform = "skewY(" + value + "deg)";
    contactCircle.style.transform = "skewY(" + value + "deg)";
    contactMiddleball.style.transform = "translateX(-8px) translateY(-8px) skewY(" + value + "deg)";
    contactMiddleballOutline.style.transform = "translateX(-17px) translateY(-17px) skewY(" + value + "deg)";
});

fibonacciFunction();

function fibonacciFunction() {

    //Relogio Fibonacci

    var x = new Date();
    var hour = x.getHours();
    var minute = x.getMinutes();


    //Hora - Vermelho
    //Minuto - Verde
    //Azul - Ambos

    //5 em 5 minutos

    //Hora = Vermelho + Azul
    //Minutos = (Verde + Azul) * 5

    //Colocar minutos de 5 em 5 minutos

    //console.log("Hora: " + hour + " Minuto: " + minute);

    if (hour >= 12) hour -= 12; //Hora de 12 em 12
    minute -= minute % 5 //Minutos de 5 em 5

    //console.log("Hora atualizada: " + hour + " Minuto atualizado: " + minute);

    /*
    Vermelho
    
    Vermelho = Hora - Azul
    
    Verde
    
    Verde = Minutos/5 - Azul
    
    Azul
    
    Azul = Hora - Vermelho
    Azul = Minutos/5 - Verde
    
    
    Azul = Hora - Vermelho = Minutos/5 - Verde
    
    Vermelho + Verde + Azul = 12
    
    */

    var colors = [0, 0, 0]; // Vermelho, verde e azul.
    var placedColors = [0, 0, 0]
    var colorsName = ["rgba(255, 0, 0, 1.0)", "rgba(0, 255, 0, 1.0)", "rgba(0, 0, 255, 1.0)"]
    colors[0] = hour - colors[2];
    colors[1] = minute / 5 - colors[2];

    if (colors[0] + colors[1] > 12) {
        colors[2] = (colors[0] + colors[1]) - 12; // Azul vira a diferenca entre vermelho e verde ate 12.
        colors[0] -= colors[2]; // Tira a diferença (azul) de verde e vermelho.
        colors[1] -= colors[2];
    }

    if (colors[0] == 4 && colors[1] == 4 && colors[2] == 0) { // Impedir uma exceção. Exemplo: Vermelho = 4 e verde = 4.
        colors[2] = 1;
        colors[0] -= 1;
        colors[1] -= 1
    }

    //console.log("Vermelho: " + colors[0] + " Verde: " + colors[1] + " Azul: " + colors[2])

    var holder = ["one", "one2", "two", "three", "five"];
    var holderBool = [0, 0, 0, 0, 0];
    var fibonacci = [1, 1, 2, 3, 5];

    for (var i = 0; i < colors.length; i++) { // Coloca primeiro as peças cujo valor ja existe na sequência de fibonacci (precisam de apenas um espaço).
        for (var a = 0; a < fibonacci.length; a++) {
            if (colors[i] == fibonacci[a] && placedColors[i] == 0 && holderBool[a] == 0) {
                document.getElementById(holder[a]).style.backgroundColor = colorsName[i];
                placedColors[i] = 1;
                holderBool[a] = 1;
            }
        }
    }

    for (var i = 0; i < colors.length; i++) { // Coloca as peças que precisam de mais de um número da sequência de fibonacci para gerar seu valor para formar seu valor.
        if (placedColors[i] == 0) {           // Isso ocorre quando o valor não está na sequência ou está porém ja existe uma peça nessa posição.
            var count = 0;
            for (var a = fibonacci.length; a >= 0; a--) {
                if (holderBool[a] == 0) {
                    if (colors[i] != count) {
                        count += fibonacci[a];
                        if (colors[i] >= count) {
                            document.getElementById(holder[a]).style.backgroundColor = colorsName[i];
                            holderBool[a] = 1;
                        } else {
                            count -= fibonacci[a];
                        }
                    } else {
                        placedColors[i] = 1;
                    }
                }
            }
        }
    }
    setTimeout(() => {
        fibonacciFunction();
    }, 1000 * 60 * 5);
}
