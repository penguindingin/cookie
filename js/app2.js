var ingredientsCheckbox = $('.ingredients-checkbox');
var stepsCheckbox = $('.steps-Checkbox');
var infoCheckbox = $('info-Checkbox');

var ingredients = $('.ingredients');
var instructions = $('.steps');
var info = $('.info');

ingredientsCheckbox.change(function
  () {
  if (this.checked) {
    ingredients.fadeOut();
  } else {
    ingredients.fadeIn();
  }

instructionsCheckbox.change(function
  () {
  if (this.checked) {
    instructions.fadeOut();
  } else {
    instructions.fadeIn();
  }

infoCheckbox.change(function
    () {
    if (this.checked) {
      info.fadeOut();
    } else {
      info.fadeIn();
  }
