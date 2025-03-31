document.addEventListener('DOMContentLoaded', function () {
  const wordList = document.getElementById('word-list');
  const button = document.getElementById('button');
  const blueButton = document.getElementById('blueButton');
  const yellowButton = document.getElementById('yellowButton');
  const card = document.getElementById('card');

  const categories = [
    // Animals
    ["Lion", "Tiger", "Elephant", "Giraffe", "Zebra", "Panda", "Kangaroo", "Koala", "Leopard", "Cheetah", "Hippo", "Rhino", "Crocodile", "Penguin", "Whale", "Shark", "Dolphin", "Bear", "Fox", "Gorilla", "Wolf", "Octopus", "Ostrich", "Camel", "Chameleon", "Eagle", "Flamingo", "Jellyfish", "Moose", "Sloth"],
  
    // Fruits
    ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Strawberry", "Grape", "Watermelon", "Peach", "Plum", "Lemon", "Blueberry", "Cherry", "Pear", "Kiwi", "Papaya", "Coconut", "Avocado", "Raspberry", "Blackberry", "Pomegranate", "Cantaloupe", "Fig", "Guava", "Lychee", "Passionfruit", "Tangerine", "Mulberry", "Nectarine", "Cranberry"],
  
    // Sports
    ["Soccer", "Basketball", "Tennis", "Rugby", "Baseball", "Golf", "Cricket", "Hockey", "Volleyball", "Badminton", "Swimming", "Cycling", "Boxing", "Martial Arts", "Skiing", "Snowboarding", "Running", "Table Tennis", "Track and Field", "Gymnastics", "Surfing", "Skateboarding", "Fencing", "Darts", "Wrestling", "Bowling", "Handball", "Lacrosse", "Polo", "Archery"],
  
    // Food
    ["Pizza", "Burger", "Sushi", "Pasta", "Steak", "Tacos", "Salad", "Soup", "Sandwich", "Ice Cream", "Chicken", "French Fries", "Hot Dog", "Burrito", "Ramen", "Curry", "Lasagna", "Spaghetti", "Falafel", "Waffles", "Pancakes", "BBQ Ribs", "Doughnut", "Chocolate Cake", "Popcorn", "Cheese", "Fried Rice", "Chili", "Sausage", "Croissant"],
  
    // Movies
    ["Titanic", "Inception", "Avatar", "The Dark Knight", "Gladiator", "The Matrix", "Jaws", "Star Wars", "The Godfather", "Jurassic Park", "The Shawshank Redemption", "Forrest Gump", "Pulp Fiction", "The Lion King", "The Godfather Part II", "Fight Club", "The Silence of the Lambs", "Schindler's List", "The Terminator", "Back to the Future", "Interstellar", "The Avengers", "Frozen", "Spider-Man", "The Notebook", "The Hunger Games", "Deadpool", "Black Panther", "Fast & Furious", "Coco"],
  
    // Countries
    ["USA", "Canada", "Germany", "Brazil", "Australia", "France", "Italy", "Japan", "India", "Mexico", "China", "Russia", "United Kingdom", "South Africa", "Argentina", "South Korea", "Spain", "Turkey", "Egypt", "Thailand", "Netherlands", "Sweden", "Switzerland", "Greece", "Norway", "Portugal", "Poland", "Colombia", "Indonesia", "Philippines", "New Zealand"],
  
    // TV Shows
    ["Friends", "The Office", "Game of Thrones", "Breaking Bad", "The Simpsons", "Stranger Things", "Big Bang Theory", "Grey's Anatomy", "How I Met Your Mother", "Westworld", "The Crown", "Narcos", "The Mandalorian", "Peaky Blinders", "Black Mirror", "The Witcher", "Sherlock", "Better Call Saul", "The Walking Dead", "The Flash", "Rick and Morty", "Brooklyn Nine-Nine", "Supernatural", "Money Heist", "Lucifer", "Squid Game", "House of Cards", "Modern Family", "The Boys", "Euphoria"],
  
    // Famous People
    ["Albert Einstein", "Leonardo da Vinci", "William Shakespeare", "Marie Curie", "Nelson Mandela", "Abraham Lincoln", "Charles Darwin", "Mahatma Gandhi", "Martin Luther King Jr.", "Winston Churchill", "Isaac Newton", "Cleopatra", "Galileo", "Amelia Earhart", "Thomas Edison", "Steve Jobs", "Frida Kahlo", "Elon Musk", "Margaret Thatcher", "Malala Yousafzai", "Oprah Winfrey", "Barack Obama", "Cristiano Ronaldo", "Serena Williams", "Taylor Swift", "Beyoncé", "Michael Jordan", "Bruce Lee", "Jeff Bezos", "Vincent van Gogh"],
  
    // Popular Songs
    ["Shape of You", "Blinding Lights", "Billie Jean", "Bohemian Rhapsody", "Rolling in the Deep", "Uptown Funk", "Despacito", "Havana", "Someone Like You", "Old Town Road", "Let It Be", "Smells Like Teen Spirit", "Stayin' Alive", "Happy", "Take On Me", "I Will Always Love You", "Shake It Off", "All of Me", "Thriller", "We Will Rock You", "Don't Stop Believin'", "Hotel California", "Sweet Child O' Mine", "Wonderwall", "Toxic", "Bad Guy", "Levitating", "Watermelon Sugar", "Counting Stars", "Call Me Maybe"],
  
    // Books
    ["Harry Potter", "The Hobbit", "1984", "Pride and Prejudice", "To Kill a Mockingbird", "Moby Dick", "The Catcher in the Rye", "The Great Gatsby", "War and Peace", "The Lord of the Rings", "The Odyssey", "Frankenstein", "The Alchemist", "Dracula", "Crime and Punishment", "Wuthering Heights", "The Book Thief", "The Hunger Games", "Catch-22", "Brave New World", "Percy Jackson", "The Fault in Our Stars", "Dune", "A Game of Thrones", "Diary of a Wimpy Kid", "The Maze Runner", "Little Women", "The Da Vinci Code", "The Shining", "Holes"],
  
    // Cities
    ["New York", "London", "Paris", "Tokyo", "Rome", "Sydney", "Berlin", "Los Angeles", "Mumbai", "Cairo", "Barcelona", "Amsterdam", "Singapore", "Dubai", "Hong Kong", "Seoul", "Rio de Janeiro", "Mexico City", "Bangkok", "Cape Town", "Chicago", "Toronto", "Moscow", "Las Vegas", "San Francisco", "Venice", "Istanbul", "Buenos Aires", "Miami", "Vienna"],
  
    // Technology (Simplified)
    ["iPhone", "Android", "Laptop", "Wi-Fi", "Bluetooth", "Smartphone", "Internet", "Robot", "Drone", "Headphones", "Electric Car", "Social Media", "AI", "Google", "Smartwatch", "Virtual Reality", "Cloud Storage", "Self-Driving Car", "USB", "Touchscreen", "Cybersecurity", "Video Call", "App", "Charger", "Keyboard", "Mouse", "Streaming", "Tablet", "Camera", "Satellite"]
  ];
  
  

  let chosenWords = 0;
  let list = [];

 function genWord(categories, list) {
    console.log("genWords active");
    while (chosenWords < 5) {
      console.log('getting word');
      // picks a random category
      let category = categories[Math.floor(Math.random() * categories.length)];

      // picks a random word 
      let randWord = category[Math.floor(Math.random() * category.length)];

      // checks if the word is already in the list
      if (!list.includes(randWord)) {
        list.push(randWord);
        chosenWords++;
      }
    }
    console.log(list);
  }

  function addToList(list) {
    list.forEach(word => {
      const li = document.createElement('li');
      li.textContent = word;
      wordList.appendChild(li);
    });
  }

  function makeCardYellow() {
    card.style.backgroundColor = "rgb(243, 247, 44)";
    card.style.color = "rgb(19, 19, 19)";
    // Reset the list and chosenWords when generating a new card
    wordList.innerHTML = "";  // Clears the current list
    list = [];  // Clears the list array
    chosenWords = 0;  // Reset the counter for new words

    genWord(categories, list);  // Generate new words
    addToList(list);  // Add the new words to the list in the DOM
  }

  function makeCardBlue () {
    card.style.backgroundColor = "rgb(73, 85, 255)";
    card.style.color = "rgb(237, 244, 252)";
    // Reset the list and chosenWords when generating a new card
    wordList.innerHTML = "";  // Clears the current list
    list = [];  // Clears the list array
    chosenWords = 0;  // Reset the counter for new words

    genWord(categories, list);  // Generate new words
    addToList(list);  // Add the new words to the list in the DOM
  }

  blueButton.addEventListener('click', makeCardBlue);
  yellowButton.addEventListener('click', makeCardYellow);
});
