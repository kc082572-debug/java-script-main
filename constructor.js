// 1. Student object
function Student(name, rollNo, grade) {
  this.name = name;
  this.rollNo = rollNo;
  this.grade = grade;
}
let s1 = new Student("Ayan", 101, "A");
console.log(s1);

// 2. Book object
function Book(title, author, price) {
  this.title = title;
  this.author = author;
  this.price = price;
}
let b1 = new Book("JavaScript Basics", "John", 299);
console.log(b1);

// 3. Employee object
function Employee(id, name, salary) {
  this.id = id;
  this.name = name;
  this.salary = salary;
}
let e1 = new Employee(1, "Ravi", 30000);
console.log(e1);

// 4. Car object
function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}
let c1 = new Car("Toyota", "Innova", 2022);
console.log(c1);

// 5. Bank Account object
function BankAccount(accountNo, holderName, balance) {
  this.accountNo = accountNo;
  this.holderName = holderName;
  this.balance = balance;
}
let acc1 = new BankAccount(12345, "Amit", 5000);
console.log(acc1);

// 6. Mobile Phone object
function Mobile(brand, model, price) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}
let m1 = new Mobile("Samsung", "Galaxy S", 45000);
console.log(m1);

// 7. Movie object
function Movie(name, director, rating) {
  this.name = name;
  this.director = director;
  this.rating = rating;
}
let movie1 = new Movie("Inception", "Nolan", 9);
console.log(movie1);
