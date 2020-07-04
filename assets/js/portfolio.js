$(document).ready(function () {

    let zoneUsa = {
        title: "United States of America",
        explanation: "I visited USA at 2014. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis laboriosam autem ab delectus sequi perferendis rerum illo. Voluptatibus quaerat eveniet fugiat commodi delectus! Voluptatibus.",
        carouselItems: [
            '<img src="assets/imgs/newyork.jpg" alt=""><div class="carousel-caption d-none d-md-block"><h3><span class="badge badge-dark light">New York</span></h3></div>',
            '<img src="assets/imgs/atlanticcity.jpg" alt=""><div class="carousel-caption d-none d-md-block"><h3><span class="badge badge-dark light">Atlantic City</span></h3></div>'
        ]
    };

    let zoneEurope = {
        title: "Europe",
        explanation: "I visited Europe...lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis laboriosam autem ab delectus sequi perferendis rerum illo. Voluptatibus quaerat eveniet fugiat commodi delectus! Voluptatibus.",
        carouselItems: [
            '<img src="assets/imgs/newyork.jpg" alt=""><div class="carousel-caption d-none d-md-block"><h3><span class="badge badge-dark light">New York</span></h3></div>',
            '<img src="assets/imgs/atlanticcity.jpg" alt=""><div class="carousel-caption d-none d-md-block"><h3><span class="badge badge-dark light">Atlantic City</span></h3></div>'
        ]
    };

    let zoneTurkey = {
        title: "Turkey",
        explanation: "Ohh my sweet hometown...lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis laboriosam autem ab delectus sequi perferendis rerum illo. Voluptatibus quaerat eveniet fugiat commodi delectus! Voluptatibus.",
        carouselItems: [
            '<img src="assets/imgs/newyork.jpg" alt=""><div class="carousel-caption d-none d-md-block"><h3><span class="badge badge-dark light">New York</span></h3></div>',
            '<img src="assets/imgs/atlanticcity.jpg" alt=""><div class="carousel-caption d-none d-md-block"><h3><span class="badge badge-dark light">Atlantic City</span></h3></div>'
        ]
    };

    let zoneSoutheastAsia = {
        title: "Southeast Asia",
        explanation: "My dream continent...lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis laboriosam autem ab delectus sequi perferendis rerum illo. Voluptatibus quaerat eveniet fugiat commodi delectus! Voluptatibus.",
        carouselItems: [
            '<img src="assets/imgs/newyork.jpg" alt=""><div class="carousel-caption d-none d-md-block"><h3><span class="badge badge-dark light">New York</span></h3></div>',
            '<img src="assets/imgs/atlanticcity.jpg" alt=""><div class="carousel-caption d-none d-md-block"><h3><span class="badge badge-dark light">Atlantic City</span></h3></div>'
        ]
    };

    $(document).on('click', 'a.slide-to-link', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 750);
    });

    $("#travelmap").mapster({
        render_highlight: {
            fillColor: 'ffffff',
            fillOpacity: 0.3
        }
    });

    $("#travelmap-small").mapster({
        render_highlight: {
            fillColor: 'ffffff',
            fillOpacity: 0.3
        }
    });

    $(document).on("click", "#usaZone", function () {
        $(this).mapster("deselect");

        $("#overlay").load("../../zoneDetails.html", function () {
            populateZoneDetails(zoneUsa);
        });

        $("#overlay").slideDown();
    });

    $(document).on("click", "#europeZone", function () {
        $(this).mapster("deselect");

        $("#overlay").load("../../zoneDetails.html", function () {
            populateZoneDetails(zoneEurope);
        });

        $("#overlay").slideDown();
    });

    $(document).on("click", "#turkeyZone", function () {
        $(this).mapster("deselect");

        $("#overlay").load("../../zoneDetails.html", function () {
            populateZoneDetails(zoneTurkey);
        });

        $("#overlay").slideDown();
    });

    $(document).on("click", "#southeastZone", function () {
        $(this).mapster("deselect");

        $("#overlay").load("../../zoneDetails.html", function () {
            populateZoneDetails(zoneSoutheastAsia);
        });

        $("#overlay").slideDown();
    });

    $("#overlay").on("click", function () {

        if (!$(event.target).closest('#popup').length) {
            $("#overlay").slideUp();
        }
    });

    $("#overlay").on("click", "#popupClose", function () {
        $("#overlay").slideUp();
    });

    function populateZoneDetails(zone) {
        /* add carousel items */
        for (var i = 0; i < zone.carouselItems.length; i++) {
            var carouselItem = "";


            if (i == 0) {
                carouselItem = `<div class="carousel-item active">`;
            }
            else {
                carouselItem = `<div class="carousel-item">`;
            }

            carouselItem += zone.carouselItems[i] + `</div>`;
            $("#carouselInner").append(carouselItem);
        }

        var info = `<h3>${zone.title}</h3>`;
        info += `<p>${zone.explanation}</p>`;

        $("#zoneDetailInfo").append(info);
    }

    $("#contact-form").submit(function(e) {

        e.preventDefault();

        $("#contact-success-message").slideUp();
        $("#contact-error-message").slideUp();

        var URL = "https://abc1234.execute-api.us-east-1.amazonaws.com/01/contact";

        var Namere = /[A-Za-z]{1}[A-Za-z]/;
        if (!Namere.test($("#name-input").val())) {

            $("#contact-error-message").html("Name can not less than 2 char <i class='fas fa-frown'></i>");
            $("#contact-error-message").slideDown();
            return;
        }

        var reeamil = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!reeamil.test($("#email-input").val())) {
            $("#contact-error-message").html("Please enter a valid email address <i class='fas fa-frown'></i>");
            $("#contact-error-message").slideDown();
            return;
        }

        if (!Namere.test($("#subject-input").val())) {

            $("#contact-error-message").html("Please say something <i class='fas fa-frown'></i>");
            $("#contact-error-message").slideDown();
            return;
        }

        var name = $("#name-input").val();
        var email = $("#email-input").val();
        var subject = $("#subject-input").val();
        var data = {
            name: name,
            email: email,
            subject: subject,
            sender: 'meryemsagcan@gmail.com'
        };

        $.ajax({
            type: "POST",
            url: "https://5m7uvz6e83.execute-api.us-east-2.amazonaws.com/contact",
            dataType: "json",
            crossDomain: "true",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(data),

            success: function () {
                $("#contact-success-message").slideDown();
                document.getElementById("contact-form").reset();
            },
            error: function (err) {
                console.log(err);
                $("#contact-error-message").html("Ooops... Something went wrong. Please try again later <i class='fas fa-frown'></i>");
                $("#contact-error-message").slideDown();
            }
        });
    });
});