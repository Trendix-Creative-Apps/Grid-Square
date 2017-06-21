document.grid = {
    loop: 0,
    options: {
        squareHeight: null,
        columns: 5,
    },
    normalizeOptions: function(options) {
        if (options == undefined || options == null) {
            return;
        }
        this.options = Object.assign(this.options, options);
    },
    setSquares: function () {
        this.loop = 0;
        var squares = document.getElementsByClassName('square');

        for (var i = 0; i < squares.length; i++) {
            this.modelSquare(squares[i]);
        }
    },
    modelSquare: function(square) {
        var divisor = 1;
        // TODO hacer expresión regular y añadir validación para que xN sea menor o igual que options.columns
        if (this.hasClass(square, 'x2')) {
            divisor = 2;
        }
        if (this.hasClass(square, 'x3')) {
            divisor = 3;
        }

        this.loop = this.loop + divisor;

        if (this.loop % this.options.columns == 0) {
            square.style.marginRight = '0px';
        }

        if (this.options.squareHeight != null) {
            square.style.height = this.options.squareHeight + 'px';
            return false;
        }

        var width = square.clientWidth;

        this.options.squareHeight = width / divisor;

        square.style.height = this.options.squareHeight + 'px';
    },
    init: function(options) {
        this.normalizeOptions(options);
        this.setSquares();
    },
    hasClass: function(element, className) {
        return ( (" " + element.className + " ").replace(/[\n\t]/g, " ").indexOf(className) > -1 );
    }
};

window.addEventListener('load', function() {
    document.grid.init();
});

window.addEventListener('resize', function() {
    document.grid.options.squareHeight = null;
    document.grid.setSquares();
});