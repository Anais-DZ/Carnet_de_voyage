anime({
    targets: '#box1',
    translateX: '-1400', // Se déplace vers la gauche
    //opacity: [1, 0], // Devient invisible à la fin
    duration: 10000, // Plus lent (3s)
    easing: 'linear',
    loop: true,
    complete: function(anime) {
        // Remet l'élément à droite instantanément et le rend visible
        anime.set('#box1', { translateX: 1200, opacity: 1 });
    }
});

anime({
    targets: '.nuage',
    translateX: '1500', // Se déplace vers la gauche
    //opacity: [1, 0], // Devient invisible à la fin
    duration: 25000, // Plus lent (3s)
    easing: 'linear',
    loop: true,
    complete: function(anime) {
        // Remet l'élément à droite instantanément et le rend visible
        anime.set('#box1', { translateX: -1500, opacity: 1 });
    }
});

anime({
    targets: '.nuage2',
    translateX: '1600', // Se déplace vers la gauche
    //opacity: [1, 0], // Devient invisible à la fin
    duration: 25000, // Plus lent (3s)
    easing: 'linear',
    loop: true,
    complete: function(anime) {
        // Remet l'élément à droite instantanément et le rend visible
        anime.set('#box1', { translateX: -1600, opacity: 1 });
    }
});