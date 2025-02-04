document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(event) {
        // Проверка, чтобы все обязательные поля были заполнены
        if (!form.checkValidity()) {
            event.preventDefault();
            alert('Пожалуйста, заполните все обязательные поля.');
        } else {
            // Можно добавить дополнительную логику, например, отправку данных на сервер
            console.log('Форма успешно отправлена');
        }
    });
});
