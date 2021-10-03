import {doubleFormDateDropdown} from '../scripts/doubleDateDropdown';
import {dateDropdown} from '../scripts/date-dropdown';
import {birthDateDropdown} from '../scripts/birthDateDropdown';
import {dropDowner} from '../scripts/dropdowner';
import {inlineDateDropdown} from '../scripts/inline-Date';

$(function (){
// doubleFormDateDropdown('search_number__arriving_date_main')
doubleFormDateDropdown('search_number__arriving_date_main', 'search_number__departure_date_main')
doubleFormDateDropdown('room-order-card__arriving_date_mainOrderCard', 'room-order-card__departure_date_mainOrderCard')
birthDateDropdown('signup_birthdate_main')

dropDowner('search_number__guests_dropdown_main')
dropDowner('room-order-card__guests_dropdown_mainOrderCard')
inlineDateDropdown('card_date_field')
})