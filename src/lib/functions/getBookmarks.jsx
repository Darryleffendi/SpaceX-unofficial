const getBookmarks = () => {
    let bookmarks = localStorage.getItem("Bookmarks");

    if(bookmarks === null) return []

    bookmarks = JSON.parse(bookmarks);
    return bookmarks;
}

export default getBookmarks;