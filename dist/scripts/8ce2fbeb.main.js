$(document).ready(function(){
    //$('#nav').localScroll(800);

    RepositionNav();

    $(window).resize(function(){
        RepositionNav();
    });

    //.parallax(xPosition, adjuster, inertia, outerHeight) options:
    //xPosition - Horizontal position of the element
    //adjuster - y position to start from
    //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
    //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
    // $('#intro').parallax("50%", 0, 0.1, true);
    // $('#second').parallax("50%", 0, 0.1, true);
    // $('.bg').parallax("50%", 2500, 0.4, true);
    // $('#third').parallax("50%", 2750, 0.3, true);
    // $('#grass').parallax("50%", 2750, 0.3, true);

    var deck = new $.scrolldeck({
        slides: '.slide',
        buttons: '#nav li a',
        duration: 600,
        easing: 'easeInOutExpo'
    });

    // // initialize the plugin, pass in the class selector for the sections of content (blocks)
    // var sor = deck.scrolldeck;

    // assign function to add behavior for onBlockChange event
    // scrollorama.onBlockChange(function() {
    //     var i = scrollorama.blockIndex;
    //     $('#console')
    //         .css('display','block')
    //         .text('onBlockChange | blockIndex:'+i+' | current block: '+scrollorama.settings.blocks.eq(i).attr('id'));
    // });

    // animate some examples
    // scrollorama.animate('#unpin',{ duration:500, property:'padding-top', start:400, pin:true });
    // scrollorama.animate('#fade-in',{ delay: 400, duration: 300, property:'opacity', start:0 });
    // scrollorama.animate('#fly-in',{ delay: 400, duration: 300, property:'left', start:-1400, end:0 });
    // scrollorama.animate('#rotate-in',{ duration: 800, property:'rotate', start:720 });
    // scrollorama.animate('#zoom-in',{ delay: 200, duration: 600, property:'zoom', start:8 });
    // scrollorama.animate('#any',{ delay: 700, duration: 200, property:'opacity', start:0 });
    // scrollorama.animate('#any',{ delay: 800, duration: 200, property:'letter-spacing', start:18 });

    // // animate the parallaxing
    // scrollorama.animate('#parallax2',{ delay: 400, duration: 600, property:'top', start:800, end:-800 });
    // scrollorama.animate('#parallax3',{ delay: 200, duration: 1200, property:'top', start:500, end:-500 });

    // // animate some easing examples
    // var $easing = $('#easing'),
    //     $clone = $easing.clone().appendTo('#examples-easing')
    //                     .css({position:'relative',top:'-2.95em'})
    //                     .lettering();
    // $easing.css({ color: '#131420', textShadow: '0 1px 0 #363959' });
    // easing_array = [    'easeOutBounce',
    //                     'easeOutQuad',
    //                     'easeOutCubic',
    //                     'easeOutQuart',
    //                     'easeOutQuint',
    //                     'easeOutExpo'       ];
    // $clone.find('span')
    //     .each( function( idx, el ){
    //         scrollorama.animate( $(this), { delay:400, duration: 500,
    //                                         property:'top', end: 300,
    //                                         easing: easing_array[idx] });
    //     })

});
