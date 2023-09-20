function deleteFriend(objectId) {
      const Amigo = Parse.Object.extend("Amigo");
      const query = new Parse.Query(Amigo);

      // Fetch the friend object to delete
      query.get(objectId).then(function (friend) {
        friend.destroy().then(function () {
          alert("Amigo excluído com sucesso!");
          // Refresh the friend list after deleting
          listFriends();
        }).catch(function (error) {
          alert("Erro ao excluir amigo: " + error.message);
        });
      }).catch(function (error) {
        alert("Erro: " + error.message);
      });
    }