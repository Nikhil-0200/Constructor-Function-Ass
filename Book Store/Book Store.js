"use strict";

function CreateAuthor(name, birthYear, nationality){
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
}

function CreateBook(title, author, genre, price){
    this.title = title;
    this.author = author;
    this.CreateAuthor = CreateAuthor;
    this.genre = genre;
    this.price = price;

    this.getBookInfo = function(){
        console.log(`Book Title: ${this.title}, Book Author: ${this.author.name}, Book Genre: ${this.genre}, Book Price: ${this.price}`)
    }
}

let author1 = new CreateAuthor("Nikhil", 2000, "Indian");
let author2 = new CreateAuthor("Chetan Bhagat", 1996, "Indian");
let author3 = new CreateAuthor("Kapil Dev", 1950, "Indian");
let author4 = new CreateAuthor("Sachin Tendulkar", 1978, "Indian");
let author5 = new CreateAuthor("Alex Braun", 1985, "German");
let author6 = new CreateAuthor("Pat Cummins", 1980, "Austrailan");



let Book1 = new CreateBook("The Sins", author1, "Haunted", 2000);
let Book2 = new CreateBook("The Once Upon A Time", author2, "Romantic", 1000);
let Book3 = new CreateBook("How We Won", author3, "Adventures", 1500);
let Book4 = new CreateBook("The GOD", author4, "Motivational", 500);
let Book5 = new CreateBook("MIC- Bhopal Gas Leak ", author5, "Story", 800);
let Book6 = new CreateBook("We are Fighter", author6, "Motivational", 700)


let arr = [
    Book1, Book2, Book3, Book4, Book5, Book6
];

function displayBooks(){
    arr.forEach((ele)=>console.log(ele))
}

displayBooks()