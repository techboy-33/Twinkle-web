
const toggleBtn = document.getElementById('theme-toggle');
const icon = toggleBtn.querySelector('i');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('light-mode')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});

const languageToggle = document.getElementById('language-toggle');
const languageDropdown = languageToggle.parentElement;

languageToggle.addEventListener('click', () => {
    languageDropdown.classList.toggle('open');
});

document.addEventListener('click', (e) => {
    if (!languageDropdown.contains(e.target)) {
        languageDropdown.classList.remove('open');
    }
});

const learnBtn = document.querySelector('.learn-btn');
    const extraInfo = document.getElementById('extra-info');
    const showLessBtn = document.getElementById('show-less-btn');

    learnBtn.addEventListener('click', () => {
        extraInfo.style.display = 'block';
        learnBtn.style.display = 'none';
    });

    showLessBtn.addEventListener('click', () => {
        extraInfo.style.display = 'none';
        learnBtn.style.display = 'inline-block';
    });