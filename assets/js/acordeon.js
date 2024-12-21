const acordeonTriggers = document.querySelectorAll('.acordeon .trigger');

acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
        const acordeon = trigger.parentElement;
        const isOpen = acordeon.classList.contains('open');

        // Fecha todos os outros itens
        document.querySelectorAll('.acordeon').forEach((item) => {
            item.classList.remove('open');
        });

        // Alterna o estado do acordeon atual
        if (!isOpen) {
            acordeon.classList.add('open');
        }
    });
});