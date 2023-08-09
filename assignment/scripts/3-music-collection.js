console.log("***** Music Collection *****");

const collection = [];
console.log("console logging collection:", collection);

function addToCollection(title, artist, yearPublished) {
  collection.push({
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  });
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

let showCollection = [];
console.log(collection.length);

for (let i = 0; i < collection.length; i++) {
  console.log(
    `${collection[i].title}  by  ${collection[i].artist}  , published in  ${collection[i].yearPublished}`
  );
}
console.log(showCollection);

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
  

function search(artist='Ray Charles', year= 1957 ){

console.log("running search", search);  
console.log(collection);
}

let tracks = [];

