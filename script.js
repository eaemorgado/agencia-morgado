document.addEventListener('DOMContentLoaded', function() {
    const count = document.querySelector('.count');
    const target = Number(count.getAttribute('data-target'));
    const speed = 100; // Velocidade da animação (em milissegundos)

    // Função para verificar se o elemento está visível na tela
    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (rect.top >= 0 && rect.bottom <= window.innerHeight);
    }

    const startAnimation = () => {
        if (isElementInViewport(count)) {
            count.style.visibility = 'visible'; // Torna visível apenas quando visível na tela
            const updateCount = () => {
                const currentCount = Number(count.innerText);
                const increment = target / (speed / 1);

                if (currentCount < target) {
                    count.innerText = Math.ceil(currentCount + increment);
                    setTimeout(updateCount, 1);
                } else {
                    count.innerText = target;
                }
            }

            updateCount();
        } else {
            // Se o elemento não estiver visível, aguarde antes de tentar novamente
            setTimeout(startAnimation, 100);
        }
    }

    startAnimation();
});

document.addEventListener('DOMContentLoaded', function() {
    const count = document.querySelector('.count2');
    const target = Number(count.getAttribute('data-target'));
    const speed = 100; // Velocidade da animação (em milissegundos)

    // Função para verificar se o elemento está visível na tela
    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (rect.top >= 0 && rect.bottom <= window.innerHeight);
    }

    const startAnimation = () => {
        if (isElementInViewport(count)) {
            count.style.visibility = 'visible'; // Torna visível apenas quando visível na tela
            const updateCount = () => {
                const currentCount = Number(count.innerText);
                const increment = target / (speed / 1);

                if (currentCount < target) {
                    count.innerText = Math.ceil(currentCount + increment);
                    setTimeout(updateCount, 1);
                } else {
                    count.innerText = target;
                }
            }

            updateCount();
        } else {
            // Se o elemento não estiver visível, aguarde antes de tentar novamente
            setTimeout(startAnimation, 100);
        }
    }

    startAnimation();
});

document.addEventListener('DOMContentLoaded', function() {
    const count = document.querySelector('.count3');
    const target = Number(count.getAttribute('data-target'));
    const speed = 100; // Velocidade da animação (em milissegundos)

    // Função para verificar se o elemento está visível na tela
    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (rect.top >= 0 && rect.bottom <= window.innerHeight);
    }

    const startAnimation = () => {
        if (isElementInViewport(count)) {
            count.style.visibility = 'visible'; // Torna visível apenas quando visível na tela
            const updateCount = () => {
                const currentCount = Number(count.innerText);
                const increment = target / (speed / 1);

                if (currentCount < target) {
                    count.innerText = Math.ceil(currentCount + increment);
                    setTimeout(updateCount, 1);
                } else {
                    count.innerText = target;
                }
            }

            updateCount();
        } else {
            // Se o elemento não estiver visível, aguarde antes de tentar novamente
            setTimeout(startAnimation, 100);
        }
    }

    startAnimation();
});