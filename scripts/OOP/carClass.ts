class Engine {
    drive(): void {
        console.log('silnik pracuje')
    }
}
class Wheel {
    drive(): void {
        console.log('kola jada')
    }
}
class Freshener {

}
class Car {
    engine: Engine;
    wheels: Wheel[];
    freshener: Freshener | undefined;
    constructor(freshener?: Freshener) {
        this.freshener = freshener
        this.engine = new Engine()
        this.wheels = []
        this.wheels.push(new Wheel())
        this.wheels.push(new Wheel())
        this.wheels.push(new Wheel())
        this.wheels.push(new Wheel())
    }
    drive(): void {
        this.engine.drive()
        this.wheels.forEach(elem => {
            elem.drive()
        })
    }

}
const ferare = new Car(new Freshener())
ferare.drive()
console.log(ferare.freshener)
