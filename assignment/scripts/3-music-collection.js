console.log("***** Music Collection *****");

const collection = [];

function addToCollection(title, artist, yearPublished) {
  collection.push({
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  });

  addToCollection("Dance Fever", "Florence and the Machine", "2023");
  console.log(addToCollection);

  addToCollection("Lungs", "Florence and the Machine", "2009");
  console.log(addToCollection);

  addToCollection("Un Dia Normal", "Juanes", "2002");
  console.log(addToCollection);

  addToCollection("Mind Over Matter", "Young the Giant", "2014");
  console.log(addToCollection);

  addToCollection("This is Why", "Paramore", "2023");
  console.log(addToCollection);

  addToCollection("In our own sweet time", "Vance Joy", "2022");
  console.log(addToCollection);

} //end to add to coll.
