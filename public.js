var btn = document.querySelector('.toggle-btn-js');

function toggleTheme(event) {
    var target = event.target;
    if (target.classList.contains('light')) {
        target.classList.remove('light');
        var lightColors = document.querySelectorAll('.light-font');
        var lightBg = document.querySelectorAll('.light-bg');
        var lightBorder = document.querySelectorAll('.light-border');
        var lightBoldBorder = document.querySelectorAll('.light-bold-border');
        Array.prototype.forEach.call(lightColors, function(elem) {
            elem.classList.remove('light-font');
            elem.classList.add('dark-font');
        });
        Array.prototype.forEach.call(lightBorder, function(elem) {
            elem.classList.remove('light-border');
            elem.classList.add('dark-border');
        });
        Array.prototype.forEach.call(lightBg, function(elem) {
            elem.classList.remove('light-bg');
            elem.classList.add('dark-bg');
        });
        Array.prototype.forEach.call(lightBoldBorder, function(elem) {
            elem.classList.remove('light-bold-border');
            elem.classList.add('dark-bold-border');
        });
    } else {
        target.classList.add('light');
        var darkColors = document.querySelectorAll('.dark-font');
        var darkBg = document.querySelectorAll('.dark-bg');
        var darkBorder = document.querySelectorAll('.dark-border');
        var darkBoldBorder = document.querySelectorAll('.dark-bold-border');
        Array.prototype.forEach.call(darkColors, function(elem) {
            elem.classList.add('light-font');
            elem.classList.remove('dark-font');
        });
        Array.prototype.forEach.call(darkBorder, function(elem) {
            elem.classList.add('light-border');
            elem.classList.remove('dark-border');
        });
        Array.prototype.forEach.call(darkBg, function(elem) {
            elem.classList.add('light-bg');
            elem.classList.remove('dark-bg');
        });
        Array.prototype.forEach.call(darkBoldBorder, function(elem) {
            elem.classList.add('light-bold-border');
            elem.classList.remove('dark-bold-border');
        });
    }
}

btn.addEventListener('click', toggleTheme);
