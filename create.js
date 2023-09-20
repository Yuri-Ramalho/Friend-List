document.getElementById("createFriend").addEventListener("click", function() {
  const Amigo = Parse.Object.extend("Amigo");
  const amigo = new Amigo();
  amigo.set("nome", document.getElementById("name").value);
  amigo.set("sobrenome", document.getElementById("sobrenome").value);
  amigo.set("telefone", document.getElementById("telefone").value);
  amigo.set("email", document.getElementById("email").value);
  amigo.set("comentario", document.getElementById("comentario").value);

  amigo.save().then(function() {
    alert("Amigo criado com sucesso!");
    // Redirecione para a página de lista de amigos após a criação bem-sucedida
    window.location.href = "list_friends.html";
  }).catch(function(error) {
    alert("Erro: " + error.message);
  });
});
