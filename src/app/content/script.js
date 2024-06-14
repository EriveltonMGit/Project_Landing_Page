



// _____________EFEITO ESCRITA______________--
document.addEventListener("DOMContentLoaded", function () {
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

// FUNÇAO PARA MOSTRAR O BOTAO NA SECTION 1
function mostrarBotao() {
    let btnMostrar = document.getElementById(`agende-btn`)
    btnMostrar.style.display = 'block'

}

setTimeout(mostrarBotao, 4000)



function agenda() {
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

// ________________CONTADOR_______________________

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    counters.forEach(counter => observer.observe(counter));

    const animateCounter = counter => {
        const target = +counter.getAttribute('data-target');
        let current = 0;
        const increment = target / 400; // 400 increments for slower count
        const updateCounter = () => {
            current = Math.min(current + increment, target);
            counter.textContent = Math.round(current);
            if (current < target) {
                requestAnimationFrame(updateCounter);
            }
        };
        updateCounter();
    };
});

// _______________________ANIMAÇÕES CARD PIZZA ____________________--


// ANIMAÇÃO PARA FECHAR TODOS CARDS AO TOCAR FORA DELE

function fecharCards() {

    let fatia_pizza = document.getElementById(`fatia_pizza`)
    let promo = document.getElementById(`card_promo`)
    let pizza_familia = document.getElementById(`pizza_familia`)
    let combo_pizza = document.getElementById(`combo_pizza`)
    let entrega_pizza = document.getElementById(`entrega_pizza`)


    if (fatia_pizza.style.display == 'flex' || promo.style.display == 'flex' ||
        pizza_familia.style.display == 'flex' || combo_pizza.style.display == 'flex'
        ||  entrega_pizza.style.display == 'flex'
    ) {
        fatia_pizza.style.display = 'none'
        promo.style.display = 'none'
        pizza_familia.style.display = 'none'
        combo_pizza.style.display = 'none'
        entrega_pizza.style.display  = 'none'
      

        
    }
   
}





//  EFEITO MOSTRAR MENU LATERAL
window.addEventListener('scroll', function () {
    let card = document.getElementById('nav-pizza');
    let cardPosition = card.getBoundingClientRect().bottom; // Pegue a posição inferior do cartão
    let viewportHeight = window.innerHeight;

    if (cardPosition < viewportHeight) {
        // O elemento está dentro da viewport, então mostra o card
        card.style.opacity = '1';
        card.style.transform = 'translateX(2%)';
        card.style.transition = '2s ';
    } else {
        // O elemento está fora da viewport, então esconde o card
        card.style.opacity = '0';
        card.style.transform = 'translateX(-10%)';
        card.style.transition = '2s ';
    }
});

// ____________________________________________________

// 1 CARD FATIA PIZZA

function abrir_fatia_pizza() {
    let promo = document.getElementById(`card_promo`).style.display = 'none'
    let pizza_familia = document.getElementById(`pizza_familia`).style.display = 'none'
    let combo_pizza = document.getElementById(`combo_pizza`).style.display = 'none'
    let entrega_pizza = document.getElementById(`entrega_pizza`).style.display = 'none'
    let fatia_pizza = document.getElementById(`fatia_pizza`)

    if (fatia_pizza.style.display === 'none' || fatia_pizza.style.display === '') {
        fatia_pizza.style.display = 'flex'
        fatia_pizza.style.alignItems = 'center'
        fatia_pizza.style.justifyContent = 'center'

    }
    else {

        fatia_pizza.style.display = 'none'

    }
}

function fechar() {
    let fatia_pizza = document.getElementById(`fatia_pizza`)

    if (fatia_pizza.style.display === 'none' || fatia_pizza.style.display === '') {
        fatia_pizza.style.display = 'flex'
    }
    else {

        fatia_pizza.style.display = 'none'
    }
}



// 2 CARD PROMO
function promo() {
    let fatia_pizza = document.getElementById(`fatia_pizza`).style.display = 'none'
    let pizza_familia = document.getElementById(`pizza_familia`).style.display = 'none'
    let combo_pizza = document.getElementById(`combo_pizza`).style.display = 'none'
    let entrega_pizza = document.getElementById(`entrega_pizza`).style.display = 'none'
    let promo = document.getElementById(`card_promo`)

    if (promo.style.display === 'none' || promo.style.display === '') {
        promo.style.display = 'flex'
        promo.style.alignItems = 'center'
        promo.style.justifyContent = 'center'

    }
    else {
        promo.style.display = 'none'
    }
}

function fechar_promo() {
    let promo = document.getElementById(`card_promo`)
    if (promo.style.display === 'flex' || promo.style.display === '') {
        promo.style.display = 'none'

    }
    else {
        promo.style.display = 'flex'
    }
}

// 3 CARD PIZZA FAMILIA
function abrir_pizza_fa() {
    let fatia_pizza = document.getElementById(`fatia_pizza`).style.display = 'none'
    let promo = document.getElementById(`card_promo`).style.display = 'none'
    let combo_pizza = document.getElementById(`combo_pizza`).style.display = 'none'
    let entrega_pizza = document.getElementById(`entrega_pizza`).style.display = 'none'
    let pizza_familia = document.getElementById(`pizza_familia`)

    if (pizza_familia.style.display === 'none' || pizza_familia.style.display === '') {
        pizza_familia.style.display = 'flex'
        pizza_familia.style.alignItems = 'center'
        pizza_familia.style.justifyContent = 'center'

    }
    else {
        pizza_familia.style.display = 'none'
    }
}

function pizza_fa_close() {
    let pizza_familia = document.getElementById(`pizza_familia`)
    if (pizza_familia.style.display === 'flex' || pizza_familia.style.display === '') {
        pizza_familia.style.display = 'none'

    }
    else {
        pizza_familia.style.display = 'flex'
    }
}


// 4 CARD COMBO PIZZA FAMILIA
function abrir_combo_pizza() {
    let fatia_pizza = document.getElementById(`fatia_pizza`).style.display = 'none'
    let promo = document.getElementById(`card_promo`).style.display = 'none'
    let pizza_familia = document.getElementById(`pizza_familia`).style.display = 'none'
    let entrega_pizza = document.getElementById(`entrega_pizza`).style.display = 'none'
    let combo_pizza = document.getElementById(`combo_pizza`)

    if (combo_pizza.style.display === 'none' || combo_pizza.style.display === '') {
        combo_pizza.style.display = 'flex'
        combo_pizza.style.alignItems = 'center'
        combo_pizza.style.justifyContent = 'center'

    }
    else {
        combo_pizza.style.display = 'none'
    }
}

function combo_pizza_close() {
    let pizza_combo = document.getElementById(`combo_pizza`)
    if (pizza_combo.style.display === 'flex' || pizza_combo.style.display === '') {
        pizza_combo.style.display = 'none'

    }
    else {
        pizza_combo.style.display = 'flex'
    }
}

// CARD ENTREGA PIZZA
function abir_card_entrega() {
    let fatia_pizza = document.getElementById(`fatia_pizza`).style.display = 'none'
    let promo = document.getElementById(`card_promo`).style.display = 'none'
    let pizza_familia = document.getElementById(`pizza_familia`).style.display = 'none'
    let combo_pizza = document.getElementById(`combo_pizza`).style.display = 'none'
    let entrega_pizza = document.getElementById(`entrega_pizza`)

    if (entrega_pizza.style.display === 'none' || entrega_pizza.style.display === '') {
        entrega_pizza.style.display = 'flex'
        entrega_pizza.style.alignItems = 'center'
        entrega_pizza.style.justifyContent = 'center'

    }
    else {
        entrega_pizza.style.display = 'none'
    }
}

function entrega_pizza_close() {
    let entrega_pizza = document.getElementById(`entrega_pizza`)
    if (entrega_pizza.style.display === 'flex' || entrega_pizza.style.display === '') {
        entrega_pizza.style.display = 'none'

    }
    else {
        entrega_pizza.style.display = 'flex'
    }
}