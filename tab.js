document.addEventListener("DOMContentLoaded", function() {
    const tabLinks = document.querySelectorAll('.tablinks');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', function() {
            const target = this.getAttribute('href').substring(1);
            tabContents.forEach(content => {
                if (content.id === target) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
            tabLinks.forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});
