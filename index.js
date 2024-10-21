document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.accordion-item');

    items.forEach(item => {
        const header = item.querySelector('.accordion-header');

        header.addEventListener('click', function() {
            const openItem = document.querySelector('.accordion-item.active');

            toggleItem(item);

            if (openItem && openItem !== item) {
                toggleItem(openItem);
            }
        });
    });

    function toggleItem(item) {
        const content = item.querySelector('.accordion-content');

        if (item.classList.contains('active')) {
            content.style.maxHeight = null;
            item.classList.remove('active');
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
            item.classList.add('active');
        }
    }
});
