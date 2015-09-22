var hand = ["グー", "チョキ", "パー"];
var result_count = [0, 0, 0];

function show_hand(value, place){
  $(place).text(hand[value]);
}

function judge (value) {
  var rand = Math.floor( Math.random() * 3 );
  show_hand(value, "span.show_player_hand")
  show_hand(rand, "span.show_program_hand")

  if (value == rand) {
    $("div.result").text("あいこ");
    result_count[2] += 1;
  }else if ((value == 0 && rand == 1) || (value == 1 && rand == 2) || (value == 2 && rand == 0)) {
    $("div.result").text("勝ち");
    result_count[0] += 1;
  }else{
    $("div.result").text("負け");
    result_count[1] += 1;
  };
}

function janken(value){
  if (value == undefined){
      alert('手を選んでください！');
    }else{
      var rand = Math.floor( Math.random() * 3 );
      judge(value);
    }
}

function change_count(){
  var result_name = ["win_count", "lose_count", "quits_count"];
  for (var i = 0; i < 3; i++) {
    $('span.' + result_name[i] ).text(result_count[i]);
  };
  var win_per = 100 * result_count[0]/(result_count[0] + result_count[1] + result_count[2])
  $('span.win_per' ).text(win_per);
}

$(window).on("load", function() {
  $("input.janken").on("click", function() {
    var jankenValue = $(':radio[name="janken"]:checked').val();
    janken(jankenValue);
    change_count();
  });
});
