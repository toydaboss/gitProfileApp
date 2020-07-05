/*jshint esversion: 9 */
const inputValue = document.querySelector(".input");
const searchButton = document.querySelector(".search-button");
const nameContainer = document.querySelector(".result-name");
const unContainer = document.querySelector(".result-username");
const reposContainer = document.querySelector(".result-repos");
const urlContainer = document.querySelector(".result-url");
const avatar = document.querySelector(".result-avatar");
const resultText = document.querySelector(".result");

const client_id = " Iv1.cc4d493854730f6b";
const client_secret = "de3d550fb4228e770096c3c81d64b3161ed66f78";

const fetchUsers = async(user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);
    const data = await api_call.json();
    return {data};
};
const showData =()=>{
    fetchUsers(inputValue.value).then((res)=>{
        nameContainer.innerHTML=`<b>Name:</b> <span class="result-name">${res.data.name}</span>`;
        unContainer.innerHTML= `<b>Username:</b> <span class="result-username">${res.data.login}</span>`;
        reposContainer.innerHTML= `<b>Repos:</b> <span class="result-repos">${res.data.public_repos}</span>`;
        urlContainer.innerHTML= `<b>URL:</b> <a class="result-url">${res.data.html_url}</a>`;
        avatar.src=`${res.data.avatar_url}`;
    });
};
searchButton.addEventListener('click',(e) =>{
    e.preventDefault();
    showData();
   resultText.style.display = "flex" ;
});
inputValue.addEventListener('keyup',(e) =>{
    e.preventDefault();
    showData();
   resultText.style.display = "flex" ;
});