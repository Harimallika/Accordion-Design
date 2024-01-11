
document.addEventListener("DOMContentLoaded", function () {
    const accordionContainer = document.querySelector('.accordion-container');

    accordionContainer.addEventListener('click', function (event) {
        const clickedIcon = event.target.closest('.item-icon');

        if (clickedIcon) {
            const accordionItem = clickedIcon.closest('.accordion-item');
            const content = accordionItem.querySelector('.item-content');

            // Toggle the visibility using a CSS class
            content.classList.toggle('show');

            // Hide other accordion items
            const allAccordionItems = accordionContainer.querySelectorAll('.accordion-item');
            allAccordionItems.forEach(function (otherItem) {
                if (otherItem !== accordionItem) {
                    otherItem.querySelector('.item-content').classList.remove('show');
                }
            });
        }
    });
});
