function getBookmarks() {
  try {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

    // Check that it's an array
    if (!Array.isArray(bookmarks)) {
      return [];
    }

    // Validate each object has name, category, and url
    const isValid = bookmarks.every(bookmark =>
      bookmark &&
      typeof bookmark.name === "string" &&
      typeof bookmark.category === "string" &&
      typeof bookmark.url === "string"
    );

    return isValid ? bookmarks : [];

  } catch (error) {
    return [];
  }
}




const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const addBookmarkBtn = document.getElementById("add-bookmark-button");
const categoryDropdown = document.getElementById("category-dropdown");
const categoryName = document.querySelector(".category-name");
function displayOrCloseForm(){
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
}

addBookmarkButton.addEventListener("click", () => {
  const selectedValue = categoryDropdown.value;
  categoryName.innerText = selectedValue;
  displayOrCloseForm();
});