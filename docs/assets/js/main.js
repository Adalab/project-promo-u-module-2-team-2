"use strict";const btnCreated=document.querySelector(".js-btnCreated"),hiddenCreated=document.querySelector(".js-hidden");function handleClickCreated(e){e.preventDefault(),btnCreated.disabled=!0,btnCreated.classList.add("grey"),hiddenCreated.classList.remove("js-hidden")}btnCreated.addEventListener("click",handleClickCreated);const nameInput=document.querySelector(".js_name_input"),jobInput=document.querySelector(".js_job_input"),emailInput=document.querySelector(".js_email_input"),phoneInput=document.querySelector(".js_phone_input"),linkedinInput=document.querySelector(".js_linkedin_input"),githubInput=document.querySelector(".js_github_input"),namePreviewTitle=document.querySelector(".js_name_preview"),jobPreviewTitle=document.querySelector(".js_job_preview"),emailPreviewLink=document.querySelector(".js_email_preview"),phonePreviewLink=document.querySelector(".js_phone_preview"),linkedinPreviewLink=document.querySelector(".js_linkedin_preview"),githubPreviewLink=document.querySelector(".js_github_preview"),data={palette:1,name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:""};function updatePreview(){""===data.name?namePreviewTitle.innerHTML="Nombre Apellido":namePreviewTitle.innerHTML=data.name,""===data.job?jobPreviewTitle.innerHTML="Front-end Developer":jobPreviewTitle.innerHTML=data.job,emailPreviewLink.href="mailto:"+data.email,phonePreviewLink.href=data.phone,linkedinPreviewLink.href="https://linkedin.com/in/"+data.linkedin,githubPreviewLink.href="https://github.com/"+data.github}function handleInputName(){data.name=nameInput.value,updatePreview()}function handleInputJob(){data.job=jobInput.value,updatePreview()}function handleInputEmail(){data.email=emailInput.value,updatePreview()}function handleInputPhone(){data.phone=phoneInput.value,updatePreview()}function handleInputLinkedin(){data.linkedin=linkedinInput.value,updatePreview()}function handleInputGithub(){data.github=githubInput.value,updatePreview()}nameInput.addEventListener("input",handleInputName),jobInput.addEventListener("input",handleInputJob),emailInput.addEventListener("input",handleInputEmail),phoneInput.addEventListener("input",handleInputPhone),linkedinInput.addEventListener("input",handleInputLinkedin),githubInput.addEventListener("input",handleInputGithub);const colorPaletteOne=document.querySelector(".color_palette_1"),colorPaletteTwo=document.querySelector(".color_palette_2"),colorPaletteThree=document.querySelector(".color_palette_3"),colorPaletteFour=document.querySelector(".color_palette_4"),card=document.querySelector(".js_card");function handleColorOne(){if(card.classList.remove("card--palette2"),card.classList.remove("card--palette3"),card.classList.remove("card--palette4"),card.classList.remove("card--palette5"),card.classList.remove("card--palette6"),card.classList.add("card--palette1"),card.classList.contains("card--palette1")){document.querySelector(".card__image").src="../assets/images/cardExample_palette1.jpg"}}function handleColorTwo(){if(card.classList.remove("card--palette1"),card.classList.remove("card--palette3"),card.classList.remove("card--palette4"),card.classList.remove("card--palette5"),card.classList.remove("card--palette6"),card.classList.add("card--palette2"),card.classList.contains("card--palette2")){document.querySelector(".card__image").src="../assets/images/cardExample_palette1.jpg"}}function handleColorThree(){if(card.classList.remove("card--palette1"),card.classList.remove("card--palette2"),card.classList.remove("card--palette4"),card.classList.remove("card--palette5"),card.classList.remove("card--palette6"),card.classList.add("card--palette3"),card.classList.contains("card--palette3")){document.querySelector(".card__image").src="../assets/images/cardExample_palette2.jpg"}}function handleColorFour(){if(card.classList.remove("card--palette1"),card.classList.remove("card--palette2"),card.classList.remove("card--palette3"),card.classList.remove("card--palette5"),card.classList.remove("card--palette6"),card.classList.add("card--palette4"),card.classList.contains("card--palette4")){document.querySelector(".card__image").src="../assets/images/cardExample_palette3.jpg"}}colorPaletteOne.addEventListener("click",handleColorOne),colorPaletteTwo.addEventListener("click",handleColorTwo),colorPaletteThree.addEventListener("click",handleColorThree),colorPaletteFour.addEventListener("click",handleColorFour);const form=document.querySelector(".js-currentTarget"),designForm=document.querySelector(".js_design_form"),fillForm=document.querySelector(".js_fill_form"),shareForm=document.querySelector(".js_share_form");function openDiv(e){e.classList.remove("collapsed"),e===designForm?(fillForm.classList.add("collapsed"),shareForm.classList.add("collapsed")):e===fillForm?(designForm.classList.add("collapsed"),shareForm.classList.add("collapsed")):e===shareForm&&(designForm.classList.add("collapsed"),fillForm.classList.add("collapsed"))}function handleClickLegend(e){(e.target.classList.contains("form__title")||e.target.classList.contains("form__icon"))&&(designForm.contains(e.target)?openDiv(designForm):fillForm.contains(e.target)?openDiv(fillForm):shareForm.contains(e.target)&&openDiv(shareForm))}form.addEventListener("click",handleClickLegend);