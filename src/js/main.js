import "../scss/main.scss";

window.addEventListener('load', function (e) {
    NodeList.prototype.forEach = Array.prototype.forEach;

    var filtersParent = document.querySelector('.portfolio__filter');
    var filters = document.querySelectorAll('.portfolio__filter-link');
    var works = document.querySelectorAll('.recent-works__item');

    var navLinks = document.querySelectorAll('.nav__link');

    if (filtersParent) {
        filtersParent.addEventListener('click', (e) => {


            if (e.target.classList.contains('portfolio__filter-link')) {
                filters.forEach(filter => {
                    filter.classList.remove('portfolio__filter-link--active');
                });

                e.target.classList.add('portfolio__filter-link--active');

                var filtered = e.target.innerText;

                works.forEach(work => {
                    work.style.display = 'none';
                })


                works.forEach(work => {
                    if (work.classList.contains(filtered)) {
                        work.style.display = 'block';
                    }
                });
            }
        });
    }


    navLinks.forEach(link => {
        var currLocation = window.location.pathname;

        if (link.getAttribute('href') == currLocation) {
            link.classList.add('nav__link--active');
        }
        else {
            link.classList.remove('nav__link--active');
        }
    });


});

