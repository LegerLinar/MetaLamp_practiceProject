// $(function (){
  function expander(uniqueId){
    $(`#expanders-independent`+ uniqueId).parent().click(function (){
      $(`#expander__more_`+ uniqueId).toggle()
      $(`#expander__less_`+ uniqueId).toggle()


    })
  }
// })
export { expander }