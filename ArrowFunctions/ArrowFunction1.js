const author = {
  fullName: "Bob Alice",
  books: ["Book 01", "Book 02", "Book 03"],

  printValues(){
    console.log(this.fullName + "-" + this.books);
  },

  printBooks() {
    this.books.forEach((book) => {
      console.log(book + ' by ' + this.fullName);
    });   
  },

  printBooks1() {
//     function printValues(book) {
//       console.log(book + ' by ' + this.fullName);
//     }

    this.books.forEach(this.printValues);

//     this.books.forEach(function(book){
//       console.log(book + ' by ' + this.fullName);
//     }) // Logs Book 0X by undefined
  }
};

// author.printValues();
author.printBooks();
author.printBooks1(); 