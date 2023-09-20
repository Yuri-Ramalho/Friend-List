function updateFriend() {
  const objectId = document.getElementById("editObjectId").value;
  const Amigo = Parse.Object.extend("Amigo");
  const query = new Parse.Query(Amigo);

  query.get(objectId).then(function(friend) {
    if (friend) {
      friend.set("nome", document.getElementById("editNome").value);
      friend.set("sobrenome", document.getElementById("editSobrenome").value);
      friend.set("telefone", document.getElementById("editTelefone").value);
      friend.set("email", document.getElementById("editEmail").value);
      friend.set("comentario", document.getElementById("editComentario").value);

      friend.save().then(function() {
        alert("Amigo atualizado com sucesso!");
        location.reload();
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

function editFriendInfo(objectId) {
  const Amigo = Parse.Object.extend("Amigo");
  const query = new Parse.Query(Amigo);

  query.get(objectId).then(function(friend) {
    if (friend) {
      document.getElementById("editObjectId").value = objectId;
      document.getElementById("editNome").value = friend.get("nome");
      document.getElementById("editSobrenome").value = friend.get("sobrenome");
      document.getElementById("editTelefone").value = friend.get("telefone");
      document.getElementById("editEmail").value = friend.get("email");
      document.getElementById("editComentario").value = friend.get("comentario");

      showEditForm();
    } else {
      alert("Amigo não encontrado");
    }
  }).catch(function(error) {
    alert("Erro ao buscar amigo: " + error.message);
  });
}
