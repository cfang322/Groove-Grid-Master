
class Example {
    constructor(ele) {
        // dom ele that we grab from index.js
        this.ele = ele;
        this.ele.innerHTML = "<h1>It's ALIVE!!!</h1>";
        // debugger
        this.handleClick = this.handleClick.bind(this);
        this.ele.addEventListener("click", this.handleClick);
    };

    handleClick() {
        // debugger
        this.ele.children[0].innerText = "Ouch!"
    };
};

export default Example;