function newButton(texto, callback) {
  const $body = document.querySelector("body");
  const $button = document.createElement("button");
  $button.textContent = texto;

  callback($button);

  $body.insertAdjacentElement("beforeend", $button);
  return $button;
}

newButton("Login", (button) => {
  button.style.cssText = ` 
    font-size:40px;
    color:green;
    `;

  button.addEventListener("click", () => {
    console.log("Clicou e funcionou graças a Deus");
  });
});
newButton("SignUp", (button) => {
  button.style.cssText = ` 
  font-size:40px;
  color:red;
  `;

  button.addEventListener("click", () => {
    console.log("Clicou e funcionou porque Deus abençoou");
  });
});
