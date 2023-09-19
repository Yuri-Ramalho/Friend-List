function readFriend(objectId) {
  const Amigo = Parse.Object.extend("Amigo");
  const query = new Parse.Query(Amigo);

  // Fetch the friend object to read
  query.get(objectId).then(function(friend) {
    if (friend) {
      // Display friend information on the page
      const friendDetailsDiv = document.getElementById("friendDetails");
      friendDetailsDiv.innerHTML = `
        <p>Nome: ${friend.get("nome")}</p>
        <p>Sobrenome: ${friend.get("sobrenome")}</p>
        <p>Telefone: ${friend.get("telefone")}</p>
        <p>Email: ${friend.get("email")}</p>
        <p>Detalhes: ${friend.get("detalhes")}</p>
      `;
    } else {
      alert("Amigo não encontrado");
    }
  }).catch(function(error) {
    alert("Erro ao buscar amigo: " + error.message);
  });
}
