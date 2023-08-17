console.log("***** Music Collection *****");

const collection = [];
console.log("console logging collection:", collection);

//here we create a function that ----
function addToCollection(title, artist, yearPublished) {
  let newAlbum = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };
  collection.push(newAlbum);
  return newAlbum;
}

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

// let showCollection = [];
 // for (let i = 0; i < collection.length; i++){
  //   console.log(`${collection.title} by ${collection.artist}, published in ${collection.yearPublished}`);
  // }
  // console.log(showCollection());


//takes in array parameter
//console.log the number of items in the array 
//loop over the array 
//and console.log each album's info formatted like TITLE by ARTIST, published in YEAR.
//
//TODO: test showCollection function 

// console.log(collection.length);

function showCollection(array){
  console.log(array.length);
for (let i = 0; i < array.length; i++) {
  console.log(
    `${array[i].title}  by  ${array[i].artist}  , published in  ${array[i].yearPublished}`
  )
} 
}

// showCollection();
// console.log(showCollection(collection));

function findByArtist(artist) {
  let results = [];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].artist === artist) {
      results.push(collection[i]);
    }
  }
  return results;
}
//TEST-----------------------

// Test artist not in collection
const notFoundArtists = findByArtist("Taylor Swift");
console.log("looking for artist not here...", notFoundArtists);

//Test with an artist in collection
const foundArtists2 = findByArtist("Florence and the Machine");
console.log("found artists 2 test", foundArtists2);

function search(artistName, yearPublished) {
  console.log("running search", search);
  console.log(collection);

  //return...
}

let tracks = [];
