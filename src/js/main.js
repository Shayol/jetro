import "../scss/main.scss";

window.addEventListener('load', function (e) {
    NodeList.prototype.forEach = Array.prototype.forEach;

    var filtersParent = document.querySelector('.portfolio__filter');
    var filters = document.querySelectorAll('.portfolio__filter-link');
    var works = document.querySelectorAll('.recent-works__item');
    var posts = document.querySelectorAll('.post');
    const perPage = 5;

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

    if (posts) {
        var pagination = document.querySelector('.blog__pagination');
        var pagesNum = Math.ceil(posts.length / perPage);
        pagination.innerHTML = '';

        for (var i = 0; i < pagesNum; i++) {
            pagination.innerHTML += '<div class="pagination__button">' + (i + 1) + '</div>';
        }
        var pages = pagination.querySelectorAll('.pagination__button');

        if (pages.length > 1) {
            pages[0].classList.add('pagination__active');
        }

        for (let k = 0; k < perPage; k++) {
            if(posts[k]) {
                posts[k].style.display = 'block';
            }
        }

        pages.forEach((page, n) => {

            page.addEventListener('click', (e) => {

                var number = parseInt(e.target.innerText);

                var from = perPage * number - perPage;
                var to = perPage * number - 1;
                posts.forEach((post, i) => {
                    if (i >= from && i <= to) {
                        post.style.display = 'block';
                    }
                    else {
                        post.style.display = 'none';
                    }
                });
                pages.forEach(el => el.classList.remove('pagination__active'));
                e.target.classList.add('pagination__active');

            });
        });


    }


});

