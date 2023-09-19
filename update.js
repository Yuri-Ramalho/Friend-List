document.getElementById("updateFriend").addEventListener("click", function() {
  const objectId = document.getElementById("objectId").value; // Preencha com o objectId do amigo que deseja atualizar
  const Amigo = Parse.Object.extend("Amigo");
  const query = new Parse.Query(Amigo);

  // Encontre o amigo pelo objectId
  query.get(objectId).then(function(friend) {
    if (friend) {
      // Atualize as informações do amigo
      friend.set("nome", document.getElementById("newName").value);
      friend.set("sobrenome", document.getElementById("newSobrenome").value);
      friend.set("telefone", document.getElementById("newTelefone").value);
      friend.set("email", document.getElementById("newEmail").value);
      friend.set("detalhes", document.getElementById("newDetalhes").value);

      // Salve as alterações
      friend.save().then(function() {
        alert("Amigo atualizado com sucesso!");
      }).catch(function(error) {
        alert("Erro ao atualizar: " + error.message);
      });
    } else {
      alert("Amigo não encontrado");
    }
  }).catch(function(error) {
    alert("Erro ao buscar amigo: " + error.message);
  });
});
