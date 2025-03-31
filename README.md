# 30-seconds-card-generator
A web app that generates 5 random words from a set of categories in a 30 seconds style

# test it out
https://daemeans-30seconds.netlify.app/

# How it works
- First it makes the card by:
    - choosing randomly between one of the catergories
    - choosing one of the words in the catergories
    - checking to see if that word is not on the card
    - pushing that word to a list

- Then it adds the words to the card by:
    - taking each word and turing it to a list element
    - adding that element to the html
 
# Notes
- every time you click a button to get a new card it resets card completely
- you may come accross the same word frequently on differnet cards (water melon)
- the words are chosen based on the categorie & word array's length, this means you can add to them as much without breaking any code

 # Current catergories
- Animals
- Fruits
- Sports
- Food
- Movies
- Countries 
- TV shows
- Famous people
- Popular songs
- Books
- Cities
- Technology-(simplified)
