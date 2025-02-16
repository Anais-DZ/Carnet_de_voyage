anime({
    targets: '#box1',
    translateX: '-1200', // Se déplace vers la gauche
    //opacity: [1, 0], // Devient invisible à la fin
    duration: 10000, // Plus lent (3s)
    easing: 'linear',
    loop: true,
    complete: function(anime) {
        // Remet l'élément à droite instantanément et le rend visible
        anime.set('#box1', { translateX: 1200, opacity: 1 });
    }
});