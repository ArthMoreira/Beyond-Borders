$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() + header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    })
})

var swiper = new Swiper(".swiper", {
    loop: true,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
    breakpoints: {
       
        640: {
          slidesPerView: 1,
          spaceBetween: 18
        },
        
        768: {
          slidesPerView: 2,
          spaceBetween: 18
        },
        
        1188: {
          slidesPerView: 3,
          spaceBetween: 24
        }
      }
    
  });

  ScrollReveal().reveal('#Home', {
    origin: 'left',
    duration: 2000,
    distance:'2%'
})


ScrollReveal().reveal('#Services', {
    duration: 2000,
    distance:'2%'
})


ScrollReveal().reveal('.services', {
    origin: 'left',
    duration: 3000,
    distance:'3%'
})

ScrollReveal().reveal('#Destinations', {
    duration: 3000,
    distance:'2%'
})


ScrollReveal().reveal('.container', {
    origin: 'left',
    duration: 3000,
    distance:'2%'
})

ScrollReveal().reveal('#Steps', {
    origin: 'left',
    duration: 3000,
    distance:'2%'
})


ScrollReveal().reveal('.step-card-content', {
    origin: 'right',
    duration: 3000,
    distance:'2%'
})

ScrollReveal().reveal('#Testimonials', {
    origin: 'left',
    duration: 3000,
    distance:'3%'
})


ScrollReveal().reveal('#Register', {
    origin: 'left',
    duration: 3000,
    distance:'3%'
})

ScrollReveal().reveal('#Newsletter', {
    origin: 'left',
    duration: 2000,
    distance:'3%'
})

ScrollReveal().reveal('#footer_content', {
    duration: 2000,
    distance:'2%'
})

ScrollReveal().reveal('#footer_rights', {
    duration: 3000,
    distance:'30%'
})


