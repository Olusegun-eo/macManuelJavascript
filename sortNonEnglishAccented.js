// String.localeCompare ==> To sort accented non Englis

var items = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair'];
items.sort(function (a, b) {
  return a.localeCompare(b);
});
console.log(items);

// items is ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']
