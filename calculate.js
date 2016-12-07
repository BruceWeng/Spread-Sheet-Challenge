class spreadSheet() {
  constructor() {
    this.formula = "";
    this.action = "";
    this.params = [];
    this.cell1 = [];
    this.cell2 = [];

    $(".cell").keyup(function(event) {
      if(event.keyCode == 13){
        var formula = $(this).val();
        var action = formula.substring(0, 3).toLowerCase();
        //params[0] = cell1, params[1] = cell2
        var params = formula.substring(4, formula.length - 1).split(', ')
        //cell[0] = col, cell[1] = row
        var cell1 = params[0].split('');
        var cell2 = params[1].split('');
      }
    })

  }
}

var cell = (function() {
  var value = 0;
  var id = $('.cell').attr('id');
  var action = {
    add : add,
    sub: sub,
    mul: mul,
    div: div
  }

  function getValue(id) {
    var id = $('.cell').attr('id')
  }

  function update(id) {

  }
  function add(val1, val2) {
    return val1 + val2;
  }

  function sub(val1, val2) {
    return val1 - val2;
  }

  function mul(val1, val2) {
    return val1 * val2;
  }

  function did(val1, val2) {
    return val1 / val2;
  }
})()
