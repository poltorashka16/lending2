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
            // Отправка формы на указанный URL
            fetch(form.action, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams(new FormData(form))
            })
            .then(response => {
                if (response.ok) {
                    // Переход на указанную ссылку после успешной отправки формы
                    window.location.href = 'https://poltorashka16.github.io/neveroyatno/';
                } else {
                    throw new Error('Ошибка при отправке формы');
                }
            })
            .catch(error => {
                alert('Произошла ошибка при отправке формы. Попробуйте еще раз.');
                console.error(error);
            });
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
