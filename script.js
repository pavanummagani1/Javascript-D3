//Class-Question
class Car{
    engine;
    power;
    body;
    enginecc;
    color;
    brand;
    constructor(engine,power, body, engineCC, colour, brand){
        this.engine = engine;
        this.power = power;
        this.body = body;
        this.enginecc = engineCC;
        this.color = colour;
        this.brand = brand;
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
var xuv700= new Car("Diesel", "600bhp", "Metal", "2000cc", "Blue","Mahindra" );
XUV7OO.start();
XUV7OO.acceleration();
XUV7OO.brake();
XUV7OO.stop();
console.log(xuv7OO.brand);
console.log(xuv7OO.engine);


console.log("_________________________________________________________________________________________________");

//Question-1
class Book{
    title;
    author;
    isbn;
    constructor(bookTitle, bookAuthor, bookIsbn){
        this.title=bookTitle;
        this.author=bookAuthor;
        this.isbn=bookIsbn;
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
    constructor(productName, productPrice, productCategory){
        this.name=productName;
        this.price = productPrice;
        this.category = productCategory;
    }
    applyDiscount(amount){
        // this.price=Amount
        this.finalPrice = this.price-amount;
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
    constructor(accountHolderName,accountNumber, accountBalance){
        this.accountholderName=accountHolderName;
        this.accountNumber=accountNumber;
        this.accountBalance=accountBalance;
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
    constructor(vehicleModel, vehicleLicenseplate, vehicleMilage,fuel){
        this.model=vehicleModel;
        this.licenseplate = vehicleLicenseplate;
        this.milage = vehicleMilage;
        this.fuel=fuel;
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
    constructor (studnetName, subjectGrade){
        this.name = studnetName;
        this.grade = subjectGrade;
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
