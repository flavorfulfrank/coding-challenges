//Take an array of items and a number for how many items fit in a page
//Return a class with the corresponding functions
class PaginationHelper {
  constructor(collection, itemsPerPage) {
    // The constructor takes in an array of items and a integer indicating how many
    // items fit within a single page
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
    this.length = collection.length;
    this.pages = Math.ceil(this.length / this.itemsPerPage);
  }
  itemCount() {
    // returns the number of items within the entire collection
    return this.length;
  }
  pageCount() {
    // returns the number of pages
    return this.pages;
  }
  pageItemCount(pageIndex) {
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
    if (
      pageIndex > this.pages - 1 ||
      this.collection.length === 0 ||
      pageIndex < 0
    )
      return -1;
    if (pageIndex !== this.pages - 1 || this.length % this.itemsPerPage === 0)
      return this.itemsPerPage;
    return this.length % this.itemsPerPage;
  }
  pageIndex(itemIndex) {
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
    if (itemIndex >= this.length || itemIndex < 0 || this.length === 0)
      return -1;
    return Math.floor(
      this.collection.slice(0, itemIndex).length / this.itemsPerPage
    );
  }
}