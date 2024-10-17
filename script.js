document.addEventListener('DOMContentLoaded', function() {
    var accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Close other open sections
            accordionButtons.forEach(function(btn) {
                if (btn !== button) {
                    btn.classList.remove('active');
                    btn.nextElementSibling.style.display = 'none';
                }
            });

            // Toggle active class for clicked button
            this.classList.toggle('active');

            // Toggle display of the content
            var content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});
