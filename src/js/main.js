'use strict';

//creamos variables

const designLegend = document.querySelector('.js_design_legend');
const fillLegend = document.querySelector('.js_fill_legend');
const shareLegend = document.querySelector('.js_share_legend');
const designForm = document.querySelector('.js_design_form');
const fillForm = document.querySelector('.js_fill_form');
const shareForm = document.querySelector('.js_share_form');

//funciones

function handleClickDesignLegend() {
  console.log('holis');
  openDesign();
  collapseFill();
  collapseShare();
}

function handleClickFillLegend() {
  collapseDesign();
  openFill();
  collapseShare();
}

function handleClickShareLegend() {
  collapseDesign();
  collapseFill();
  openShare();
}

function openDesign() {
  designForm.classList.remove('collapsed');
}

function collapseDesign() {
  designForm.classList.add('collapsed');
}

function openFill() {
  fillForm.classList.remove('collapsed');
}

function collapseFill() {
  fillForm.classList.add('collapsed');
}

function openShare() {
  shareForm.classList.remove('collapsed');
}

function collapseShare() {
  shareForm.classList.add('collapsed');
}

//eventos
console.log(designLegend);
designLegend.addEventListener('click', handleClickDesignLegend);
fillLegend.addEventListener('click', handleClickFillLegend);
shareLegend.addEventListener('click', handleClickShareLegend);
