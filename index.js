const btns = document.querySelectorAll(".btn-default");

for (let btn of btns) {
  const btnChild = btn.firstElementChild;
  const isMinusBtn = btnChild.classList.contains("fa-minus");
  const isPlusBtn = btnChild.classList.contains("fa-plus");

  const componentParent = btnChild.parentElement.parentElement.parentElement;
  console.log(componentParent.querySelector("h5"));
}
