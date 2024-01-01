class Student {
    constructor(firstName, lastName, yearOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearOfBirth = yearOfBirth;
        this.grades = []; //пустой массив для хранения оценок студента
        this.attendance = new Array(25); //массив из 25 элементов, чтобы отслеживать посещаемость студента
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.yearOfBirth;
    }

    addGrade(grade) {
        this.grades.push(grade); //метод, добавляющий новую оценку в массив оценок 
    }

    calculateAverage(arr) {
        const sum = arr.reduce((a, b) => a + b, 0);
        return sum / arr.length;
    }

    getAverageGrade() {
        if (this.grades.length === 0) return 0; //вычисляет средний балл студента 
        return this.calculateAverage(this.grades);
    }

    present() {
        this.updateAttendance(true);
    }

    absent() {
        this.updateAttendance(false);
    }

    updateAttendance(value) {
        const index = this.attendance.findIndex(item => item === undefined);
        if (index !== -1) this.attendance[index] = value;
    }

    getAverageAttendance() {
        const attendedClasses = this.attendance.filter(item => item).length;
        const totalClasses = this.attendance.filter(item => item !== undefined).length;
        return totalClasses === 0 ? 0 : attendedClasses / totalClasses;
    }

    summary() {
        const averageGrade = this.getAverageGrade();
        const averageAttendance = this.getAverageAttendance();

        if (averageGrade > 90 && averageAttendance > 0.9) {
            return 'Good for you!';
        } else if (averageGrade > 90 || averageAttendance > 0.9) {
            return 'Good, but you can do it better';
        } else {
            return 'Radish!';
        }
    }
}


const student1 = new Student('Mark', 'Tsukerberg', 1992);
const student2 = new Student('Bilbo', 'Beggins', 1996);
const student3 = new Student('Rayan', 'Gosling', 2002);


student1.addGrade(93);
student1.addGrade(88);
student1.present();
student1.absent();
student1.present();

student2.addGrade(65);
student2.addGrade(85);
student2.present();
student2.present();
student2.absent();

student3.addGrade(95);
student3.addGrade(90);
student3.present();
student3.present();
student3.present();

console.log('Student 1 average grades:', student1.getAverageGrade());
console.log('Student 1 average attendance:', student1.getAverageAttendance());
console.log('Student 2 average grades:', student2.getAverageGrade());
console.log('Student 2 average attendance:', student2.getAverageAttendance());
console.log('Student 3 average grades:', student3.getAverageGrade());
console.log('Student 3 average attendance:', student3.getAverageAttendance());

console.log('Student 1 summary:', student1.summary());
console.log('Student 2 summary:', student2.summary());
console.log('Student 3 summary:', student3.summary());

