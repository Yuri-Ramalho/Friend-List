document.getElementById("readFriends").addEventListener("click", function() {
  const Amigo = Parse.Object.extend("Amigo");
  const query = new Parse.Query(Amigo);

  query.find().then(function(results) {
    const friendList = document.getElementById("friendList");
    friendList.innerHTML = "";

    results.forEach(function(friend) {
      const nome = friend.get("nome");
      const sobrenome = friend.get("sobrenome");
      const listItem = document.createElement("li");
      listItem.innerHTML = `${nome} ${sobrenome}`;
      friendList.appendChild(listItem);
    });
  }).catch(function(error) {
    alert("Erro: " + error.message);
  });
});
