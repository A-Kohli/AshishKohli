var myFullpage = new fullpage('#fullpage', {
    anchors: ['homepage', 'aboutpage', 'educationpage', 'skillspage', 'portfoliopage', 'contactpage'],
    menu: '#qmenu',
    scrollBar: true,
    verticalCentered: false,
    css3: true,
    scrollingSpeed: 700,
    navigation: true,
    // responsiveWidth: 481,
    controlArrows: false,
    // scrollOverflow: true,
    // scrollOverflowOptions: {
    //     click: true,
    //     submit: true,
    // },
    normalScrollElements: '.section .scrollable',
    keyboardScrolling: true,
    slidesNavigation: true,
});

$('.scrolldown a, .scroll.down').on('click', function () {
    try {
        // fullpage scroll
        $.fn.fullpage.moveSectionDown();
    } catch (error) {
        // normal scroll
        $root.animate({
            scrollTop: window.innerHeight
        }, 400, function () {});
    }

});

