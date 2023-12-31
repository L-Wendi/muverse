/*
 *Date: 19 November 2023
 *Purpose: Filter out 13 songs (more can be added) on the basis of categories such as genre, occasion and Culture.
 */  


 
/*  List of songs
    1. Despacito
    2. Heal the world
    3. Jai Ho
    4. Waka waka (This time for Africa)
    5. La Bamba
    6. Tulpen uit Amsterdam
    7. Wangeci
    8. Jupiter, the Bringer of Jollity
    9. Malaika
    10. Wavin' Flag
    11. Rakuyou
    12. Glasgow Kiss
    13. Ederlezi
*/

const despacitoInfo = {
    song: {
      title: "Despacito",
      genre: ["Reggaeton","Pop"],
      language: "Spanish",
      occasion: ["Social gatherings", "Parties", "Events"],
      culture: ["Latin", "Puerto Rican"]
    },
    artists: [
      {
        name: "Luis Fonsi",
        homeland: "Puerto Rico"
      },
      {
        name: "Daddy Yankee",
        homeland: "Puerto Rico"
      }
    ],
    artistMessage: "The song 'Despacito' celebrates the joy of life, love, and the vibrant culture of Puerto Rico. It encourages people to enjoy the moment and dance to the rhythm of life."
  };
  
console.log(despacitoInfo);

const healTheWorldInfo = {
    song: {
      title: "Heal the World",
      genre: ["Pop"],
      language: "English",
      occasion: ["Humanitarian events", "Charity functions"],
      culture: ["Global"]
    },
    artist: {
      name: "Michael Jackson",
      homeland: "United States"
    },
    artistMessage: "In 'Heal the World,' Michael Jackson sends a powerful message of compassion and hope. The song encourages listeners to contribute to making the world a better place through love, understanding, and caring for one another, particularly focusing on the well-being of children and the vulnerable."
  };
  
console.log(healTheWorldInfo);
  
const jaiHoInfo = {
    song: {
      title: "Jai Ho",
      genre: ["Bollywood","Pop"],
      language: ["Hindi","Urdu"],
      occasion: ["Celebrations", "Victory", "Festivals"],
      culture: ["Indian"],
      artistMessage: "In 'Jai Ho,' A.R. Rahman delivers a message of triumph and celebration. The song, known for its infectious energy, encourages people to rejoice in moments of victory and embrace the joy of life. With a blend of Bollywood and pop elements, 'Jai Ho' has become an anthem of positivity and exuberance."
    },
    artist: {
      name: "A.R. Rahman",
      homeland: "India"
    }
  };
  
console.log(jaiHoInfo);
  
const wakaWakaInfo = {
    song: {
      title: "Waka Waka (This Time for Africa)",
      genre: ["Afrobeat","Pop"],
      language: ["English","Spanish"],
      occasion: ["Sports events", "Celebrations", "Unity"],
      culture: ["African", "Colombian"],
      artistMessage: "In 'Waka Waka,' Shakira sends a message of unity, celebration, and empowerment. The song, chosen as the official song for the 2010 FIFA World Cup, embodies the spirit of Africa and encourages people to come together, celebrate diversity, and showcase the vibrancy of African and Colombian cultures through music and dance."
    },
    artist: {
      name: "Shakira",
      homeland: "Colombia"
    }
  };
  
console.log(wakaWakaInfo);
  
const laBambaInfo = {
    song: {
      title: "La Bamba",
      genre: ["Rock and Roll"],
      language: "Spanish",
      occasion: ["Celebrations", "Dance parties"],
      culture: ["Mexican-American"],
      artistMessage: "In 'La Bamba,' Ritchie Valens celebrates Mexican-American culture and music. The song, a classic in the rock and roll genre, invites people to dance and enjoy the lively rhythms of traditional Mexican music. With its catchy beat and infectious energy, 'La Bamba' has become an iconic representation of cross-cultural fusion in the world of music."
    },
    artist: {
      name: "Ritchie Valens",
      homeland: "United States (Mexican-American)"
    }
  };
  
console.log(laBambaInfo);
  
const tulpenUitAmsterdamInfo = {
    song: {
      title: "Tulpen uit Amsterdam",
      genre: ["Dutch"],
      language: "Dutch",
      occasion: ["Celebrations", "Festivals"],
      culture: ["Dutch"],
      artistMessage: "In 'Tulpen uit Amsterdam,' Herman Emmink celebrates the beauty of tulips and the city of Amsterdam. The song, sung in Dutch, is often associated with Dutch traditions and festivities. With its cheerful melody, the song reflects the joy and pride of the Dutch culture, particularly the iconic tulip fields and the vibrant city of Amsterdam."
    },
    artist: {
      name: "Herman Emmink",
      homeland: "Netherlands"
    }
  };
  
