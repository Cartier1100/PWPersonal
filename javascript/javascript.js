$(document).ready(function () {
    var typed = new Typed(".element", {
        strings: ["¡Hola, soy Jesús Macías!", "C++ Developer", "System Administrator"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });

    // SPA
    $('a[data-page]').on('click', function (e) {
        e.preventDefault();
        var section = $(this).data('page');
        $('html, body').animate({
            scrollTop: $('#' + section).offset().top - $('.navbar').outerHeight()
        }, 800);
    });

    // formulario y confirmación
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();
        var email = $('#email').val();
        var message = $('#message').val();
        if (email && message) {
            $('#confirmationModal').modal('show');
        }
    });

    // buscar proyectos
    $('#search').on('keyup', function () {
        var searchTerm = $(this).val().toLowerCase();
        $('#project-list .project-card').each(function () {
            var title = $(this).data('title').toLowerCase();
            if (title.includes(searchTerm)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});

$(document).ready(function () {
    // Mostrar modal al pasar el ratón por encima
    $('#project1').mouseenter(function () {
        $('#projectModal1').modal('show');
    }).mouseleave(function () {
        $('#projectModal1').modal('hide');
    });

    $('#project2').mouseenter(function () {
        $('#projectModal2').modal('show');
    }).mouseleave(function () {
        $('#projectModal2').modal('hide');
    });

    $('#project3').mouseenter(function () {
        $('#projectModal3').modal('show');
    }).mouseleave(function () {
        $('#projectModal3').modal('hide');
    });
});
