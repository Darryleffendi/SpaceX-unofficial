const linkToEmbed = (link) => {
    if(link.indexOf('watch') < 1) {
        let id = link.substring(link.indexOf('/', 10) + 1, link.length)
        return 'https://www.youtube.com/embed/' + id
    }
    let id = link.substring(link.indexOf('=', 10) + 1, link.length)
    return 'https://www.youtube.com/embed/' + id
}

export default linkToEmbed;