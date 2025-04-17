$(function() {
  $('#change-color').on({
    'click': () => {
      // 文字を赤 
      $('#target').css('color', 'red');
    }

    
});
  });

  $(function() {
  $('#change-text').on('click', (e) => {
    // クリックされた場合
    if(e.type === 'click'){
      $('#target').text('hello!');
    }
  });
  });

  $(function () {
    // id属性がfadeOutの要素がクリックされたら
    $('#fade-out').on('click', function() {
      // フェードアウトする
      $('#target').fadeOut();
    });
   });

   $(function () {
    // id属性がfadeOutの要素がクリックされたら
    $('#fade-in').on('click', function() {
      // フェードアウトする
      $('#target').fadeIn();
    });
   });
