const input = document.querySelector(".input-box");
const add = document.querySelector(".add");
const listContainer = document.querySelector(".list-container");

const html = `
<div class="list-item">
          <p class="task"></p>
          <i class="icon">
            <i class="fa-regular fa-circle-check complet"></i>
            <i class="fa-solid fa-trash delete"></i>
          </i>
        </div>
`;

const renderTask = function () {
  if (input.value === "") {
    alert("add some task");
  } else {
    listContainer.insertAdjacentHTML("afterbegin", html);
    document.querySelector(".task").textContent = input.value;
    input.value = "";
    const _delete = document.querySelector(".delete");
    const _complet = document.querySelector(".complet");

    _delete.addEventListener("click", function (e) {
      listContainer.removeChild(e.target.parentNode.parentElement);
      console.log("delete button clicked");
    });

    _complet.addEventListener("click", function (e) {
      e.target.parentNode.parentNode.firstElementChild.style.textDecoration =
        "line-through";
    });
  }
};

add.addEventListener("click", renderTask);

input.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    renderTask();
  }
});
