document.addEventListener('DOMContentLoaded', function() {
    const signupButtons = document.querySelectorAll('.signup-button');
    signupButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'sign_up.html';
        });
    });
    const priceLinks = document.querySelectorAll('.price-link');
    priceLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const service = this.dataset.service; 
            alert(`Прайс для услуги: ${service}`);
        });
    });
});
function countVisits() {
    let visits = localStorage.getItem("visits");
    visits = visits ? parseInt(visits) + 1 : 1;
    localStorage.setItem("visits", visits);
    document.getElementById("visitorCount").textContent = `Вы посетитель номер: ${visits}`;
  }
  window.onload = countVisits;

  // Скрипт для кнопки "Наверх"
        document.addEventListener('DOMContentLoaded', function() {
            const backToTopButton = document.querySelector('.back-to-top');
            
            // Показываем/скрываем кнопку при прокрутке
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 300) {
                    backToTopButton.classList.add('active');
                } else {
                    backToTopButton.classList.remove('active');
                }
            });
            
            // Плавная прокрутка вверх при клике
            backToTopButton.addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        });

        document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navbar = document.querySelector('.navbar');
    
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        navbar.classList.toggle('active');
    });
});
  