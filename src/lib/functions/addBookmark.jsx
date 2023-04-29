const addBookmark = (id, type, name, desc, image) => {
    let bookmarks = localStorage.getItem("Bookmarks");
    
    if(bookmarks === null) bookmarks = [];
    else bookmarks = JSON.parse(bookmarks);

    bookmarks.push({
        'id' : id,
        'type' : type,
        'name' : name,
        'desc' : desc,
        'image' : image
    });

    localStorage.setItem("Bookmarks", JSON.stringify(bookmarks));
    return;
}

export default addBookmark