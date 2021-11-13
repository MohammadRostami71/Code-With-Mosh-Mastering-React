import Me from "./me";

export function promote() {}

export default class Teacher extends Me {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }

    teach() {
        console.log('teach');
    }
}