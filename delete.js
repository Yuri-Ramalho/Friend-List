document.getElementById("deleteFriend").addEventListener("click", function() {
  const objectId = document.getElementById("objectId").value; // Preencha com o objectId do amigo que deseja excluir
  const Amigo = Parse.Object.extend("Amigo");
  const query = new Parse.Query(Amigo);

  // Encontre o amigo pelo objectId
  query.get(objectId).then(function(friend) {
    if (friend) {
      // Exclua o amigo
      friend.destroy().then(function() {
        alert("Amigo excluído com sucesso!");
      }).catch(function(error) {
        alert("Erro ao excluir amigo: " + error.message);
      });
    } else {
      alert("Amigo não encontrado");
    }
  }).catch(function(error) {
    alert("Erro ao buscar amigo: " + error.message);
  });
});
