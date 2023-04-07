 2.51 KB
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
    } else if (searchBar.value == "bigfoot") {
        location.href = "https://violent-covids-bigfoot-15243.netlify.app/"
    } else if (searchBar.value == "cookie") {
        location.href = "https://www.google.com/search?q=cookie&rlz=1CASICM_enUS1045&oq=cookie&aqs=chrome..69i57j46i395i409i424i433i512j46i67i395i415i424i433i650j0i67i650j0i433i512j46i67i433i650j46i433i512j0i131i433i512j0i433i512j0i271.1461j1j7&sourceid=chrome&ie=UTF-8"
    } else if (searchBar.value == "school server") {
        location.href = "https://byvolp.web.app/"
    } else if (searchBar.value == "hammerhead1") {
        location.href = "https://britannica.gq/"
    } else if (searchBar.value == "hammerhead2") {
        location.href = "https://udemy.gq/"
    } else if (searchBar.value == "school server4") {
        location.href = "https://byvolp.firebaseapp.com/"
    } else if (searchBar.value == "school server5") {
        location.href = "https://ssoportal.gq/"
    } else if (searchBar.value == "school server6") {
        location.href = "https://educationgg-23704.web.app/"
    } else if (searchBar.value == "school server7") {
        location.href = "https://educationgg-23704.firebaseapp.com/"
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
