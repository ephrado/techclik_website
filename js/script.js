console.log('TechCLIk Website Active');
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Merci ! Nous vous recontacterons bientôt.');
            form.reset();
        });
    });
});
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));  
        if(target) target.scrollIntoView({behavior: 'smooth'});
    });
});