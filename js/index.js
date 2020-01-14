$(".nav-link").on("click", function(){ 
    $()
})

$('#example-one a').click(function(e) {
    $('#example-one a').removeClass('current_page_item');
    $(this).addClass('current_page_item');
});

$(".scrollButton").click(function() {
    $(index).animate({
        scrollBottom: $("#caseStudyLocation").offset().top
    }, 2000)
});