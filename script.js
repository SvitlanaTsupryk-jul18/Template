(function () {
    // invocation
    slider();
    burger();
    counter();
    tabs();

    // Preloader();
    // sliderAbout();
    // Tabs();
    // jsForm();
    // burger();
    // modal();
    // smoothScrollLinks();
    // toTop();
    // Tween();
    // scrollMagic();

    ///slider

    function slider() {

        var slideIndex = 1;
        var timer = null;
        var prev = document.querySelector(".prev");
        var next = document.querySelector(".next");

        showSlides(slideIndex);

        prev.addEventListener("click", plusSlides);
        next.addEventListener("click", plusSlides);

        function plusSlides(event) {
            clearTimeout(timer);
            event.target === next ? n = 1 : n = -1;
            showSlides(slideIndex += n);
        }

        function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("slides");
            var dots = [...document.getElementsByClassName("dot")];

            dots.forEach((dot, index) => {
                dot.addEventListener("click", function () {
                    clearTimeout(timer);
                    showSlides(slideIndex = index + 1);
                })
            });

            if (n == undefined) {
                n = ++slideIndex
            }
            if (n > slides.length) {
                slideIndex = 1
            }
            if (n < 1) {
                slideIndex = slides.length
            }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
            timer = setTimeout(showSlides, 100000);
        }
    }


    ///burger-menu

    function burger() {
        let menu = document.querySelector(".mob-menu");
        let openbtn = document.querySelector(".burger-open");
        let closebtn = document.querySelector(".burger-close");

        openbtn.addEventListener("click", show);
        closebtn.addEventListener("click", hide);

        function show() {
            this.classList.remove("burger--visibility");
            menu.style.transform = ("translate(0)");
        }

        function hide() {
            openbtn.classList.add("burger--visibility");
            menu.style.transform = ("translate(-500%)");
        }
    }

    ////counter

    function counter() {
        window.addEventListener("scroll", handler);

        function handler() {
            let container = document.querySelector(".counters");
            let coords = container.getBoundingClientRect().top - container.offsetHeight - 100;

            if (coords < 0) {
                start();
                this.removeEventListener("scroll", handler);
            }
        }

        function start() {
            let counters = document.querySelectorAll(".counter__count");
            let countersQuantity = counters.length;
            let counter = [];

            for (i = 0; i < countersQuantity; i++) {
                counter[i] = parseInt(counters[i].innerHTML);
            }

            const count = function (start, value, id) {
                let localStart = start;
                setInterval(function () {
                    if (localStart < value) {
                        localStart++;
                        counters[id].innerHTML = localStart;
                    }
                }, 10);
            };

            for (j = 0; j < countersQuantity; j++) {
                count(0, counter[j], j);
            }
        }
    }


    /////////tabs in works

    function tabs() {
        let projects = document.querySelector(".projects");
        let tab = projects.querySelectorAll('.projects__tablinks');
        let cont = projects.querySelector('.projects__content');
        let tabcontent = cont.querySelectorAll('.projects__tabcontent');

        tab.forEach(function (item, i, arr) {
            tab[i].addEventListener("click", show);
        });

        function show() {
            projects.querySelector('[data-item="all"]').classList.remove("hovered");
            tabcontent.forEach(function (item, i, arr) {
                tabcontent[i].classList.remove("show");
            });
            let c = 'data-item =' + '"' + this.dataset.item + '"';
            cont.querySelector("[" + c + "]").classList.add("show");
        };
    }


    ////smoothScroll

    function smoothScrollLinks() {
        let nav = document.querySelector(".nav")
        nav.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }


})();