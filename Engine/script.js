const searchBar = document.querySelector('.searchBar');
const searchBtn = document.querySelector('.searchBtn');
let url = location;

//Supa Function\\

//Directions\\
/*
1. Inside the quotes when assigning the value of the searchBar, input what you want to be searched in the searchBar to be brought to the url.
2. Then in the other quotes right below the first value, input the url you want the user to be brought to when the value that you just put in a second ago is searched.
3. Don't forget to update the key in the index.html file. More instructions will be put there.
4. The site will not work with extra else if statements, so when you need more copy paste more, when you finish editing delete all of the if else statements but leave the else statement at the end.
*/
function searchable() {
    if (searchBar.value == 'lioxryt') {
        location.href = "https://violent-covids-lioxryt-48576.netlify.app"
    } else if (searchBar.value == "3kh0") {
        location.href = "https://violent-covids-3kh0-59687.netlify.app"
    } else if (searchBar.value == "") {
        location.href = ""
    } else if (searchBar.value == "") {
        location.href = ""
    } else if (searchBar.value == "") {
        location.href = ""
    } else if (searchBar.value == "") {
        location.href = ""
    } else if (searchBar.value == "") {
        location.href = ""
    } else if (searchBar.value == "") {
        location.href = ""
    } else if (searchBar.value == "") {
        location.href = ""
    } else if (searchBar.value == "") {
        location.href = ""
    } else if (searchBar.value == "") {
        location.href = ""
    } else if (searchBar.value == "") {
        location.href = ""
    } else if (searchBar.value == "") {
        location.href = ""
    } else if (searchBar.value == "") {
        location.href = ""
    }else {
        searchBar.placeholder = "word invalid, vist KEY";
    }
};

//Supa Event\\
searchBtn.addEventListener('click', searchable);
