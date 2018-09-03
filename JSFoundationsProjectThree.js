/**
 * A class for a person. Contains the name and age.
 *
 * Example usage: let guy = new Person("guy", 32);
 *
 */
class Person {
	constructor(name, age) {
		// your code goes here!
	}
}

/**
 * A class for an instructor. Extends the Person class defined above. Contains the name, age, and speakingVolume.
 *
 * speakingVolume: a number between 0 and 100 
 *
 * Example usage: See lines X-Y
 *
 */
class Instructor extends Person {
	constructor(name, age, speakingVolume) {
		// your code goes here!
	}

	/**
	 * Make a method called introduceSelf() that logs an instructor introducing themselves to the class.
	 * The log should be in ALL CAPS with a bunch of excalamtion marks (!) at the end if this instructor's speakingVolume is greater than 75.
	 */
	introduceSelf() {
		// your code goes here!
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
		// your code goes here!
	}

	// This method should add a subject to this student's array of subjects.
	// What if the subject already exists in this student's array of subjects?
	addSubject(subject) {
		// your code goes here!
	}

	// This method should remove a subject from this student's array of subjects.
	// What if the subject doesn't exist in this student's array of subjects?
	removeSubject(subject) {
		// your code goes here!
	}
}

/**
 * A class for a classroom. Contains the classroom's instructor, capacity, students, and subject.
 *
 * instructor: an instance of the Instructor class defined above
 * capacity: the maximum number of students this classroom can have
 * students: an array that is initialized to an empty array
 * subject: the subject that this classroom teaches
 *
 * Example usage: See lines X-Y
 *
 */
class Classroom {
	constructor(instructor, capacity, subject) {
		// your code goes here!
	}

	/**
	 * This is a computed property that return true if this classroom is at its capacity
	 * and returns false if this classroom is not at its capacity.
	 */
	get classFull() {
		// your code goes here!
	}

	// This method should add a student to this classroom
	addStudent(student) {
		// your code goes here!
	}

	// This method should remove a student from this classroom
	removeStudent(student) {
		// your code goes here!
	}

	// This method should change this classroom's instructor.
	changeInstructor(instructor) {
		// your code goes here!
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

// let jennifer = new Instructor("Jennifer", 32, 30);
// jennifer.introduceSelf();

// let austin = new Instructor("Austin", 33, 80);
// austin.introduceSelf();

// let djangoClass = new Classroom(jennifer, 5, "Django");
// let reactClass = new Classroom(austin, 5, "React");

// let adam = new Student("Adam", 19, ["Django", "React"]);
// let ghalya = new Student("Ghalya", 29, ["React"]);
// let rashid = new Student("Rashid", 35, ["Django"]);
// let Salman = new Student("Salman", 23, ["Django"]);
// let Aya = new Student("Aya", 26, ["Django", "React"]);
// let Ali = new Student("Ali", 28, ["React"]);
// let Ahmad = new Student("Ahmad", 27, ["Django", "React"]);
// let Malak = new Student("Malak", 31, ["Django", "React"]);

// reactClass.addStudent(adam)
// reactClass.addStudent(ghalya)
// reactClass.addStudent(Aya)
// reactClass.addStudent(Ali)
// reactClass.addStudent(Ahmad)

// djangoClass.addStudent(adam)
// djangoClass.addStudent(rashid)
// djangoClass.addStudent(Salman)
// djangoClass.addStudent(Ahmad)

// // this one shuold log "adam is already in this classroom."
// djangoClass.addStudent(adam);

// // this one should log "ghalya can't be added to this class because they chose other subjects."
// djangoClass.addStudent(ghalya);

// // This one should log "Sorry, class capacity is full."
// reactClass.addStudent(Malak)