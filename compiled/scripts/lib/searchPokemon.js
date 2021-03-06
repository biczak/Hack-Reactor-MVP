'use strict';

function searchPokemonAPI(query, callback) {
  $.ajax({
    url: 'http://pokeapi.co/api/v2/pokemon/' + query,
    type: 'GET',
    success: function success(data) {
      console.log(data);
      return callback(data);
    },
    failure: function failure(err) {
      console.log(err);
    }
  });
}
window.searchPokemonAPI = searchPokemonAPI;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NjcmlwdHMvbGliL3NlYXJjaFBva2Vtb24uanMiXSwibmFtZXMiOlsic2VhcmNoUG9rZW1vbkFQSSIsInF1ZXJ5IiwiY2FsbGJhY2siLCIkIiwiYWpheCIsInVybCIsInR5cGUiLCJzdWNjZXNzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJmYWlsdXJlIiwiZXJyIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLGdCQUFULENBQTBCQyxLQUExQixFQUFpQ0MsUUFBakMsRUFBMkM7QUFDekNDLElBQUVDLElBQUYsQ0FBTztBQUNMQywrQ0FBeUNKLEtBRHBDO0FBRUxLLFVBQU0sS0FGRDtBQUdMQyxhQUFTLGlCQUFDQyxJQUFELEVBQVU7QUFDakJDLGNBQVFDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBLGFBQU9OLFNBQVNNLElBQVQsQ0FBUDtBQUNELEtBTkk7QUFPTEcsYUFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCSCxjQUFRQyxHQUFSLENBQVlFLEdBQVo7QUFDRDtBQVRJLEdBQVA7QUFXRDtBQUNEQyxPQUFPYixnQkFBUCxHQUEwQkEsZ0JBQTFCIiwiZmlsZSI6InNlYXJjaFBva2Vtb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBzZWFyY2hQb2tlbW9uQVBJKHF1ZXJ5LCBjYWxsYmFjaykge1xuICAkLmFqYXgoe1xuICAgIHVybDogYGh0dHA6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLyR7cXVlcnl9YCxcbiAgICB0eXBlOiAnR0VUJyxcbiAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICByZXR1cm4gY2FsbGJhY2soZGF0YSk7XG4gICAgfSxcbiAgICBmYWlsdXJlOiBmdW5jdGlvbihlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9KTtcbn1cbndpbmRvdy5zZWFyY2hQb2tlbW9uQVBJID0gc2VhcmNoUG9rZW1vbkFQSTtcbiJdfQ==