// Плавное появление элементов + можно добавить счётчик или консоль-привет
document.addEventListener('DOMContentLoaded', () => {
    console.log('🔥 FLAT447 — твой путь только начинается!');
    
    // Добавляем класс для анимации fade-in (опционально)
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(12px)';
        card.style.transition = `opacity 0.3s ease ${index * 0.05}s, transform 0.3s ease ${index * 0.05}s`;
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });
});
