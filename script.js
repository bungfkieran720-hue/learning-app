const container = document.getElementById("program-list");

programs.forEach(function(program) {
  const button = document.createElement("button");
  button.textContent = program;
  container.appendChild(button);
});