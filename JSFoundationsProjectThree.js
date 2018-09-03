/**
 * A class for a person. Contains the name and age.
 *
 * Example usage: See lines X-Y
 *
 */
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

/**
 * A class for an instructor. Extends the Person class defined above. Contains the name, age, and speakingVolume.
 *
 * Example usage: See lines X-Y
 *
 */
class Instructor extends Person {
	constructor(name, age, speakingVolume) {
		super(name, age);
		this.speakingVolume = speakingVolume;	// speaking volume should be 0-100
	}

	/**
	 * Make a method called introduceSelf() that logs an instructor introducing themselves to the class.
	 * The log should be in ALL CAPS with a bunch of excalamtion marks (!) at the end if this instructor's speakingVolume is greater than 75.
	 */
	introduceSelf() {
		let introMsg = `Hello, I am your instructor, ${this.name}. Welcome to the class!`;
		if(this.speakingVolume > 75){
			console.log(introMsg.toUpperCase()+"!!!!!!!!!");
		} else {
			console.log(introMsg);
		}
	}
}

/**
 * A class for a student. Extends the Person class defined above. Contains the name, age, and subjects the student wants to learn.
 *
 * Example usage: See lines X-Y
 *
 */
class Student extends Person {
	constructor(name, age, subjects) {
		super(name, age);
		if (subjects) {
			this.subjects = subjects;
		} else {
			this.subjects = [];
		}
	}

	// This method should add a subject to this student's array of subjects.
	// What if the subject already exists in this student's array of subjects?
	addSubject(subject) {
		if (!this.subjects.includes(subject)) {
			this.subjects.push(subject);
		}
	}

	// This method should remove a subject from this student's array of subjects.
	// What if the subject doesn't exist in this student's array of subjects?
	removeSubject(subject) {
		if (this.subjects.includes(subject)) {
			let indexOfSubject = this.subjects.indexOf(subject);
			this.subjects.splice(indexOfSubject, 1);
		}
	}
}

/**
 * A class for a classroom. Contains the class's instructor, capacity, students, and subject.
 *
 * instructor: an instance of the Instructor class defined above
 * capacity: a number that means how many students can this classroom have
 * students: an array that is initialized to an empty array
 * subject: a string that means the subject that this class teaches
 *
 * Example usage: See lines X-Y
 *
 */
class Classroom {
	constructor(instructor, capacity, subject) {
		this.instructor = instructor;
		this.subject = subject;
		this.students = []

		if(capacity < 0) {
			this.capacity = 0;
		} else {
			this.capacity = capacity;
		}
	}

	// This is a computed property that return true if this classroom is at its capacity
	// and returns false if this classroom is not at its capacity.
	get classFull() {
		if(this.students.length >= this.capacity) {
			return true;
		} else {
			return false;
		}

		// The cleaner solution would be: 
		// return this.students.length >= this.capacity
	}

	// This method should add a student to this classroom
	addStudent(student) {
		if(this.classFull) {
			console.log("Sorry, class capacity is full.")
		} else if(this.students.includes(student)) {
			console.log(`${student.name} is already in this classroom.`);
		} else if(!student.subjects.includes(this.subject)) {
			console.log(`${student.name} can't be added to this class because they chose other subjects.`)
		} else {
			this.students.push(student);
		}
	}

	// This method should remove a student from this classroom
	removeStudent(student) {
		if (this.students.includes(student)) {
			let indexOfStudent = this.students.indexOf(student);
			this.students.splice(indexOfStudent, 1);
		}
	}

	// This method should change this classroom's instructor.
	changeInstructor(instructor) {
		this.instructor = instructor;
	}
}

/**************************************************
The following code runs the functions defined above
***************************************************/
// uncomment the following lines to run and test your code.

/**
 * Here's the scenario:
 * 
 * We will have two classrooms, each has a subject and an instructor.
 * We will have a bunch of students. Some students are in both classes, some are in only one of them.
 * The following code will create this scenario using the classes defined above.
 */

let jennifer = new Instructor("Jennifer", 32, 30);
jennifer.introduceSelf();

let austin = new Instructor("Austin", 33, 80);
austin.introduceSelf();

let djangoClass = new Classroom(jennifer, 5, "Django");
let reactClass = new Classroom(austin, 5, "React");

let adam = new Student("Adam", 19, ["Django", "React"]);
let ghalya = new Student("Ghalya", 29, ["React"]);
let rashid = new Student("Rashid", 35, ["Django"]);
let Salman = new Student("Salman", 23, ["Django"]);
let Aya = new Student("Aya", 26, ["Django", "React"]);
let Ali = new Student("Ali", 28, ["React"]);
let Ahmad = new Student("Ahmad", 27, ["Django", "React"]);
let Malak = new Student("Malak", 31, ["Django", "React"]);

reactClass.addStudent(adam)
reactClass.addStudent(ghalya)
reactClass.addStudent(Aya)
reactClass.addStudent(Ali)
reactClass.addStudent(Ahmad)

djangoClass.addStudent(adam)
djangoClass.addStudent(rashid)
djangoClass.addStudent(Salman)
djangoClass.addStudent(Ahmad)

// this one shuold log "adam is already in this classroom."
djangoClass.addStudent(adam);

// this one should log "ghalya can't be added to this class because they chose other subjects."
djangoClass.addStudent(ghalya);

// This one should log "Sorry, class capacity is full."
reactClass.addStudent(Malak)