"use strict";
function make_album(artistName, albumTitle, tracks) {
    const musicAlbum = {
        artistName,
        albumTitle,
        tracks
    };
    if (tracks !== undefined) {
        musicAlbum.tracks = tracks;
    }
    return musicAlbum;
}
console.log(make_album('Atif Aslam', 'abc'));
console.log(make_album('Ali Zafar', 'xyz', 12));
console.log(make_album('Shezad Roy', '123'));
// const album1 = make_album('Atif Aslam','abc')
// const album2 = make_album('Ali Zafar','xyz')
// const album3 = make_album('Shezad Roy','123')
// console.log(album1)
// console.log(album2)
// console.log(album3)
