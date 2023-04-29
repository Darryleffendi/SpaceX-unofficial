const checkBookmark = (id) => {
    let bookmarks = localStorage.getItem("Bookmarks");
    
    if(bookmarks === null) return false;

    bookmarks = JSON.parse(bookmarks);

    for(let i = 0; i < bookmarks.length; i ++) {
        if(bookmarks[i].id == id) return true;
    }

    return false;
}

export default checkBookmark;