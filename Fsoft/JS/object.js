var student = {
    firstName: "Nguyen",
    lastName: "Van A",
    fullName:   function(){
        return `${this.firstName} - ${this.lastName}`;
    },
    age: 20,
    address: [{street: "Duy Tan"}, {street: "Doi Can"}],
    class: "React Developer",
    points: {
        math: 10,
        biology: 50,
        physical: 80
    },
    isGraduate: function(){
        return this.age < 22 ? false : true;
    } 
};
var propertyName = "firstName";
var ojbBracket = {
    mark: 100,
    yearsOld: 20,
};
var objProperty = {
    points: "mark",
    age : "yearsOld",
};
var fptStudent = { age : 20};
fptStudent.address = " 17 Duy Tan, Cau Giay";
fptStudent["name"]={};
fptStudent["name"][firstName] = "Nguyen";
fptStudent["name"][lastName] = "Van B";



console.log("fptStudent: ",fptStudent);
console.log(`student[${propertyName}]: `, student['${propertyName}']);
console.log("student.points: ", student.points);
console.log("student.points: ", student["points"].math);
console.log("Points: ", propertyName[objProperty.points]);





