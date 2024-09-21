window.onload = () => {
        document.body.classList.remove("container");
    };
    
    // Función para simular la "apertura" de la cajita y mostrar las flores
    function openGift() {
        const gift = document.getElementById('gift');
        const flowerContainer = document.getElementById('flower-container');
        
        // Ocultar la cajita
        gift.style.display = 'none';
        
        // Mostrar las flores
        flowerContainer.style.display = 'block';
    
        // Añadir un pequeño efecto de "aparición" para las flores
        const flowers = flowerContainer.querySelector('.flowers');
        flowers.style.opacity = '0';
        setTimeout(() => {
            flowers.style.opacity = '1';
        }, 100);
    }