const menuHamburguer = document.querySelector('.menu-hamburguer');
const menuAberto = document.querySelector('.menu-aberto');

menuHamburguer.addEventListener('click', () => {
  menuAberto.style.display = menuAberto.style.display === 'none' ? 'block' : 'none';
});
let currentIndex = 0;

function moveCard(direction) {
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;

    // Ajusta o índice atual baseado na direção (1 ou -1)
    currentIndex = (currentIndex + direction + totalCards) % totalCards;

    // Move os cards para exibir o card correto
    const offset = -currentIndex * (cards[0].offsetWidth + 20); // largura do card + margem
    document.querySelector('.cards').style.transform = `translateX(${offset}px)`;
}
