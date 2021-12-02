// Create and append HTML Elements
let root = document.getElementById("root");
let title = document.createElement("input");
let date = document.createElement("input");
let text = document.createElement("input");
let btn = document.createElement("button");

root.append(title, date, text, btn);

title.placeholder = "Title";
date.placeholder = "Date";
text.placeholder = "Write here";

btn.innerHTML = "Publish";

// Get list of entrys from Localstorage - making sure it's a list

function getEntryFromLS() {
   // localStorage.clear();
    let collectedEntryList = localStorage.getItem("Diary")
    let entryList = [];

    if(collectedEntryList) {
        entryList = JSON.parse(collectedEntryList);
    } 

    return entryList;
}

// Function for retrieving and updating the main list 

function saveToLS() {
      
    let newEntry = [date.value, title.value, text.value];
    let entryList = getEntryFromLS();
    entryList.push(newEntry);

    localStorage.setItem("Diary", JSON.stringify(entryList));
    console.log(entryList);
    renderDiary()
}

// Function for rendering diary to the webpage

function renderDiary() {

    let entryList = getEntryFromLS();
    let section = document.createElement("section");
    let title = document.createElement("h2");
    let date = document.createElement("h3");
    let article = document.createElement("article");  
    section.innerHTML = ""; 

    for (i = 0; i<entryList.length; i++) {

        root.append(section);
        section.append(title);
        section.append(date);
        section.append(article);

        console.log(entryList);
        
        title.innerHTML = entryList[i][0];
        date.innerHTML = entryList[i][1];
        article.innerHTML = entryList[i][2];
    }
    
    
}

// Eventlistener

btn.addEventListener("click", function(){
    saveToLS();
})  

