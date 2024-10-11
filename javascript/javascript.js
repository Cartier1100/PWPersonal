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
    // Inicialización de Typed.js
    var options = {
        strings: ["Desarrollador Web", "Entusiasta de la Programación", "Creador de Soluciones"],
        typeSpeed: 40,
        backSpeed: 50,
        loop: true,
    };
    var typed = new Typed(".element", options);

    // Filtrado de proyectos
    $("#search").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#project-list .project-card").filter(function () {
            $(this).toggle($(this).data("title").toLowerCase().indexOf(value) > -1);
        });
    });

    // Manejo del envío del formulario de contacto
    $("#contactForm").on("submit", function (event) {
        event.preventDefault(); // Evitar el envío normal del formulario
        $("#confirmationModal").modal("show"); // Mostrar modal de confirmación
        $(this).trigger("reset"); // Reiniciar el formulario
    });
});
