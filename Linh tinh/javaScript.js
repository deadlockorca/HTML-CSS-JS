alert("Hello World");
//variable
//var
//const
//let
let formatted = true
if(formatted){
    console.log('Javascript so ez!!!');
}
//Statements
let message = 'Welcome to my website';
console.log(message)
//Date Type
let couter = 100;//Couter is number
console.log(typeof(couter));

couter = false;//boolean
console.log(typeof(couter));

couter = "aptech"//String
console.log(typeof(couter));

let data;
console.log(data);
console.log(typeof(data));//Khong xac dinh kieu du lieu

//object data type
let obj = null
console.log(typeof obj);


let num = 100;
let price = 20.2;
let discount = 0.05

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

//NaN: Not a number
console.log('T'/2);//NaN

//Ket hop string '+'
let str = 'Java'
str = str + 'Script';
console.log(str);

//String
let s = 'JavaScript'
s[0]='4'
console.log(s)

//Boolean
console.log(Boolean('connect'));//true
console.log(Boolean(''));//false

//Object tyoe
let studentObject = {};
console.log(typeof(studentObject));


//Khai bao doi tuong employee
//Khai bao thuoc tinh cua object: fistName, lastName
let employee = {
    firstName: 'Nguyen',
    lastName: 'Phu Trong'
};
//Truy cap thuoc tinh cua doi tuong
console.log(employee.firstName);
console.log(employee.lastName);
//Contact detals
let contact = {
    firstName:'Nguyen',
    lastName:'Minh Chinh',
    email:'Chinh@gmail.com',
    phone: '0818666456',
    address:(
        building:'1000',
        street:'HBT',
        city:'Hue',
        country:'VN'
    )
}
//De truy cap vao thuoc tinh (propery) cua doi tuong (object)
//Sun dung .or[]: contact.firstName or contact['firstName'] 
console.log(contact['age']);
contact.age = 25
//delete property
delete contact.email;

contact.firstName = 'Ngo';
console.log(contact);
//Checking of a property exists?
//properyName in objectName
let student = {
    firstName :'Dao';
    lastName:'Hai';
    studentID: 100;
}
console.log('age' in student);//false
console.log('studentID' in student);//true
