const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");



const isPalindrome = () => {
  const string = textInput.value;
  const palString = cleanString(string);
  const arrayPalRev = palString.split("").reverse().join("");

  if(palString === arrayPalRev){
    result.innerHTML = `<span>${string}</span> is a palindrome.`;
    result.classList.add("show");
  } else {
    result.innerHTML = `<span>${string}</span> is not a palindrome.`;
    result.classList.add("show");
  }
}

checkBtn.addEventListener("click", () => {
  if(textInput.value === ""){
    result.classList.remove("show");
    alert("Please input a value");
  } else {
    isPalindrome();
  }
});

const cleanString = (palString) => palString.split(/[^a-zA-Z0-9]/g).map((word) => word.toLowerCase()).join("");

