"use strict";
{
    var Car = /** @class */ (function () {
        function Car(_make, _model, _year) {
            this.make = _make;
            this.model = _model;
            this.year = _year;
        }
        Car.prototype.getCarAge = function () {
            var currentYear = 2024;
            var Car_Age = currentYear - this.year;
            return Car_Age;
        };
        return Car;
    }());
    var car = new Car("Honda", "Civic", 2018);
    var carAge = car.getCarAge();
    console.log(carAge);
}