console.log(tulpenUitAmsterdamInfo);

const wangeciInfo = {
    song: {
      title: "Wangeci",
      genre: ["Benga (Kenyan)"],
      language: "Luo",
      occasion: ["Ceremonies", "Celebrations"],
      culture: ["Kenyan"],
      artistMessage: "In 'Wangeci,' Sukuma Bin Ongaro celebrates the Kenyan Luo culture. The song, sung in Luo, reflects the vibrancy and richness of Kenyan traditional music. 'Wangeci' is often played during traditional ceremonies and celebrations, serving as a testament to the cultural heritage and diversity of Kenya. The artist's message through the song is a celebration of love, life, and the spirit of the Kenyan people."
    },
    artist: {
      name: "Sukuma Bin Ongaro",
      homeland: "Kenya"
    }
  };
  
console.log(wangeciInfo);
  
const jupiterInfo = {
    song: {
      title: "Jupiter, the Bringer of Jollity",
      genre: ["Classical"],
      language: "Instrumental (No lyrics)",
      occasion: ["Concerts", "Formal events"],
      culture: ["Western Classical"],
      artistMessage: "In 'Jupiter, the Bringer of Jollity,' Gustav Holst creates a musical masterpiece that is part of his larger composition 'The Planets.' This instrumental piece, without lyrics, is a part of Western Classical music, known for its grandeur and emotional depth. Often played in concert settings and formal events, the music captures the essence of Jupiter, the Roman god of thunder and the bringer of joy. Holst's message through this piece lies in the evocation of a majestic and jubilant atmosphere, celebrating the power and vitality associated with the planet Jupiter."
    },
    artist: {
      name: "Gustav Holst",
      homeland: "United Kingdom"
    }
  };
  
console.log(jupiterInfo);

const malaikaInfo = {
    song: {
      title: "Malaika",
      genre: ["World", "Folk"],
      language: "Swahili",
      occasion: ["Cultural events", "Acoustic performances"],
      culture: ["African"],
      artistMessage: "In 'Malaika,' Miriam Makeba shares a heartfelt message of love and longing. Sung in Swahili, the song has become an iconic representation of African music. Often performed in cultural events and acoustic settings, 'Malaika' captures the essence of love and the bittersweet emotions associated with separation. Makeba's rendition of 'Malaika' reflects the beauty and depth of African folk music, conveying a universal message of love and the complexities of relationships."
    },
    artist: {
      name: "Miriam Makeba",
      homeland: "South Africa"
    }
  };
  
  console.log(malaikaInfo);

  const wavinFlagInfo = {
    song: {
      title: "Wavin' Flag",
      genre: ["Hip-Hop", "World"],
      language: "English",
      occasion: ["Sports events", "Celebrations", "Unity"],
      culture: ["Somali", "Canadian"],
      artistMessage: "In 'Wavin' Flag,' K'naan delivers a powerful message of hope, resilience, and unity. The song, blending hip-hop and world music elements, became an anthem of inspiration, especially during sports events. Reflecting K'naan's Somali roots and Canadian identity, 'Wavin' Flag' celebrates the strength of the human spirit, the beauty of diversity, and the resilience of individuals facing challenges. The uplifting lyrics encourage people to keep waving their flags, symbolizing pride and solidarity."
    },
    artist: {
      name: "K'naan",
      homeland: "Somalia (Currently Canadian)"
    }
  };
  
  console.log(wavinFlagInfo);
  
  const rakuyouInfo = {
    song: {
      title: "Rakuyou",
      genre: ["J-Rock"],
      language: "Japanese",
      occasion: ["Anime themes", "Concerts"],
      culture: ["Japanese"],
      artistMessage: "In 'Rakuyou,' SID brings the energy of J-Rock to life. The song, sung in Japanese, is known for its dynamic sound and emotional depth. Often featured as an anime theme, 'Rakuyou' resonates with fans at concerts and events, showcasing the expressive nature of Japanese rock music. The song's message, embedded in its lyrics and musical composition, is a reflection of the band's artistic style and the emotional journey conveyed through their music."
    },
    artist: {
      name: "SID",
      homeland: "Japan"
    }
  };
  
  console.log(rakuyouInfo);

  const glasgowKissInfo = {
    song: {
      title: "Glasgow Kiss",
      genre: ["Progressive Metal"],
      language: "Instrumental (No lyrics)",
      occasion: ["Concerts", "Rock events"],
      culture: ["Scottish"],
      artistMessage: "In 'Glasgow Kiss,' John Petrucci showcases his virtuosity in the realm of progressive metal. The instrumental piece, with its intricate guitar work, is a celebration of musical skill and creativity. Often featured in concerts and rock events, 'Glasgow Kiss' captures the essence of Petrucci's musical style and technical prowess. While the song doesn't have lyrical content, its powerful composition conveys a message of musical complexity and artistic expression."
    },
    artist: {
      name: "John Petrucci",
      homeland: "United States (Scottish descent)"
    }
  };
  
  console.log(glasgowKissInfo);
  
  const ederleziInfo = {
    song: {
      title: "Ederlezi",
      genre: ["Romani", "Gypsy"],
      language: "Romani",
      occasion: ["Cultural celebrations", "Festivals"],
      culture: ["Romani"],
      artistMessage: "In 'Ederlezi,' Saban Bajramovic brings the soulful sounds of Romani music to life. Sung in the Romani language, the song is often associated with cultural celebrations and festivals. 'Ederlezi' reflects the rich musical heritage of the Romani people, known for their vibrant and emotional expressions through music. The artist's message in this song is a celebration of life, love, and the cultural identity of the Romani community."
    },
    artist: {
      name: "Saban Bajramovic",
      homeland: "Serbia (Romani descent)"
    }
  };

  console.log(ederleziInfo);

  const songList = [
    despacitoInfo,
    healTheWorldInfo,
    jaiHoInfo,
    wakaWakaInfo,
    laBambaInfo,
    tulpenUitAmsterdamInfo,
    wangeciInfo,
    jupiterInfo,
    malaikaInfo,
    wavinFlagInfo,
    rakuyouInfo,
    glasgowKissInfo,
    ederleziInfo,
  ]      

