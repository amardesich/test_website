class AndyBook {
    constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
      this.paperback = true;
    }
    isOldBook() {
        if (this.year > 2000) {
            return false;
        }
        return true;
    };
    isPaperback() { 
        return this.paperback;
    }
}

function testThis(){
    const book99 = new AndyBook("Into Thin Air", "Jon Krakauer", 1997);
    console.log(book99);
    console.log(book99.isPaperback());

}