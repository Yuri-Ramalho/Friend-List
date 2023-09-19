document.getElementById("createFriend").addEventListener("click", function() {
  const Amigo = Parse.Object.extend("Amigo");
  const amigo = new Amigo();
  amigo.set("nome", document.getElementById("name").value);
  amigo.set("sobrenome", document.getElementById("sobrenome").value);
  amigo.set("telefone", document.getElementById("telefone").value);
  amigo.set("email", document.getElementById("email").value);
  amigo.set("detalhes", document.getElementById("detalhes").value);

  amigo.save().then(function() {
    alert("Amigo criado com sucesso!");
  }).catch(function(error) {
    alert("Erro: " + error.message);
  });
});
