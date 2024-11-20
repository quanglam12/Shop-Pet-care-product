let currentPage = 1;
  const totalPages = 6; 
  const visiblePages = 5;
  let products = [
{ id: 1, name: 'Naturalcaore Slimdown', imageUrl: '../img/mew_food/PETClub_naturalcaore_slimdown_0.jpg', price:'1', href:"../products/PETClub_naturalcaore_slimdown.html" },
{ id: 2, name: 'Friskies Indoor Cover', imageUrl: '../img/mew_food/PETClub_Shopee_friskies_indoor_cover.jpg', price:'2', href : "#" },
{ id: 3, name: 'Friskies Kitten Cover', imageUrl: '../img/mew_food/PETClub_Shopee_friskies_kitten_cover.jpg', price:'1.5', href : "#" },
{ id: 4, name: 'Friskies Seafood Cover', imageUrl: '../img/mew_food/PETClub_Shopee_friskies_seafood_cover_1.jpg', price:'1', href : "#" },
{ id: 5, name: 'Friskies Sufing Cover', imageUrl: '../img/mew_food/PETClub_Shopee_friskies_sufing_cover.jpg', price:'1', href : "#" },
{ id: 6, name: 'Orijennew Gur8 Cover', imageUrl: '../img/mew_food/PETClub_Shopee_orijennew_gur8_cover.jpg', price:'1.6', href : "#" },
{ id: 7, name: 'Orijennew Kitten Cover', imageUrl: '../img/mew_food/PETClub_Shopee_orijennew_kitten_cover_1.jpg', price:'2.3', href : "#" },
{ id: 8, name: 'Wellness Adult Turkey Cover', imageUrl: '../img/mew_food/PETClub_wellness_adult_turkey_cover.jpg', price:'1', href : "#" },
{ id: 9, name: 'Wellness Core Cat Indoor Cover', imageUrl: '../img/mew_food/PETClub_wellness_core_cat_indoor_cover.jpg', price:'1.9', href : "#" },
{ id: 10, name: 'Wellness Core Cat Original Cover', imageUrl: '../img/mew_food/PETClub_wellness_core_cat_original_cover.jpg', price:'2.1', href : "#" },
{ id: 11, name: 'Wellness Core Kitten Cover', imageUrl: '../img/mew_food/PETClub_wellness_core_kitten_cvoer.jpg', price:'1.4', href : "#" },
{ id: 12, name: 'RC Wet Indoor7 Jelly Cover', imageUrl: '../img/mew_food/PETClub_RC_Wet_Indoor_7_jelly_cover.jpg', price:'1.5', href : "#" },
{ id: 13, name: 'Naturalcore Twinpouch Cover', imageUrl: '../img/mew_food/PETClub_Shopee_naturalcore_twinpouch_cover.jpg', price:'1', href : "#" },
{ id: 14, name: 'Felix Kitten Cover', imageUrl: '../img/mew_food/PETClub_felix_kitten_cover.jpg', price:'1', href : "#" },
{ id: 15, name: 'Proplan Fuzzy Cover', imageUrl: '../img/mew_food/PETClub_Shopee_proplan_fuzzy_cover_1.jpg', price:'2', href : "#" },
{ id: 16, name: 'Kitten Healthy Cuisine Cover', imageUrl: '../img/mew_food/PETClub_hills_cat_Kitten_Healthy_Cuisine_cover.jpg', price:'2', href : "#" },
{ id: 17, name: 'RC Cat Hair & Skin', imageUrl: '../img/mew_food/PETClub_Shopee_RC_cat_hairskin.jpg', price:'2.3', href : "#" },
{ id: 18, name: 'Nekko Lovemix Kitten Cover', imageUrl: '../img/mew_food/PETClub_Shopee_nekko_lovemix_kitten_cover.jpg', price:'2.3', href : "#" },
{ id: 19, name: 'Organic Seeds Spirulina', imageUrl: '../img/mew_other/PETClub_organic_seeds_spirulina_0.jpg', price:'1.3', href : "#" },
{ id: 20, name: "Prim's - Cat House A18", imageUrl: '../img/mew_other/PETClub_prims_a18_cover1.jpg', price:'3', href : "#" },
{ id: 21, name: "Prim's - Cat House A7", imageUrl: '../img/mew_other/PETClub_prims_a15_cover1.jpg', price:'3', href : "#" },
{ id: 22, name: "Prim's - Cat Tower A2", imageUrl: '../img/mew_other/PETClub_prims_a2_cover.jpg', price:'5', href : "#" },
{ id: 23, name: 'Avoderm Weight Cover', imageUrl: '../img/dog_food/PETClub_avoderm_WEIGHT_COVER.jpg', price:'2.3', href : "#" },
{ id: 24, name: 'Naturalcaore Sebstive Salmon Cover', imageUrl: '../img/dog_food/PETClub_naturalcaore_sebstive_salmon_cover.jpg', price:'2.3', href : "#" },
{ id: 25, name: 'Natureprotection Fish Cover', imageUrl: '../img/dog_food/PETClub_natureprotection_jr_fish_cover.jpg', price:'2.3', href : "#" },
{ id: 26, name: 'Ovenbaked Adult Chicken Cover', imageUrl: '../img/dog_food/PETClub_ovenbaked_ab_adult_chicken_cover.jpg', price:'2.3', href : "#" },
{ id: 27, name: 'Ovenbaked Alllifesb Chicken Cover', imageUrl: '../img/dog_food/PETClub_ovenbaked_alllifesb_chicken_cover.jpg', price:'2.3', href : "#" },
{ id: 28, name: 'Ovenbaked Allstages Fish Cover', imageUrl: '../img/dog_food/PETClub_ovenbaked_allstages_fish_cover.jpg', price:'2.3', href : "#" },
{ id: 29, name: 'Ovenbaked Sbpuppy Cover', imageUrl: '../img/dog_food/PETClub_ovenbaked_sbpuppy_cover.jpg', price:'2.3', href : "#" },
{ id: 30, name: 'Felina Single Cover', imageUrl: '../img/dog_food/PETClub_Shopee_felina_single_cover_1.jpg', price:'2.3', href : "#" },
{ id: 31, name: 'JH mam chick cover', imageUrl: '../img/dog_food/PETClub_Shopee_jh_mam_chick_cover.jpg', price:'2.3', href : "#" },
{ id: 32, name: 'Rcvet Renalsmall', imageUrl: '../img/dog_food/PETClub_Shopee_rcvet_renalsmall.jpg', price:'2.3', href : "#" },
{ id: 33, name: 'Rcvet Satiety', imageUrl: '../img/dog_food/PETClub_Shopee_rcvet_satiety1.jpg', price:'2.3', href : "#" },
{ id: 34, name: 'Sundaypets Lamb Puppy Cover', imageUrl: '../img/dog_food/PETClub_sundaypets_lamb_puppy_cover.jpg', price:'2.3', href : "#" },
{ id: 35, name: 'Wellness Dog Ocean Cover', imageUrl: '../img/dog_food/PETClub_wellness_dog_ocean_cover.jpg', price:'2.3', href : "#" },
{ id: 36, name: 'Wellness Dog Reduced Fat Cover', imageUrl: '../img/dog_food/PETClub_wellness_dog_reduced_fat_cover.jpg', price:'2.3', href : "#" },
{ id: 37, name: 'Doggyman Rubber Cover', imageUrl: '../img/dog_other/PETClub_doggyman_rubber1_cover.jpg', price:'2.3', href : "#" },
{ id: 38, name: 'Nina Puppytornado Cover', imageUrl: '../img/dog_other/PETClub_nina_puppytornado_cover.jpg', price:'2.3', href : "#" },
{ id: 39, name: 'Outwardhound Balls Small', imageUrl: '../img/dog_other/PETClub_outwardhound_balls_sm_1.jpg', price:'2.3', href : "#" },
{ id: 40, name: 'Pando Airdried Cover', imageUrl: '../img/dog_other/PETClub_pando_airdried_cover.jpg', price:'2.3', href : "#" },
{ id: 41, name: 'Ruffwear Frontrange Collar', imageUrl: '../img/dog_other/petclub_ruffwear_frontrange_collar_4.jpg', price:'2.3', href : "#" },
{ id: 42, name: 'Ruff Cover New', imageUrl: '../img/dog_other/PETClub_Shopee_ruff_cover_neww.jpg', price:'2.3', href : "#" },
{ id: 43, name: 'Ruff Crag', imageUrl: '../img/dog_other/PETClub_Shopee_ruff_crag_0.jpg', price:'2.3', href : "#" },

];
  const productsPerPage = 12;

