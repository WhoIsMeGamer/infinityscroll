// Бесконечная прокрутка
let itemCount = 3;
let isLoading = false;

// Функция для создания случайного контента
function generateRandomContent() {
    const titles = [
        "Удивительный контент",
        "Интересная статья",
        "Новое открытие",
        "Полезный совет",
        "Интересный факт",
        "Важное обновление",
        "Потрясающая история",
        "Практический пример"
    ];
    
    const contents = [
        "Этот контент был загружен автоматически при прокрутке страницы.",
        "Бесконечная прокрутка отлично работает на мобильных устройствах.",
        "Вы можете продолжать читать без перерыва на загрузку страниц.",
        "Этот текст сгенерирован динамически с помощью JavaScript.",
        "Технология бесконечной прокрутки используется в социальных сетях.",
        "Пользователи любят плавный и непрерывный опыт просмотра.",
        "Контент подгружается по мере необходимости, экономя трафик.",
        "Идеально для лент новостей, галерей и социальных сетей."
    ];
    
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    const randomContent = contents[Math.floor(Math.random() * contents.length)];
    
    return {
        title: randomTitle,
        content: randomContent
    };
}

// Функция загрузки нового контента
function loadMoreContent() {
    if (isLoading) return;
    
    isLoading = true;
    const loading = document.getElementById('loading');
    const content = document.getElementById('content');
    
    // Показываем индикатор загрузки
    loading.style.display = 'block';
    
    // Имитируем загрузку данных с сервера
    setTimeout(() => {
        // Создаем 3 новых элемента
        for (let i = 0; i < 3; i++) {
            itemCount++;
            const newContent = generateRandomContent();
            
            const newItem = document.createElement('div');
            newItem.className = 'item';
            newItem.innerHTML = `
                <h2>${newContent.title} ${itemCount}</h2>
                <p>${newContent.content}</p>
                <small>Загружено: ${new Date().toLocaleTimeString()}</small>
            `;
            
            content.appendChild(newItem);
        }
        
        // Скрываем индикатор загрузки
        loading.style.display = 'none';
        isLoading = false;
        
        console.log(`Загружено 3 новых элемента. Всего: ${itemCount}`);
        
    }, 1500); // Имитация задержки сети
}

// Обработчик прокрутки
window.addEventListener('scroll', function() {
    // Проверяем, достигли ли мы почти конца страницы
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;
    const threshold = 200; // Загружаем за 200px до конца
    
    if (scrollPosition >= pageHeight - threshold && !isLoading) {
        loadMoreContent();
    }
});

// Инициализация
console.log("Сайт с бесконечной прокруткой загружен!");

// Предзагрузка первого дополнительного контента при загрузке страницы
window.addEventListener('load', function() {
    console.log("Страница полностью загружена");
});