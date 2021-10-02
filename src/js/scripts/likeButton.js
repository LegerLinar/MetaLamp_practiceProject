$(function (){
  function likeButton(uniqueId){
    let likesAmount = $(`#likeCount_` + uniqueId).html()
    $(`#buttonLike_` + uniqueId).click(function(){

      if($(this).hasClass('buttonLike_done')){

        likesAmount--
        $(this).removeClass('buttonLike_done')
        $(`#likeCount_` + uniqueId).html(likesAmount)

      } else {

        likesAmount++
        $(this).addClass('buttonLike_done')
        $(`#likeCount_` + uniqueId).html(likesAmount)

      }
    });
  }
})