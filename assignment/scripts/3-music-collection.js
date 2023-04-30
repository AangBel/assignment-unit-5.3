console.log("***** Music Collection *****");

const collection = [];

function addToCollection(title, artist, yearPublished) {
  collection.push({
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  });

  addToCollection("Dance Fever", "Florence and the Machine", "2023");
  console.log(collection);

  addToCollection("Lungs", "Florence and the Machine", "2009");
  console.log(collection);

  addToCollection("Un Dia Normal", "Juanes", "2002");
  console.log(collection);

  addToCollection("Mind Over Matter", "Young the Giant", "2014");
  console.log(collection);

  addToCollection("This is Why", "Paramore", "2023");
  console.log(collection);

  addToCollection("In our own sweet time", "Vance Joy", "2022");
  console.log(collection);

} //end to add to coll.