function setupPagination() {
  const paginationElement = document.getElementById('pagination');
  paginationElement.innerHTML = '';

  paginationElement.appendChild(createPageButton('First', 1));
  paginationElement.appendChild(createPageButton('<', Math.max(1, currentPage - 1)));

  let startPage = Math.max(currentPage - Math.floor(visiblePages / 2), 1);
  let endPage = Math.min(startPage + visiblePages - 1, totalPages);

  if (endPage - startPage + 1 < visiblePages) {
    startPage = Math.max(endPage - visiblePages + 1, 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    paginationElement.appendChild(createPageButton(i, i, i === currentPage));
  }

  if (endPage < totalPages) {
    const ellipsis = document.createElement('li');
    ellipsis.textContent = '...';
    paginationElement.appendChild(ellipsis);
  }

  if (endPage < totalPages - 1) {
    paginationElement.appendChild(createPageButton(totalPages, totalPages));
  }

  paginationElement.appendChild(createPageButton('>', Math.min(totalPages, currentPage + 1)));
  paginationElement.appendChild(createPageButton('Last', totalPages));
}

function createPageButton(text, page, isActive) {
  const button = document.createElement('li');
  button.href = '#';
  button.textContent = text;
  button.onclick = function() { changePage(page); };
  if (isActive) {
    button.className = 'active';
  }
  return button;
}
function displayProducts(page) {
  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsToShow = products.slice(startIndex, endIndex);

  const productListElement = document.getElementById('items');
  productListElement.innerHTML = '';

  for (const product of productsToShow) {
    const productElement = document.createElement('div');
    productElement.className = 'item';
    productElement.innerHTML = `
      <a href="${product.href}">
        <img src ="${product.imageUrl}" title="${product.name}" alt="${product.name}">
      </a>
      <div class="ProductsCaption">
        <div class="ProductsName">
          <a href="#">${product.name}</a>
        </div>
        <div class="ProductsPrice">
          <p>${product.price}$</p>
        </div>
        <div class="ProductsAction">
          <div>
            <button>Thêm vào giỏ hàng <i class="fa fa-shopping-cart" style="font-size:20px"></i></button>
          </div>
          <div>
            <input type="checkbox" id="${product.id}"><label for="${product.id}">Quan tâm</label>
          </div>
        </div>
      </div>
    `;
    productListElement.appendChild(productElement);
  }

  document.getElementById('page-number').textContent = page;
}
function changePage(page) {
  currentPage = page;
  setupPagination();
  displayProducts(currentPage);
}

window.onload = () => { 
  setupPagination();
  displayProducts(currentPage);
 
};
