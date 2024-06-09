document.addEventListener("DOMContentLoaded", function() {
    const line1 = "GRILL RESTAURANT";
    const line2 = "FOR THE WHOLE FAMILY";
    const speed = 100; 
    const line1Span = document.getElementById("line1");
    const line2Span = document.getElementById("line2");
    let i = 0;
    let j = 0;
    function typeWriterLine1() {
        if (i < line1.length) {
            line1Span.textContent += line1.charAt(i);
            i++;
            setTimeout(typeWriterLine1, speed);
        }
    }
    function typeWriterLine2() {
        if (j < line2.length) {
            line2Span.textContent += line2.charAt(j);
            j++;
            setTimeout(typeWriterLine2, speed);
        }
    }
    setTimeout(typeWriterLine1, speed);
    setTimeout(typeWriterLine2, line1.length * speed + 100); 
});

// FNÇAO PARA MOSTRAR O BOTAO NA SECTION 1
function mostrarBotao(){
    let btnMostrar = document.getElementById(`agende-btn`)
    btnMostrar.style.display = 'block'

}

setTimeout(mostrarBotao, 4000)



function agenda(){
    alert('Em desenvolvimento!')
}


// FUNÇÃO PARA EVENTO DOS CARDS
// CARD - 1
window.addEventListener('scroll', function () {
    let card = document.getElementById('card-1');
    let cardPosition = card.getBoundingClientRect().bottom; // Pegue a posição inferior do cartão
    let viewportHeight = window.innerHeight;
   
    if (cardPosition < viewportHeight) {
        // O elemento está dentro da viewport, então mostra o card
        card.style.opacity = '1';
        card.style.transform = 'translateY(-5%)';
        card.style.transition = '1.5s ';
    } else {
        // O elemento está fora da viewport, então esconde o card
        card.style.opacity = '0';
        card.style.transform = 'translateY(10%)';
        card.style.transition = '2s ';
    }
});
// CARD -2
window.addEventListener('scroll', function () {
    let card = document.getElementById('card-2');
    let cardPosition = card.getBoundingClientRect().bottom; // Pegue a posição inferior do cartão
    let viewportHeight = window.innerHeight;

    if (cardPosition < viewportHeight) {
        // O elemento está dentro da viewport, então mostra o card
        card.style.opacity = '1';
        card.style.transform = 'translateY(-5%)';
        card.style.transition = '3s ';
    } else {
        // O elemento está fora da viewport, então esconde o card
        card.style.opacity = '0';
        card.style.transform = 'translateY(10%)';
        card.style.transition = '2s ';
    }
});

// CARD - 3
window.addEventListener('scroll', function () {
    let card = document.getElementById('card-3');
    let cardPosition = card.getBoundingClientRect().bottom; // Pegue a posição inferior do cartão
    let viewportHeight = window.innerHeight;

    if (cardPosition < viewportHeight) {
        // O elemento está dentro da viewport, então mostra o card
        card.style.opacity = '1';
        card.style.transform = 'translateY(-5%)';
        card.style.transition = '3.5s ';
    } else {
        // O elemento está fora da viewport, então esconde o card
        card.style.opacity = '0';
        card.style.transform = 'translateY(10%)';
        card.style.transition = '2s ';
    }
});

// CARD - 4
window.addEventListener('scroll', function () {
    let card = document.getElementById('card-4');
    let cardPosition = card.getBoundingClientRect().bottom; // Pegue a posição inferior do cartão
    let viewportHeight = window.innerHeight;

    if (cardPosition < viewportHeight) {
        // O elemento está dentro da viewport, então mostra o card
        card.style.opacity = '1';
        card.style.transform = 'translateY(-5%)';
        card.style.transition = '4.5s ';
    } else {
        // O elemento está fora da viewport, então esconde o card
        card.style.opacity = '0';
        card.style.transform = 'translateY(1%)';
        card.style.transition = '2s ';
    }
});



// SOBRE NÓS
window.addEventListener('scroll', function () {
    let card = document.getElementById('section_info');
    let cardPosition = card.getBoundingClientRect().top; // Pegue a posição superior do cartão
    let viewportHeight = window.innerHeight;

    if (cardPosition < viewportHeight * 0.75) {
        // O elemento está perto da viewport, então mostra o card
        card.style.opacity = '1';
        card.style.transform = 'translateY(0%)';
        card.style.transition = 'opacity 1s, transform 2s';
       
    } else {
        // O elemento está longe da viewport, então esconde o card
        card.style.opacity = '0';
        card.style.transform = 'translateY(50%)';
        card.style.transition = 'opacity 0s, transform 1s';
       
        
    }
});

// CONTADOR

   // Contador 1
   var p1 = document.getElementById('cont-1');
   var contador1 = 1;

   function contar1() {
       if (contador1 <= 150) {
           p1.textContent = contador1
           contador1++;
           setTimeout(contar1, 60);
         
       }
   }

   contar1();

   // Contador 2
   var p2 = document.getElementById('cont-2');
   var contador2 = 1;

   function contar2() {
       if (contador2 <= 100) {
           p2.textContent = contador2;
           contador2++;
           setTimeout(contar2, 80);
       }
   }

   contar2();

   // Contador 3
   var p3 = document.getElementById('cont-3');
   var contador3 = 1;

   function contar3() {
       if (contador3 <= 25) {
           p3.textContent = contador3;
           contador3++;
           setTimeout(contar3, 150);
       }
   }

   contar3();