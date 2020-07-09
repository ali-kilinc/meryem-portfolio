$(document).ready(function () {

    let zoneUsa = {
        title: "United States of America",
        explanation: "I visited USA at 2015 for ICDM conference in Atlantic City. I also had opportunity to visit New York. Beatiful cities...",
        carouselItems: [
            '<img src="assets/imgs/usa1.jpg" alt=""><div class="carousel-caption d-none d-md-block"><h3><span class="badge badge-dark light">New York</span></h3></div>',
            '<img src="assets/imgs/usa2.jpg" alt=""><div class="carousel-caption d-none d-md-block"><h3><span class="badge badge-dark light">Atlantic City</span></h3></div>'
        ]
    };

    let zoneEurope = {
        title: "Europe",
        explanation: "Venice, Florence and Rome were cities I visited in Italy for my honeymoon. Dubrovnik fascinated me, it felt like I'm living in Game of Thrones :). I discovered London by walking 120 km in a week.",
        carouselItems: [
            '<img src="assets/imgs/italy.jpg" alt=""><div class="carousel-caption d-none d-md-block"><h3><span class="badge badge-dark light">Italy</span></h3></div>',
            '<img src="assets/imgs/croatia.jpg" alt=""><div class="carousel-caption d-none d-md-block"><h3><span class="badge badge-dark light">Croatia</span></h3></div>',
            '<img src="assets/imgs/england.jpg" alt=""><div class="carousel-caption d-none d-md-block"><h3><span class="badge badge-dark light">United Kingdom</span></h3></div>'   
        ]
    };

    let zoneTurkey = {
        title: "Turkey",
        explanation: "Home sweet home... Turkey has breathtaking places that everybody should visit someday.",
        carouselItems: [
            '<img src="assets/imgs/turkey4.jpg" alt=""><div class="carousel-caption d-none d-md-block"><h3><span class="badge badge-dark light">Antalya</span></h3></div>',
            '<img src="assets/imgs/turkey3.jpg" alt=""><div class="carousel-caption d-none d-md-block"><h3><span class="badge badge-dark light">İzmir</span></h3></div>',
            '<img src="assets/imgs/turkey2.jpg" alt=""><div class="carousel-caption d-none d-md-block"><h3><span class="badge badge-dark light">İstanbul</span></h3></div>',
            '<img src="assets/imgs/turkey1.jpg" alt=""><div class="carousel-caption d-none d-md-block"><h3><span class="badge badge-dark light">Amasya</span></h3></div>'
        ]
    };

    let zoneSoutheastAsia = {
        title: "Southeast Asia",
        explanation: "For me, most beautiful places on Earth. I really enjoyed every single second I spent there",
        carouselItems: [
            '<img src="assets/imgs/thailand.jpg" alt=""><div class="carousel-caption d-none d-md-block"><h3><span class="badge badge-dark light">Thailand</span></h3></div>',
            '<img src="assets/imgs/indonesia.jpg" alt=""><div class="carousel-caption d-none d-md-block"><h3><span class="badge badge-dark light">Indonesia</span></h3></div>',
            '<img src="assets/imgs/vietnam.jpg" alt=""><div class="carousel-caption d-none d-md-block"><h3><span class="badge badge-dark light">Vietnam</span></h3></div>',
            '<img src="assets/imgs/singapore.jpg" alt=""><div class="carousel-caption d-none d-md-block"><h3><span class="badge badge-dark light">Singapore</span></h3></div>',
            '<img src="assets/imgs/malaysia.jpg" alt=""><div class="carousel-caption d-none d-md-block"><h3><span class="badge badge-dark light">Malaysia</span></h3></div>'
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
                carouselItem = '<div class="carousel-item active">';
            }
            else {
                carouselItem = '<div class="carousel-item">';
            }

            carouselItem += zone.carouselItems[i] + '</div>';
            $("#carouselInner").append(carouselItem);
        }
        var info = '<h3>' + zone.title + '</h3>' + '<p>' + zone.explanation + '</p>';
        $("#zoneDetailInfo").append(info);
    }

    $("#contact-form").submit(function(e) {

        e.preventDefault();

        $("#contact-success-message").slideUp();
        $("#contact-error-message").slideUp();

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
            url: "https://5m7uvz6e83.execute-api.us-east-2.amazonaws.com/contact/contact",
            dataType: "json",
            crossDomain: true,
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
