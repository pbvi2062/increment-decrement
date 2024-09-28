let countValue = document.querySelector("#counter");



const increment = () => {
    // getting the Value from UI
    let value = parseInt(countValue.innerText);
    //UPDATE THE VALUE
    value = value + 1;
    // set the value nto UI
    countValue.innerText = value;


};
const decrement = () => {
    let value = parseInt(countValue.innerText);
    value = value - 1;
    countValue.innerText = value;

};