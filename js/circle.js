(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function (otherRadius) {
            // TODO: complete this method
            // hint: area = pi * radius^2
            if (otherRadius === undefined) {
                return (Math.PI * (this.radius ** 2));
            }
            else {
                return (Math.PI * (otherRadius**2));
            }
        },

        logInfo: function (doRounding, addRadius) {
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
                if (doRounding) {
                    if (addRadius === undefined) {
                        console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(this.getArea()));
                    }
                    else {
                        console.log("Area of a circle with radius: " + addRadius + ", is: " + Math.round(this.getArea(addRadius)));
                    }
                }
                else {
                    if (addRadius === undefined) {
                        console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea());
                    }
                    else {
                        console.log("Area of a circle with radius: " + addRadius + ", is: " + this.getArea(addRadius));
                    }
                }
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false, 5);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true, 5);
})();