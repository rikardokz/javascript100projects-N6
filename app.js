const img = document.getElementById("img");
const back = document.getElementById("back");
const next = document.getElementById("next");
let counter = 0;

const urls = [
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1447&q=80",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1514316703755-dca7d7d9d882?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
]

function nextUrl() {
    if(counter >= urls.length -1) {
        img.src = urls[0]
        counter = 0;
    } else {
        counter++;
        img.src = urls[counter];
    }
}

function prevUrl() {
    if(counter <= 0) {
        img.src = urls[urls.length - 1]
        counter = urls.length - 1;
    } else {
        counter--;
        img.src = urls[counter];
    }
}

next.addEventListener("click", () => {
    nextUrl();
})

back.addEventListener("click", () => {
    prevUrl();
    console.log(urls[counter])
})