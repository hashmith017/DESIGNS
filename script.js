// Array of images for each gallery
const posters = [
    'POSTERS/1.BioDiversity.png',
    'POSTERS/2.Happy Bhogi.png',
    'POSTERS/3.Soliderity Day.png',
    'POSTERS/4.Ugadi Games.png',
    'POSTERS/5.Eid Mubarak.png',
    'POSTERS/6.Labor Day.png',
    'POSTERS/7.Environment Day.png',
    'POSTERS/8.Food Safety Day.png',
    'POSTERS/9.DIAMOND FAMILY KITTY.png',
    'POSTERS/10.Income Tax.png',
    'POSTERS/12.CAMERA DAY.png',
    'POSTERS/13.CAMERA DAY.png',
    'POSTERS/14.CA DAY.png',
    'POSTERS/15.Janmashtami Day 1.png',
    'POSTERS/15.Janmashtami Day.png',
    'POSTERS/16.Telugu Language Day.png',
    'POSTERS/17.Maths Day.png',
    'POSTERS/sahiti trail 2.png',
];

const storyDesigns = [
    'STORIES/1.Dissapointed.png',
    'STORIES/2.Lets Meet.png',
    'STORIES/3.9 days to go.png',
    'STORIES/4.8 days to go.png',
    'STORIES/5.7 days to go.png',
    'STORIES/6.6 days to go.png',
    'STORIES/7.5 days to go.png',
    'STORIES/8.saketh.jpg',
    'STORIES/9.harika 3 days to go.jpg',
    'STORIES/10.harika narayan.jpg',
    'STORIES/11.mouli.jpg',
    'STORIES/12.daksha.jpg',
    'STORIES/13.Games.png',
    'STORIES/14.Discord.png',
    'STORIES/15.dhamaka.png',
    'STORIES/16.visit our stall.png',
    'STORIES/Eid Al-Fitr.png',
    'STORIES/nature club 2.png',
];

const cards = [
    'VISITING CARDS/1.HIMAZ.png',
    'VISITING CARDS/2.JAGAN.png',
    'VISITING CARDS/3.JAGAN.png',
];

function loadGallery(images, galleryId) {
    const gallery = document.getElementById(galleryId);
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        gallery.appendChild(imgElement);
    });
}
if (document.getElementById('postersGallery')) {
    loadGallery(posters, 'postersGallery');
} else if (document.getElementById('storyDesignsGallery')) {
    loadGallery(storyDesigns, 'storyDesignsGallery');
} else if (document.getElementById('cardsGallery')) {
    loadGallery(cards, 'cardsGallery');
}
