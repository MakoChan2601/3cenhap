document.addEventListener('DOMContentLoaded', function() {
    // Slider functionality
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
        currentSlide = index;
    }
    
    document.querySelector('.prev').addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });
    
    document.querySelector('.next').addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });
    
    // Auto-rotate slides
    setInterval(function() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 5000);
    
    // Promotions popup close button
    document.querySelector('.close-popup').addEventListener('click', function() {
        document.querySelector('.promotions-popup').style.display = 'none';
    });
    
    // Cookie notice close function
    const cookieNotice = document.querySelector('.cookie-notice');
    const acceptCookie = document.createElement('button');
    acceptCookie.textContent = 'Accept';
    acceptCookie.classList.add('accept-cookie');
    acceptCookie.style.marginLeft = '10px';
    acceptCookie.style.padding = '5px 10px';
    acceptCookie.style.backgroundColor = '#4CAF50';
    acceptCookie.style.color = 'white';
    acceptCookie.style.border = 'none// JavaScript Document