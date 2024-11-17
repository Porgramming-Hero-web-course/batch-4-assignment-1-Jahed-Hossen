{
    class Car {
        make: string;
        model: string;
        year: number;
    
        constructor(_make: string, _model: string, _year: number) {
            this.make = _make;
            this.model = _model;
            this.year = _year;
        }
    
        getCarAge(): number {
            const currentYear = 2024;
              const Car_Age=currentYear - this.year;
            return Car_Age ;
        }
    }
    
    
    const car = new Car("Honda", "Civic", 2018);
    const carAge=car.getCarAge();
    console.log(carAge);

}