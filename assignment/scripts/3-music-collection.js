console.log("***** Music Collection *****");

const collection = [];

function addToCollection(title, artist, yearPublished) {
  collection.push({
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  })
  //return collection[collection.length -1];



  console.log(addToCollection("Dance Fever", "Florence and the Machine", "2023"));
  console.log(collection);

  console.log(addToCollection("Lungs", "Florence and the Machine", "2009"));
  console.log(collection);

  console.log(addToCollection("Un Dia Normal", "Juanes", "2002"));
  console.log(collection);

  console.log(addToCollection("Mind Over Matter", "Young the Giant", "2014"));
  console.log(collection);

  console.log(addToCollection("This is Why", "Paramore", "2023"));
  console.log(collection);

  console.log(addToCollection("In our own sweet time", "Vance Joy", "2022"));
  console.log(collection);

console.log(collection);

let showCollection = [];
console.log(collection.length);

for (let i = 0; i < collection.length; i++){
    console.log(${title}  by  ${artist}  , published in  ${yearPublished});
}
};