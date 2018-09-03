// A class that
class Person {
	constructor(name, age, gender) {
		this.name = name;
		this.age = age;
		this.gender = gender;
	}
}

class Instructor extends Person {
	constructor(name, age, gender, subject) {
		super(name, age, gender);
		this.subject = subject;
	}
}

class Student extends Person {
	constructor(name, age, gender, subjects=[]) {
		super(name, age, gender);
		this.subjects = subjects;
	}

	addSubject(subject) {
		if (!this.subjects.includes(subject)) {
			this.subjects.push(subject);
		}
	}

	removeSubject(subject) {
		if (this.subjects.includes(subject)) {
			let indexOfSubject = this.subjects.indexOf(subject);
			this.subjects.splice(indexOfSubject, 1);
		}
	}
}

class Classroom {
	constructor(instructor, capacity, subject) {
		this.instructor = instructor;
		this.students = []
		this.subject = subject;
		if(capacity < 0) {
			this.capacity = 0;
		} else {
			this.capacity = capacity;
		}
	}

	get classFull() {
		if(this.students.length >= this.capacity) {
			return true;
		} else {
			return false;
		}

		// The cleaner solution would be: 
		// return this.students.length >= this.capacity
	}

	addStudent(student) {
		if (!this.classFull && student.subjects.includes(this.subject) && !this.students.includes(student)) {
			this.students.push(student);
			this.capacity++;
		}
	}

	removeStudent(student) {
		if (this.students.includes(student)) {
			let indexOfStudent = this.students.indexOf(student);
			this.students.splice(indexOfStudent, 1);
		}
	}

	changeInstructor(instructor) {
		if(instructor.subject === this.subject)) {
			this.instructor = instructor;
		}
	}
}