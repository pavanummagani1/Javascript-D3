//Class-Question
class Car{
    engine;
    power;
    body;
    enginecc;
    color;
    brand;
    constructor(Engine,Power, Body, CC, Colour, Brand){
        this.engine = Engine;
        this.power = Power;
        this.body = Body;
        this.enginecc = CC;
        this.color = Colour;
        this.brand = Brand;
    }
    start(){
        console.log(this.brand,'Car is Started');
    }
    acceleration(){
        console.log(this.brand, 'Maintain the Car Speed at 130KMPH');
    }
    brake(){
        console.log(this.brand, 'Brakes Applied, The Car is About to Stop');
    }
    stop(){
        console.log(this.brand, "Car is Stopped");
    }
}
var XUV7OO = new Car("Diesel", "600bhp", "Metal", "2000cc", "Blue","Mahindra" );
XUV7OO.start();
XUV7OO.acceleration();
XUV7OO.brake();
XUV7OO.stop();
console.log(XUV7OO.brand);
console.log(XUV7OO.engine);


console.log("_________________________________________________________________________________________________");

//Question-1
class Book{
    title;
    author;
    isbn;
    constructor(Title, Author, Isbn){
        this.title=Title;
        this.author=Author;
        this.isbn=Isbn;
    }
    checkOut(){
        console.log(this.title, "Book Borrowed by Someone");
    }
    returnBook(){
        console.log(this.title, "is avaliable to Borrow");
    }
    updateTitle(newTitle){
        this.title = newTitle;
    }
}

var book1 = new Book("JAVA", "ORACLE", "143341");
console.log(book1);
book1.returnBook();
book1.updateTitle("JAVASCRIPT");
console.log(book1);


var book2 = new Book("Python", "Py.org", "28401");
console.log(book2);
console.log(book2.title);
book2.checkOut();


var book3 = new Book("Java", "SunMicro-systems", "33728");
console.log(book3);
console.log(book3.author);

console.log("_________________________________________________________________________________________________");

//Question-2
class Product{
    name;
    price;
    category;
    constructor(Name, Price, Category){
        this.name=Name;
        this.price = Price;
        this.category = Category;
    }
    applyDiscount(Amount){
        // this.price=Amount
        this.finalPrice = this.price-Amount;
    }
    getPriceAtferDiscount(){
        // console.log(finalPrice);
        console.log(`The price of ${this.name} is ${this.finalPrice}`)
    }
}
var oil =   new Product("Sunflower Oil", "150", "Grocery");
console.log(oil);
oil.applyDiscount("20");
oil.getPriceAtferDiscount();

var laptop =  new Product("Dell Laptop", "49999", "Electronics");
console.log(laptop);
laptop.applyDiscount("9999");
laptop.getPriceAtferDiscount();

console.log("_________________________________________________________________________________________________");

//Question-3
class Bank {
    accountholderName;
    accountNumber;
    accountBalance;
    constructor(AccountHolderName, AccountNumber, AccountBalance){
        this.accountholderName=AccountHolderName;
        this.accountNumber=AccountNumber;
        this.accountBalance=AccountBalance;
    }
    deposit(amount){
        this.accountBalance = this.accountBalance+amount;
        console.log(`You have deposited ${amount} Your total Balance is  ${this.accountBalance}`);
    }
    withDraw(amount){
        console.log(`You have withdrawn ${amount}`);
        this.finalAccountBalance = this.accountBalance-amount;
    }
    getBalance(){
        console.log(`Your Account Balance is ${this.finalAccountBalance}`);

    }
}
var account1 = new Bank("Pavan Kalyan", "8500402873", 10000);
account1.deposit(10000);
console.log(account1);
account1.withDraw(1000);
account1.getBalance(2000);

console.log("_________________________________________________________________________________________________");


//Question-4
class Vehicle{
    model;
    licenseplate;
    milage;
    fuel;
    constructor(Model, Licenseplate, Milage,Fuel){
        this.model=Model;
        this.licenseplate = Licenseplate;
        this.milage = Milage;
        this.fuel=Fuel;
    }
    drive(miles){
        this.increasedMilage = miles/this.fuel;
        console.log(`The Milage Got increased by ${this.increasedMilage}`);
    }
    getMilage(){
        this.newMilage = this.milage+this.increasedMilage;
        console.log(`The New Miglage of vehicle is ${this.newMilage}`);
    }
}
var Safari = new Vehicle("BS6", "white", 24, 40);
Safari.drive(100);
Safari.getMilage();

console.log("_________________________________________________________________________________________________");



//Question-5

class Subject{
    name;
    grade;
    constructor (studnetName, Grade){
        this.name = studnetName;
        this.grade = Grade;
    }
    setGrade(newGrade){
        this.updatedGrade = newGrade;
    }
    getGrade(){
        console.log(`The New Grade is ${this.updatedGrade}`); 
    }
}
var Student1 = new Subject("PAVAN KALYAN", "C");
console.log(Student1.grade);
Student1.setGrade("A");
Student1.getGrade();

console.log("_________________________________________________________________________________________________");