function flattenArray(arr) {
    return arr.reduce((flatArray, current) => {
        return flatArray.concat(Array.isArray(current) ? flattenArray(current) : current);
    }, []);
}

const titleList = songList.map(song => song.song.title); //first 'song' is arbitrary

const genreList =  flattenArray(songList.map(song => song.song.genre));
const languageList = songList.map(song => song.song.language);
const occasionList =  flattenArray(songList.map(song => song.song.occasion));
const artistNameList =  flattenArray(songList.map(song => song.song.artistName));

// Get a reference to the button element
const myButton = document.getElementById('recommend');
// Define the action to be performed when the button is clicked
function handleClick() {
  alert('Button clicked!');
  // Add more code here for the action you want to perform
}

// Add the click event listener to the button
myButton.addEventListener('click', filterData);

// Function to filter data based on selected checkboxes
function filterData() {
  const selectedGenres = Array.from(document.querySelectorAll('#List1 .filter-checkbox:checked')).map(checkbox => checkbox.name);
  const selectedOccasions = Array.from(document.querySelectorAll('#List2 .filter-checkbox:checked')).map(checkbox => checkbox.name);
  const selectedCultures = Array.from(document.querySelectorAll('#List3 .filter-checkbox:checked')).map(checkbox => checkbox.name);

    const filteredResult = songList.filter(item =>
        (selectedGenres.length === 0 || item.song.genre.some(genre => selectedGenres.includes(genre))) &&
        (selectedCultures.length === 0 || item.song.culture.some(culture => selectedCultures.includes(culture))) &&
        (selectedOccasions.length === 0 || item.song.occasion.some(occasion => selectedOccasions.includes(occasion)))
    // Add additional conditions for other checkboxes
  );

  displayFilteredData(filteredResult);
}

// Function to display filtered data on the website
function displayFilteredData(filteredData) {
  const filteredDataContainer = document.getElementById('filteredData');
  filteredDataContainer.innerHTML = '';

  if (filteredData.length === 0) {
    filteredDataContainer.innerHTML = '<p>No matching items found.</p>';
  } else {
    filteredData.forEach(item => {
      const itemElement = document.createElement('div');
      //itemElement.innerHTML = `<p>${item.song.title} - Genre: ${item.song.genre.join(', ')}; Culture: ${item.song.culture.join(', ')}</p>`;
      itemElement.innerHTML = `<p>${item.song.title} - Genre: ${item.song.genre.join(', ')}, Culture: ${item.song.culture.join(', ')}, Occasion: ${item.song.occasion.join(', ')}</p>`;
      filteredDataContainer.appendChild(itemElement);
    });
  }
}