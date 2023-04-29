const removeBookmark = (id) => {
    let bookmarks = localStorage.getItem("Bookmarks");
    
    if(bookmarks === null) return;
    
    bookmarks = JSON.parse(bookmarks);

    bookmarks = bookmarks.filter(function(item) {
        return item.id !== id
    })

    localStorage.setItem("Bookmarks", JSON.stringify(bookmarks));
    return;
}

export default removeBookmark