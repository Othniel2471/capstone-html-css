const artist = [
  {
    dotImg: 'assets/images/pictures/dots.png',
    artistImg: 'assets/images/pictures/johnSmith.png',
    artistName: 'John Smith',
    performanceTime: 'Friday, June 10th at 7:00 PM',
    artistDecs: 'John Smith is a singer-songwriter from Nashville, Tennessee known for his soulful voice and heartfelt lyrics. He has two albums under his belt and is excited to share his music with a new audience.',
  },
  {
    dotImg: 'assets/images/pictures/dots.png',
    artistImg: 'assets/images/pictures/artist2.png',
    artistName: 'Mary Johnson',
    performanceTime: 'Friday, June 10th at 7:00 PM',
    artistDecs: 'Mary Johnson is a folk singer from the Appalachian Mountains who has developed a unique sound that blends old-time and contemporary folk music. Her lyrics are often inspired by her faith and love of nature.',
  },
  {
    dotImg: 'assets/images/pictures/dots.png',
    artistImg: 'assets/images/pictures/artist3.png',
    artistName: 'Rachel Lee',
    performanceTime: 'Friday, June 10th at 7:00 PM',
    artistDecs: 'Rachel Lee is a pianist and composer from New York City, combining elements of jazz and pop. Her latest album, "City Lights," features original compositions inspired by her experiences living in the city.',
  },
  {
    dotImg: 'assets/images/pictures/dots.png',
    artistImg: 'assets/images/pictures/artist4.png',
    artistName: 'Ahmed Khan',
    performanceTime: 'Friday, June 10th at 7:00 PM',
    artistDecs: 'Ahmed Khan is a sitar player from Mumbai, India, influenced by classical Indian ragas and featuring intricate melodies and rhythms. He has been playing sitar since he was a child.',
  },
  {
    dotImg: 'assets/images/pictures/dots.png',
    artistImg: 'assets/images/pictures/artist5.png',
    artistName: 'Carlos Rodriguez',
    performanceTime: 'Friday, June 10th at 7:00 PM',
    artistDecs: 'Carlos Rodriguez is a flamenco guitarist from Seville, Spain, known for his virtuous playing style and ability to blend traditional flamenco with modern elements. He has won awards for his performances.',
  },
  {
    dotImg: 'assets/images/pictures/dots.png',
    artistImg: 'assets/images/pictures/artist6.png',
    artistName: 'Michael Johnson',
    performanceTime: 'Friday, June 10th at 7:00 PM',
    artistDecs: 'Michael Johnson is a blues guitarist and singer from Memphis, Tennessee who has developed a unique style that blends traditional blues with modern rock influences. His lyrics explore themes of love, loss, and everyday life.',
  },
];

const artistContainer = document.querySelector('.artist-container');

const displayArtist = (artists) => {
  const displayArtistDem = artists.map(
    (item) => `
        <div class="artists">
                    <div class="artist-img">
                        <img src="${item.dotImg}" alt="">
                        <img src="${item.artistImg}" alt="${item.artistName}">
                    </div>
                    <div class="artist-info">
                        <p class="artist-name">${item.artistName}</p>
                        <p class="performance-time">${item.performanceTime}</p>
                        <p class="artist-desc">${item.artistDecs}</p>
                    </div>
                </div>
        `,
  ).join('');

  artistContainer.innerHTML = displayArtistDem;
};

window.addEventListener('DOMContentLoaded', () => {
  displayArtist(artist);
});
