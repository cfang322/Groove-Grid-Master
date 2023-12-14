import Example from "./scripts/example";

document.addEventListener("DOMContentLoaded", () => {
    // below is trying to grab from body tag <div></div> from index.html
    const main = document.getElementById("main");
    // debugger
    new Example(main);
    console.log("hello world");
});