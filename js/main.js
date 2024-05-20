// Обработка выпадающего меню
document.querySelectorAll('nav ul li').forEach(li => {
    li.addEventListener('mouseenter', function() {
        const submenu = li.querySelector('ul');
        if (submenu) submenu.style.display = 'block';
    });
    li.addEventListener('mouseleave', function() {
        const submenu = li.querySelector('ul');
        if (submenu) submenu.style.display = 'none';
    });
});

// Плавный переход по якорям
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Установить текущий год в подвале
document.getElementById('current-year').textContent = new Date().getFullYear();
