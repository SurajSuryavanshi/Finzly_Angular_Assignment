"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(rollNo, firstname, lastname, marks) {
        this.rollNo = rollNo;
        this.firstname = firstname;
        this.lastname = lastname;
        this.marks = marks;
    }
    Student.prototype.getDeatailsOfStudent = function () {
        console.log("\n    RollNo       :: ".concat(this.rollNo, " ,\n    First Name   :: ").concat(this.firstname, " ,\n    Last Name    :: ").concat(this.lastname, ",\n    Marks        :: ").concat(this.marks, "\n"));
    };
    return Student;
}());
exports.Student = Student;
