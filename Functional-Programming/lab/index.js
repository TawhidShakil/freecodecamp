function generateElement() {
    return Math.floor(Math.random() * 100) + 1;
}

function generateArray() {
    return Array.from({ length: 5 }, generateElement);
}

function generateContainer() {
    return document.createElement("div");
}

function fillArrContainer(container, arr) {
    container.innerHTML = '';
    arr.forEach(num => {
        const span = document.createElement("span");
        span.textContent = num;
        container.appendChild(span);
    });
}

function isOrdered(a, b) {
    return a <= b;
}

function swapElements(arr, index) {
    if (!isOrdered(arr[index], arr[index + 1])) {
        const temp = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = temp;
    }
}

function highlightCurrentEls(container, index) {
    const children = container.children;
    if (children[index] && children[index + 1]) {
        children[index].style.border = "2px dashed red";
        children[index + 1].style.border = "2px dashed red";
    }
}

const generateBtn = document.getElementById("generate-btn");
const sortBtn = document.getElementById("sort-btn");
const arrayContainer = document.getElementById("array-container");
const startingArrayDiv = document.getElementById("starting-array");

let currentArray = [];

generateBtn.addEventListener("click", () => {
    currentArray = generateArray();
    fillArrContainer(startingArrayDiv, currentArray);
    const steps = document.querySelectorAll("#array-container > div");
    steps.forEach(div => {
        if (div.id !== "starting-array") div.remove();
    });
});

sortBtn.addEventListener("click", () => {
    if (currentArray.length === 0) return;
    let arr = [...currentArray];
    const n = arr.length;
    arrayContainer.innerHTML = "";
    const initialDiv = generateContainer();
    fillArrContainer(initialDiv, arr);
    highlightCurrentEls(initialDiv, 0);
    arrayContainer.appendChild(initialDiv);
    for (let i = 0; i < n; i++) {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (!isOrdered(arr[j], arr[j + 1])) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
            const stepDiv = generateContainer();
            fillArrContainer(stepDiv, [...arr]);
            highlightCurrentEls(stepDiv, j);
            arrayContainer.appendChild(stepDiv);
        }
        if (!swapped) break;
    }
    const finalDiv = generateContainer();
    fillArrContainer(finalDiv, [...arr]);
    arrayContainer.appendChild(finalDiv);
});
