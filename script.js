(function () {
    // invocation
    slider();
    burger();

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
        //Slider

        var slideIndex = 1;
        var timer = null;
        var prev = document.querySelector(".prev");
        var next = document.querySelector(".next");

        showSlides(slideIndex);

        prev.addEventListener("click", plusSlides);
        next.addEventListener("click", plusSlides);

        // Next/previous controls
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


    //////preloader

    function Preloader() {
        document.body.onload = function () {
            setTimeout(function () {
                var preloader = document.querySelector(".preloader");
                if (!preloader.classList.contains('done')) {
                    preloader.classList.add('done');
                }
            }, 1000)
        }
    };

    ////////// slider in about

    function sliderAbout() {
        var slwrapper = document.querySelector(".about__slider");
        var slider = slwrapper.querySelector(".slider");
        var prev = slwrapper.querySelector(".prev");
        var next = slwrapper.querySelector(".next");
        var slide = slider.querySelector(".slider__inner").offsetWidth;

        var sdvig = 0;
        slwrapper.addEventListener("click", function (event) {
            if (event.target == next) {
                sdvig -= slide;
                if (sdvig < -slide * 4) {
                    sdvig = 0;
                }
            } else if (event.target == prev) {
                if (sdvig != 0) {
                    sdvig += slide;
                }
            }
            slider.style.transform = 'translate(' + sdvig + 'px)';
            console.log(sdvig);
        });
    }

    /////////tabs in works

    function Tabs() {
        var works = document.querySelector(".works");
        var tab = works.querySelectorAll('[data-item]');
        var cont = works.querySelector('.works__content');
        var tabLength = tab.length;
        var tabcontent = cont.querySelectorAll('.works__tabcontent');
        tab.forEach(function (item, i, arr) {
            tab[i].addEventListener("click", show);
        });

        function show() {
            tabcontent.forEach(function (item, i, arr) {
                tabcontent[i].classList.remove("show");
            });
            var c = 'data-item =' + '"' + this.dataset.item + '"';
            cont.querySelector("[" + c + "]").classList.add("show");
        };
    }

    ////////slider in clients

    // var slideIndex = 0;
    // showSlides();

    // function showSlides() {
    //     var i;
    //     var slides = document.getElementsByClassName("clients__slide");
    //     var dots = document.getElementsByClassName("clients__dot");
    //     for (i = 0; i < slides.length; i++) {
    //         slides[i].style.display = "none";
    //     }
    //     slideIndex++;
    //     if (slideIndex > slides.length) {
    //         slideIndex = 1
    //     }
    //     for (i = 0; i < dots.length; i++) {
    //         dots[i].className = dots[i].className.replace(" js-active", "");
    //     }
    //     slides[slideIndex - 1].style.display = "block";
    //     dots[slideIndex - 1].className += " js-active";
    //     setTimeout(showSlides, 2500); // Change image every 2 seconds
    // }


    //////buttons modal

    function modal() {
        let modalbtn = document.querySelector(".wellcome__btn");
        let modalbtnPro = document.querySelector(".project__btn");

        modalbtn.addEventListener("click", function () {
            swal({
                title: 'Hello! my Friend',
                width: 600,
                padding: '3em',
                background: 'white',
                confirmButtonColor: "#c0301c",
                //swal.getContent ()
                customClass: 'animated rubberBand'
            });
        });
        modalbtnPro.addEventListener("click", function () {
            swal({
                title: 'Let\'s talk about YOUR PROJECT!',
                type: "success",
                width: 600,
                padding: '3em',
                background: 'white',
                confirmButtonColor: "#c0301c",
                confirmButtonText: "Good choice!",
                showCancelButton: true,
                cancelButtonText: "Later",
            })
        })
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

    /// button to top

    function toTop() {
        var buttonTop = document.querySelector("#btn-up");
        window.onscroll = function () {
            if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
                buttonTop.style.opacity = "1";
            } else {
                buttonTop.style.opacity = "0";
            }
        }

        buttonTop.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(".hero").scrollIntoView({
                behavior: 'smooth'
            });
        })
    }

    /////Gsap

    function Tween() {
        let tl = new TimelineMax();
        tl
            .from('#left', 2, {
                x: '-300%',
                ease: Bounce.easeOut
            }, delay = 1)
            .from('#right', 2, {
                x: '300%',
                ease: Bounce.easeOut
            }, "-=2")
            .from('.wellcome__btn', .5, {
                borderRadius: "30px"
            })
            .from('.logo__h1', 1, {
                y: '-100',
                opacity: 0
            }, "-=0.5")
            .staggerFrom(".nav__list", .5, {
                y: '-50',
                opacity: 0
            }, 0.1, "-=0.25")
    }

    function scrollMagic() {
        // init controller
        var controller = new ScrollMagic.Controller();

        var tween = TweenMax.from('#about', 1, {
            y: 500,
            opacity: 0
        });
        var tween1 = TweenMax.from('#contacts', 1, {
            y: 500,
            opacity: 0
        });
        // create a scene

        var scene = new ScrollMagic.Scene({
                triggerElement: "#servises",
                offset: 400
            })
            .setTween(tween)
            .addTo(controller);
        var scene2 = new ScrollMagic.Scene({
                triggerElement: "#clients",
                offset: 300
            })
            .setTween(tween1)
            .addTo(controller);
    }
})();