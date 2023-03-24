const searchBar = document.querySelector('.searchBar');
const searchBtn = document.querySelector('.searchBtn');
let url = location;

//Supa Function\\
function searchable() {
    if (searchBar.value == 'lioxryt') {
        location.href = "https://violent-covids-lioxryt-48576.netlify.app"
    } else if (searchBar.value == "3kh0") {
        location.href = "https://violent-covids-3kh0-59687.netlify.app"
    } else {
        searchBar.placeholder = "word invalid, vist KEY";
    }
};

//Supa Event\\
searchBtn.addEventListener('click', searchable);
