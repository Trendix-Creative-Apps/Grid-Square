var squareHeight = null;

$(document).ready(function() {
    function setSquares() {
        $('.square').each(function () {
            var square = $(this);

            if (squareHeight != null) {
                square.css('height', squareHeight);
                return true;
            }

            var divisor = 1;
            if (square.hasClass('x2')) {
                divisor = 2;
            }
            if (square.hasClass('x3')) {
                divisor = 3;
            }

            var width = square.css('width').replace('px', '');

            squareHeight = width / divisor;

            square.css('height', width / divisor);
        });
    }

    setSquares();

    function resizeSquares() {
        squareHeight = null;
        setSquares();
    }

    $(window).resize(resizeSquares);
});