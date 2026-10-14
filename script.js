/* Wezen static demo – repeated placeholder content */
const icon = (id) => `<svg class="ic"><use href="#i-${id}"/></svg>`;
const ph = '<div class="ph">' + icon('img') + '</div>';
const repeat = (n, fn) => Array.from({ length: n }, (_, i) => fn(i)).join('');

// Naplo: food rows
const $=(id)=>document.getElementById(id);
if($('foods'))$('foods').innerHTML = repeat(3, () =>
  `<div class="food-item">${ph}<div class="info"><b>Étel neve</b><small>200 g</small><small>600 kcal</small></div>${icon('edit')}</div>`);

// Recept: list + favourites
if($('recipeList'))$('recipeList').innerHTML = repeat(4, () =>
  `<a class="recipe-item" href="egyrecept.html">${ph}
     <h3>Recept/étel neve</h3>
     <div class="stat"><span class="gp">200kcal / adag</span><span class="gp">4 adag</span></div>
     <div class="tags"><span class="pill">${icon('clock')}25-30 min</span><span class="pill">${icon('cup')}Könnyű</span></div>
   </a>`);
if($('favList'))$('favList').innerHTML = repeat(3, () =>
  `<div class="fav">${ph}<span>recept neve</span>${icon('heart')}</div>`);

// Egy recept: ingredients
if($('ingr'))$('ingr').innerHTML = repeat(4, () =>
  `<li><span class="chk">${icon('check')}</span>Csirkemell<small>500g</small></li>`);

document.querySelectorAll('.side nav a').forEach((a) => a.setAttribute('aria-label', a.textContent.trim()));
