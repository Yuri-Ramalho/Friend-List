function deleteFriend(objectId) {
  const Amigo = Parse.Object.extend("Amigo");
  const query = new Parse.Query(Amigo);

  query.get(objectId).then(function(friend) {
    friend.destroy().then(function() {
      alert("Amigo excluído com sucesso!");
      listFriends();
    }).catch(function(error) {
      alert("Erro ao excluir amigo: " + error.message);
    });
  }).catch(function(error) {
    alert("Erro: " + error.message);
  });
}