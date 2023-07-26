class Person {
    private _name: string;
    constructor(name: string) {
        this._name = name
    }
    public get name() {
        return this._name
    }
    public set name(newName: string) {
        this._name = newName
    }
    public greeting(): void {
        console.log(`я человек меня звать ${this._name}`)
    }

}
class Employee extends Person {
    private _job: string
    constructor(name: string, job: string) {
        super(name)
        this._job = job
    }
    greeting(): void {
        console.log(`я работник меня звать ${this.name}`)
    }
}
class Developer extends Employee {
    private _level: string;
    constructor(name: string, job: string, level: string) {
        super(name, job)
        this._level = level
    }
    greeting(): void {
        console.log(`я прогер меня звать ${this.name}`)
    }
}
let czlowiek = new Person('Maciej')
let pracownik = new Employee('Andrzej', 'pisarz')
let programista = new Developer('Ivan', 'progamista', 'junior')
const listaLudzi: Person[] = [czlowiek, pracownik, programista]

function massGriting(persons: Person[]){
    for (let i=0; i< persons.length; i++){
        const person = persons[i]
        person.greeting()
    }
}
massGriting(listaLudzi) 