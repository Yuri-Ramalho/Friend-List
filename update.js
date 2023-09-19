// Função para carregar as informações do amigo para edição
function editFriendInfo(objectId) {
  const Amigo = Parse.Object.extend("Amigo");
  const query = new Parse.Query(Amigo);

  // Encontre o amigo pelo objectId
  query.get(objectId).then(function(friend) {
    if (friend) {
      // Preencha os campos de edição com os dados atuais do amigo
      document.getElementById("edit-nome").value = friend.get("nome");
      document.getElementById("edit-sobrenome").value = friend.get("sobrenome");
      document.getElementById("edit-telefone").value = friend.get("telefone");
      document.getElementById("edit-email").value = friend.get("email");
      document.getElementById("edit-detalhes").value = friend.get("detalhes");
      document.getElementById("edit-objectId").value = objectId;

      // Exiba o formulário de edição
      document.getElementById("edit-form").style.display = "block";
      document.getElementById("view-details").style.display = "none";
    } else {
      alert("Amigo não encontrado");
    }
  }).catch(function(error) {
    alert("Erro ao buscar amigo: " + error.message);
  });
}

// Função para salvar as alterações do amigo editado
function saveFriendChanges() {
  const objectId = document.getElementById("edit-objectId").value;
  const Amigo = Parse.Object.extend("Amigo");
  const query = new Parse.Query(Amigo);

  // Encontre o amigo pelo objectId
  query.get(objectId).then(function(friend) {
    if (friend) {
      // Atualize as informações do amigo com base nos campos de edição
      friend.set("nome", document.getElementById("edit-nome").value);
      friend.set("sobrenome", document.getElementById("edit-sobrenome").value);
      friend.set("telefone", document.getElementById("edit-telefone").value);
      friend.set("email", document.getElementById("edit-email").value);
      friend.set("detalhes", document.getElementById("edit-detalhes").value);

      // Salve as alterações
      friend.save().then(function() {
        alert("Amigo atualizado com sucesso!");
        location.reload(); // Recarregue a página para mostrar os campos como somente leitura
      }).catch(function(error) {
        alert("Erro ao atualizar: " + error.message);
      });
    } else {
      alert("Amigo não encontrado");
    }
  }).catch(function(error) {
    alert("Erro ao buscar amigo: " + error.message);
  });
}
