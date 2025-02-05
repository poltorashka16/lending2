document.addEventListener('DOMContentLoaded', function() {
    const contentBlocks = document.querySelectorAll('.animate-fade');

    function checkVisibility() {
        contentBlocks.forEach(block => {
            const rect = block.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                block.classList.add('active');
            } else {
                block.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    checkVisibility(); // Проверка при загрузке страницы

    const form = document.getElementById('registrationForm');
    const familyOptions = document.querySelectorAll('.family-options input[type="radio"]');

    form.addEventListener('submit', function(event) {
        // Проверка, чтобы все обязательные поля были заполнены
        if (!form.checkValidity()) {
            event.preventDefault();
            alert('Пожалуйста, заполните все обязательные поля.');
        } else {
            // Переход на указанную ссылку
            window.location.href = 'https://poltorashka16.github.io/neveroyatno/';
            event.preventDefault(); // Предотвращаем стандартную отправку формы
        }
    });

    familyOptions.forEach(option => {
        option.addEventListener('change', function() {
            familyOptions.forEach(opt => {
                if (opt !== this) {
                    opt.nextElementSibling.style.opacity = '0.5';
                } else {
                    opt.nextElementSibling.style.opacity = '1';
                }
            });
        });
    });
});
