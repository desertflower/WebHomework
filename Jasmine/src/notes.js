var notes = (function() {
  var list = [];

  return {
    add: function(note) {
      if (note) {
        var item = {timestamp: Date.now(), text: note};
        list.push(item);
        return true;
      }
      return false;
    },
    remove: function(index) {
      if (index > -1 && index < list.length) {
        list.splice(index, 1);
        return true;
      }
      return false;
    },
    count: function() {
      return list.length;
    },
    list: function() {
      return list;
    },
    find: function(str) {
      return list.filter(function(note) {return note.text.indexOf(str) > -1});
    },
    clear: function() {
      list.splice(0, list.length);
    }
  }
}());