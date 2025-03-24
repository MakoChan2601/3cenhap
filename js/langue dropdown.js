document.addEventListener('DOMContentLoaded', function() {
    const languageOptions = document.querySelectorAll('.language-option');
    const selectedFlag = document.querySelector('.flag-container .flag');
    const selectedLang = document.querySelector('.flag-container span');
    
    languageOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get flag src and language text
            const flagSrc = this.querySelector('.flag').src;
            const langText = this.querySelector('span').textContent;
            
            // Update selected language in the flag container
            selectedFlag.src = flagSrc;
            selectedLang.textContent = langText.substring(0, 2).toUpperCase();
        });
    });
});// JavaScript Document