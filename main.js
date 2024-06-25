"use strict";
//  Q 39
Object.defineProperty(exports, "__esModule", { value: true });
// Creating a function with values in string
// function city_country(city:string,country:string):string{
//   return `${city} , ${country}`
// }
// //  Calling a function and printing the return values
// console.log(city_country("Karachi" , "Pakistan"));
// console.log(city_country("Tokyo" , "Japan"));
// console.log(city_country("Dubai" , "UAE"));
// console.log(city_country("Berlin" , "Germany"));
//  Q 40
// function make_album(artist_name: string, album_title: string, tracks?: number) {
//     let album: { artist: string, title: string, tracks?: number } = {
//         artist: artist_name,
//         title: album_title,
//     };
//     if (tracks !== undefined) {
//         album.tracks = tracks;
//     }
//     return album;
// }
// //  Calling three functions and creating three variables with different values
// let album1 = make_album("Hamza", "Album title 1");
// console.log(album1); 
// let album2 = make_album("Ali", "Album title 2");
// console.log(album2); 
// let album3= make_album("Usman", "Album title 3", 12);
// console.log(album3); 
//  Q 41
// // creating a function to call magicians names from an array
// function show_magicians(magicians:string[]) {
//     magicians.forEach(name => console.log(name));
//     };
//     // defining an array of magicians names 
//     let magicians_names=["java","typescript","python"];
//     // calling the function to print each magicians name
//     show_magicians(magicians_names);
//  Q 42
// creating a function to call magicians names from an array
// function show_magicians(magicians:string[]) {
//     magicians.forEach(name => console.log(name));
//     };
//     // make great function with map method to modify the array
//     function make_great(magicians:string[]) {
//         return  magicians.map(name=> `The Great ${name}`);
//     }
//     // defining an array of magicians names 
//     let magicians_names = ["Java","Typescript","Python"];
//     //  Calling make great  function to modify the magicians names function
//     let great_magicians = make_great(magicians_names);
//     console.log(great_magicians);
//     // calling show magicians function that shows modified list of magicians
//     show_magicians(great_magicians);
//  Q 43
// // Creating a function 
// function show_magicians(magicians:string[]) {
//     magicians.forEach(name => console.log(name));
//         };
// // make great function with map method to modify the array
//     function make_great(magicians:string[]) {
//         return  magicians.map(name=> `The Great ${name}`);
//     }
//     // defining an array of magicians names 
//     let magicians_names = ["Java","Typescript","Python"];
//      let copy_magicians_names=magicians_names.slice();
//      let copy_great_magicians=make_great(copy_magicians_names);
//      console.log("n\ Original Array \n");
//      show_magicians(magicians_names);
//      console.log("\nCopied Array\n");
//      show_magicians(copy_great_magicians);
// Q 44
// Creating a function to print an array of ingredients of a sandwich
// function makeSandwich(...items:string[]){
// console.log("\n Making a sandwich with the following items\n :");
// items.forEach(singleItem =>
// console.log("\t " + singleItem));
// console.log("Now enjoy sandwich!");
// } 
// calling a function with different arguments
// makeSandwich("Bread", "Cheese", "Lettuce", "Tomato", "Mayonnaise");
// // makeSandwich("Lettuce", "Tomato", "Mayonnaise");
// // makeSandwich("Bread", "Cheese", "Lettuce" , "Ketchup", "Mustard")
// Q 45
//  Define a function to create a car object with optional parameters
function create_car(manufacturer, model, ...options) {
    let car = {
        manufacturer: manufacturer,
        model: model
    };
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });
    return car;
}
let my_car = create_car("Toyota", "Corolla", "Color:Black", "Sunroof:true");
console.log(my_car);
// Initialize the car object with manufacturer and model
// Add additional options to the car object
// Call the function to create a car object
// Print the variable to ensure all the information is stored correctly in the car object
