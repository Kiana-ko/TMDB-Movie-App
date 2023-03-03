
const KianasApiKey = " "; // Creating a varibale called KianasApiKey and storing my API key in it!
const MoviesGenres = [
  {id: 28, name: 'Action'},
  {id: 12, name: 'Adventure'},
  {id: 16, name: 'Animation'},
  {id: 35, name: 'Comedy'},
  {id: 80, name: 'Crime'},
  {id: 99, name: 'Documentary'},
  {id: 18, name: 'Drama'},
  {id: 10751, name: 'Family'},
  {id: 14, name: 'Fantasy'},
  {id: 36, name: 'History'},
  {id: 27, name: 'Horror'},
  {id: 10402, name: 'Music'},
  {id: 9648, name: 'Mystery'},
  {id: 10749, name: 'Romance'},
  {id: 878, name: 'Science Fiction'},
  {id: 10770, name: 'TV Movie'},
  {id: 53, name: 'Thriller'},
  {id: 10752, name: 'War'},
  {id: 37, name: 'Western'}
];   // Creating an array of all the movie genres to help us get the genres of all the movies!




async function searchAllTheMovies(movieName, page = 1) {
  try {
    const WebResponse = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${KianasApiKey}&query=${movieName}&page=${page}`);
    // Using the fetch api and passing a moviename, page number and api key and then storing the response in a variaable!
    const data = await WebResponse.json(); // Parsing the response from the TMDB database and storing the response in the data variable!
    console.log(data.results); 
    // This checks to see if there r more pages of search results!
    if (data.total_pages > page) {
      await searchAllTheMovies(movieName, page + 1); // Repeatedly runs searchMovies function with the next page number as input!
    }
  } catch (error) {
    console.error("There was an error in ur code," + " ", error); //
  } // If an error occurs while excuting the code this will print out the error!
}
searchAllTheMovies("All");

/* * * * = NOTE: We used try and catch to be able to handle the errors that might happen while excuting our function  = * * * */







const searchButton = document.getElementById('search-button'); // Chooseing an HTML element with the search-button id and storing it in the searchButton variable!
function searchWithKeyword() {
  const searchTerm = document.getElementById('searched-keyword').value; // Storing the value entered by user in the searchTerm variable, this value will later be used to search for movies in the movie database API.
  console.log('Searching for:', searchTerm);
  

 async function SearchAllMoviesBy(searchedTitle) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${KianasApiKey}&query=${searchedTitle}`);
    const data = await response.json();
    console.log(data.results);
  } catch (error) {
    console.error("There was an error in ur code," + " ", error);
  }
  }
}

searchButton.addEventListener('click', searchWithKeyword);
// Attaching an event listener to the searchButton so that when the button is clicked the searchWithKeyword function will executed
// By using this user could search by clicking the searchButton element.





async function searchWithKeyword() {
  const searchTerm = document.getElementById('searched-keyword').value;
  // Finding the value of element 'searched-keyword' using Document.getElementById() and using and the .value part retrieves the value of the element. 
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${KianasApiKey}&query=${searchTerm}`);
  const data = await response.json(); // Getting the search results data for movies from the TMDB based on the what user inputs, and  then assigning it to the our variable.
  // Using .json() method to be able to get the response as a Java Script object!
  console.log(data); 
  const photoSelector = document.getElementById('photo-selector'); // Finding the HTML element with an ID of "photo-selector" and  then assigning it to a variable!
  photoSelector.innerHTML = ''; // Clearing the photoselector element using .innerHTML and then setting the property to an empty string!
  if (data.results.length === 0) {
    alert("No results found");
  }
  data.results.forEach(result => {
    if (result.poster_path) {
      const divcontainer = document.createElement('div');

      const img = document.createElement('img'); //// Using document.createElement() method to create a new element called (img)!
      img.src = `https://image.tmdb.org/t/p/w500${result.poster_path}`; 

      const title = document.createElement('h2'); // Using document.createElement() method to create a new element called (h2)!
      title.textContent = result.title; // Using result.title to set the text of the h2 element to the title of the search result retrieved from the API.




      const overview = document.createElement('p'); // Using document.createElement() method to create a new element called (p)!
      overview.textContent = result.overview; // Putting the summary of the current movie search result object, which is stored in result.overview, as the text content of the overview element.

      divcontainer.append(img, title, overview); //Using  the .append() method to add more childs to our html element/ divcontainer!
      
      photoSelector.append(divcontainer); // In this case, the divcontainer element (which contains an image, title, and overview) is being appended to the photoSelector element!
    }
  });
}

  
  



  
  