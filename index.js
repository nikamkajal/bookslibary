const urlInput = document.getElementById('url');
const titleInput = document.getElementById('title');
const AuthorInput = document.getElementById('Author')
const button = document.getElementById('btn')
button.addEventListener('click', myFun)
function myFun ()
{

    const myDiv = document.createElement('div')
    myDiv.classList.add('card')
    const image = document.createElement('img');
    image.src = urlInput.value
    image.alt = titleInput.value;
    image.alt =AuthorInput.value;
    const title = document.createElement('h2');
    const Author =document.createElement('h3');
    title.textContent = titleInput.value
    Author.textContent = AuthorInput.value
    myDiv.append(image, title);
    document.getElementById('output').appendChild(myDiv)
    urlInput.value = ""
    titleInput.value=""
    AuthorInput.value=""
}
