TIME = 10;
ONE_MSEC = 1000;
TIMER = setInterval(function () { Count_Down() }, ONE_MSEC);

function Count_Down() {
    console.log( TIME );
    TIME--;
    if ( TIME < 0 ) {
        clearInterval ( TIMER );
    }
}