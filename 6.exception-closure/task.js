function parseCount(number) {
	let number1 = Number.parseFloat(number);
	if (Number.isNaN(number1)) {
		throw new Error("Невалидное значение");
	} else {
		return number1;
	}
}

function validateCount(number) {
	try {
		return parseCount(number);
	} catch (error) {
		return error;
	}
}

class Triangle {
	constructor(a, b, c) {
		if (((a + b) <= c) || ((a + c) <= b) || ((b + c) <= a)) {
			throw new Error("Треугольник с такими сторонами не существует");
		} else {
			this.a = a;
			this.b = b;
			this.c = c;
		}
	}

	get perimeter() {
		let x = (this.a + this.b + this.c);
		return x;
	}

	get area() {
		let x = (this.a + this.b + this.c) / 2;
		let area = Math.round(1000 * Math.sqrt(x * (x - this.a) * (x - this.b) * (x - this.c)) + Number.EPSILON) / 1000;
		return area;
	}
}

function getTriangle(a, b, c) {
	try {
		let trg = new Triangle(a, b, c);
		return trg;
	} catch (error) {
		let err = {
			get perimeter() {
				return "Ошибка! Треугольник не существует";
			},
			get area() {
				return "Ошибка! Треугольник не существует";
			}
		}
		return err;
	} finally {}
}