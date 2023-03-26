
```javascript
document.getElementById("postForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const postInput = document.getElementById("postInput");
    const postText = postInput.value.trim();

    if (postText) {
        const postDiv = document.createElement("div");
        postDiv.classList.add("post");
        postDiv.textContent = postText;
        document.getElementById("posts").prepend(postDiv);
        postInput.value = "";
    }
});
```