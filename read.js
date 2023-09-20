function readFriend(objectId) {
  const Amigo = Parse.Object.extend("Amigo");
  const query = new Parse.Query(Amigo);

  query.get(objectId).then(function(friend) {
    if (friend) {
      const friendDetailsDiv = document.getElementById("friendDetails");
      friendDetailsDiv.innerHTML = `
        <p>Nome: ${friend.get("nome")}</p>
        <p>Sobrenome: ${friend.get("sobrenome")}</p>
        <p>Telefone: ${friend.get("telefone")}</p>
        <p>Email: ${friend.get("email")}</p>
        <p>Comentário: ${friend.get("comentario")}</p>
      `;
    } else {
      alert("Amigo não encontrado");
    }
  }).catch(function(error) {
    alert("Erro ao buscar amigo: " + error.message);
  });
}
