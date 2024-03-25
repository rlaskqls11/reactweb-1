// JavaScript 코드
function newElement() {
    var inputValue = document.getElementById("myInput").value;
    if (inputValue === '') {
        alert("할 일을 입력하세요!");
    } else {
        var li = document.createElement("li");
        var textNode = document.createTextNode(inputValue);
        li.appendChild(textNode);
        document.getElementById("myUL").appendChild(li);
        document.getElementById("myInput").value = "";
        li.onclick = function() {
            this.classList.toggle('checked');
        }
    }
}