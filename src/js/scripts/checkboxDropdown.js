
  function checkboxDropDowner(itemName){
    $(`#checkbox_` + itemName).click(function () { //toggle slider
      $(`#checkbox_dropdown_field_` + itemName).slideToggle()
      $(`#more_` + itemName).toggle()
      $(`#less_` + itemName).toggle()
    })
  }

  export {checkboxDropDowner}