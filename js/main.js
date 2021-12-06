// Dom element
var elFlex = document.querySelector("#d-flex");
var elForm = document.querySelector("#form_submit");
var elInput = document.querySelector("#input_five");
var elSelect = document.querySelector("#select");
var elSelect2 = document.querySelector("#select2");
var elInput2 = document.querySelector("#input_seven");
var elTitleMovies = document.querySelector("#search_heading");

var twoMovies = movies.slice(0, 20);

var normolizeMovies = twoMovies.map(item => {
    return {
        title: item.Title.toString(),
        categories: item.Categories,
        rating: item.imdb_rating,
        year: item.movie_year,
        imagelink: `http://i3.ytimg.com/vi/${item.ytid}/maxresdefault.jpg`,
        ytlink: `https://www.youtube.com/watch?v=${item.ytid}`
    }
})

function renderMovies(moviesArray) {

    moviesArray.forEach(films => {
        var newDiv = document.createElement("div");
        var newP = document.createElement("p");
        var newH4 = document.createElement("h4");
        var newImg = document.createElement("img");
        var newP2 = document.createElement("p");
        var newDiv2 = document.createElement("div");
        var newInput1 = document.createElement("a");
        var newInput2 = document.createElement("a");
        var newInput3 = document.createElement("a");
        newDiv.classList.add("card");
        newDiv.classList.add("border-secondary");
    
        newDiv.classList.add("mb-2");
        newDiv.setAttribute("style", "width: 22rem;")
        newImg.setAttribute("src", films.imagelink);
        newImg.setAttribute("width", "350");
        newImg.setAttribute("height", "250");
        newImg.setAttribute("alt", "moies picture");
        newH4.classList.add("h5");
        newH4.textContent = films.title;
        newP.textContent = films.year;
        newP2.textContent = films.rating;
        newDiv2.classList.add("card-body");
        newDiv2.classList.add("d-flex");
        newDiv2.classList.add("justify-content-around");
        newInput1.classList.add("btn")
        newInput1.classList.add("btn-sm");
        newInput1.classList.add("btn-outline-primary");
        newInput1.classList.add("m-xl-2");
        newInput1.classList.add("d-inline");
        newInput1.textContent = "Watch trailer";
        newInput1.setAttribute("href", films.ytlink);
        newInput1.setAttribute("target", "blank");
    
        newInput2.classList.add("btn");
        newInput2.classList.add("btn-sm");
        newInput2.classList.add("btn-outline-info");
        newInput2.classList.add("m-xl-2");
        newInput2.classList.add("d-inline");
        newInput2.textContent = "More info";
        newInput2.setAttribute("href", films.ytlink);
        newInput2.setAttribute("target", "blank");
    
        newInput3.classList.add("btn")
        newInput3.classList.add("btn-sm");
        newInput3.classList.add("btn-outline-success");
        newInput3.classList.add("d-inline");
        newInput3.textContent = "Bookmark";
        newInput3.setAttribute("href", films.ytlink);
        newInput3.setAttribute("target", "blank");
    
        newDiv.appendChild(newImg);
        newDiv.appendChild(newH4);
        newDiv.appendChild(newP);
        newDiv.appendChild(newP2);
        newDiv.appendChild(newDiv2);
        newDiv2.appendChild(newInput1);
        newDiv2.appendChild(newInput2);
        newDiv2.appendChild(newInput3);
        elFlex.appendChild(newDiv);
    });
    elTitleMovies.textContent = `Search results: ${moviesArray.length}`;

}
renderMovies(normolizeMovies, elFlex);

elInput2.addEventListener("keyup", (evt) => {
    evt.preventDefault();

    var searchPushMovies = [];
    var searchInput = elInput2.value.trim();
    var searchKey = new RegExp(searchInput, "gi");
    normolizeMovies.forEach(movieItem => {
        var searchInfo = movieItem.title.match(searchKey)
        if (searchInfo) {
            searchPushMovies.push(movieItem)
        }
    })
    if (searchPushMovies.length > 0) {
        elFlex.innerHTML = null;
        renderMovies(searchPushMovies, elFlex);    
    }else {
        elFlex.innerHTML = "Kino yo'q"
        elTitleMovies.textContent = "0"
    }
})

elForm.addEventListener("submit", (evt) => {
    evt.preventDefault();

    var moviesArr = [];

    elFlex.innerHTML = null;
    var inputRating = Number(elInput.value.trim());
    if (inputRating == "" || isNaN(inputRating)) {
        alert("Only number")
    }else{
        var filterTwo = normolizeMovies.filter(function(item) {
            if (item.rating >= inputRating ) {
                return moviesArr.push(item);
            }
        });
    }
    renderMovies(filterTwo, elFlex); 
})



