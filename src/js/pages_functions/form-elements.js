import {dropDowner} from '../scripts/dropdowner';
import {checkboxDropDowner} from '../scripts/checkboxDropdown';
import {likeButton} from '../scripts/likeButton';
import {rangeDateDropdown} from '../scripts/range-date';
import {doubleFormDateDropdown} from '../scripts/doubleDateDropdown';
import {rangeStarsRate} from '../scripts/range-rate';
import {paginator} from '../scripts/pagination';

$(function () {
  doubleFormDateDropdown('date_example_1', 'date_example_2')

  dropDowner('guestsDefault_first');
  rangeStarsRate('form-element__rangeRate')

  rangeStarsRate('form-element__rangeRate-2')

  dropDowner('roomsDefault');
  dropDowner('roomsExpanded');
  dropDowner('guestsDefault');
  dropDowner('guestsExpanded');
  paginator('paginationId')
  checkboxDropDowner('checkbox_expandable')

  checkboxDropDowner('checkbox_expanded')
  likeButton('like_def')
  likeButton('like_checked')

  likeButton('like_checked_comment_murad')
  rangeDateDropdown('date-filter_example')

})

