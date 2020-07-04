$(document).ready(function () {

    let zoneUsa = {
        title : "United States of America",
        explanation : "I visited USA at 2014. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis laboriosam autem ab delectus sequi perferendis rerum illo. Voluptatibus quaerat eveniet fugiat commodi delectus! Voluptatibus.",
        carouselItems: [
            '<img src="assets/imgs/newyork.jpg" alt=""><div class="carousel-caption d-none d-md-block"><h3><span class="badge badge-dark light">New York</span></h3></div>',
            '<img src="assets/imgs/atlanticcity.jpg" alt=""><div class="carousel-caption d-none d-md-block"><h3><span class="badge badge-dark light">Atlantic City</span></h3></div>'
        ]
    };
    
    let zoneEurope = {
        title : "Europe",
        explanation : "I visited Europe...lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis laboriosam autem ab delectus sequi perferendis rerum illo. Voluptatibus quaerat eveniet fugiat commodi delectus! Voluptatibus.",
        carouselItems: [
            '<img src="assets/imgs/newyork.jpg" alt=""><div class="carousel-caption d-none d-md-block"><h3><span class="badge badge-dark light">New York</span></h3></div>',
            '<img src="assets/imgs/atlanticcity.jpg" alt=""><div class="carousel-caption d-none d-md-block"><h3><span class="badge badge-dark light">Atlantic City</span></h3></div>'
        ]
    };
    
    let zoneTurkey = {
        title : "Turkey",
        explanation : "Ohh my sweet hometown...lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis laboriosam autem ab delectus sequi perferendis rerum illo. Voluptatibus quaerat eveniet fugiat commodi delectus! Voluptatibus.",
        carouselItems: [
            '<img src="assets/imgs/newyork.jpg" alt=""><div class="carousel-caption d-none d-md-block"><h3><span class="badge badge-dark light">New York</span></h3></div>',
            '<img src="assets/imgs/atlanticcity.jpg" alt=""><div class="carousel-caption d-none d-md-block"><h3><span class="badge badge-dark light">Atlantic City</span></h3></div>'
        ]
    };
    
    let zoneSoutheastAsia = {
        title : "Southeast Asia",
        explanation : "My dream continent...lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis laboriosam autem ab delectus sequi perferendis rerum illo. Voluptatibus quaerat eveniet fugiat commodi delectus! Voluptatibus.",
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
    
    $(document).on("click", "#usaZone", function(){
        $(this).mapster("deselect");
    
        $("#overlay").load("../../zoneDetails.html", function(){
            populateZoneDetails(zoneUsa);
        });
    
        $("#overlay").slideDown();
    });
    
    $(document).on("click", "#europeZone", function(){
        $(this).mapster("deselect");
    
        $("#overlay").load("../../zoneDetails.html", function(){
            populateZoneDetails(zoneEurope);
        });
    
        $("#overlay").slideDown();
    });
    
    $(document).on("click", "#turkeyZone", function(){
        $(this).mapster("deselect");
    
        $("#overlay").load("../../zoneDetails.html", function(){
            populateZoneDetails(zoneTurkey);
        });
    
        $("#overlay").slideDown();
    });
    
    $(document).on("click", "#southeastZone", function(){
        $(this).mapster("deselect");
    
        $("#overlay").load("../../zoneDetails.html", function(){
            populateZoneDetails(zoneSoutheastAsia);
        });
    
        $("#overlay").slideDown();
    });
    
    $("#overlay").on("click", function(){
        
        if (!$(event.target).closest('#popup').length) {
            $("#overlay").slideUp();
        }
    });
    
    $("#overlay").on("click", "#popupClose", function(){
        $("#overlay").slideUp();
    });
    
    function populateZoneDetails(zone)
    {
        /* add carousel items */
        for(var i=0; i<zone.carouselItems.length; i++)
        {
            var carouselItem = "";
            if(i == 0)
            {
                carouselItem = `<div class="carousel-item active">`;
            }
            else
            {
                carouselItem = `<div class="carousel-item">`;
            }
    
            carouselItem += zone.carouselItems[i] + `</div>`;
            $("#carouselInner").append(carouselItem);
        }
    
        var info = `<h3>${zone.title}</h3>`;
        info += `<p>${zone.explanation}</p>`;
        
        $("#zoneDetailInfo").append(info);
    }
});




