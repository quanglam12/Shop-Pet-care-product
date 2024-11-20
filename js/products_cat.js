let currentPage = 1; 
  const totalPages = 4; 
  const visiblePages = 5; 
  let products = [
{ id: 1, name: 'Naturalcaore Slimdown', imageUrl: '../img/mew_food/PETClub_naturalcaore_slimdown_0.jpg', price:'1' },
{ id: 2, name: 'Friskies Indoor Cover', imageUrl: '../img/mew_food/PETClub_Shopee_friskies_indoor_cover.jpg', price:'2' },
{ id: 3, name: 'Friskies Kitten Cover', imageUrl: '../img/mew_food/PETClub_Shopee_friskies_kitten_cover.jpg', price:'1.5' },
{ id: 4, name: 'Friskies Seafood Cover', imageUrl: '../img/mew_food/PETClub_Shopee_friskies_seafood_cover_1.jpg', price:'1' },
{ id: 5, name: 'Friskies Sufing Cover', imageUrl: '../img/mew_food/PETClub_Shopee_friskies_sufing_cover.jpg', price:'1' },
{ id: 6, name: 'Orijennew Gur8 Cover', imageUrl: '../img/mew_food/PETClub_Shopee_orijennew_gur8_cover.jpg', price:'1.6' },
{ id: 7, name: 'Orijennew Kitten Cover', imageUrl: '../img/mew_food/PETClub_Shopee_orijennew_kitten_cover_1.jpg', price:'2.3' },
{ id: 8, name: 'Wellness Adult Turkey Cover', imageUrl: '../img/mew_food/PETClub_wellness_adult_turkey_cover.jpg', price:'1' },
{ id: 9, name: 'Wellness Core Cat Indoor Cover', imageUrl: '../img/mew_food/PETClub_wellness_core_cat_indoor_cover.jpg', price:'1.9' },
{ id: 10, name: 'Wellness Core Cat Original Cover', imageUrl: '../img/mew_food/PETClub_wellness_core_cat_original_cover.jpg', price:'2.1' },
{ id: 11, name: 'Wellness Core Kitten Cover', imageUrl: '../img/mew_food/PETClub_wellness_core_kitten_cvoer.jpg', price:'1.4' },
{ id: 12, name: 'RC Wet Indoor7 Jelly Cover', imageUrl: '../img/mew_food/PETClub_RC_Wet_Indoor_7_jelly_cover.jpg', price:'1.5' },
{ id: 13, name: 'Naturalcore Twinpouch Cover', imageUrl: '../img/mew_food/PETClub_Shopee_naturalcore_twinpouch_cover.jpg', price:'1' },
{ id: 14, name: 'Felix Kitten Cover', imageUrl: '../img/mew_food/PETClub_felix_kitten_cover.jpg', price:'1' },
{ id: 15, name: 'Proplan Fuzzy Cover', imageUrl: '../img/mew_food/PETClub_Shopee_proplan_fuzzy_cover_1.jpg', price:'2' },
{ id: 16, name: 'Kitten Healthy Cuisine Cover', imageUrl: '../img/mew_food/PETClub_hills_cat_Kitten_Healthy_Cuisine_cover.jpg', price:'2' },
{ id: 17, name: 'RC Cat Hair & Skin', imageUrl: '../img/mew_food/PETClub_Shopee_RC_cat_hairskin.jpg', price:'2.3' },
{ id: 18, name: 'Nekko Lovemix Kitten Cover', imageUrl: '../img/mew_food/PETClub_Shopee_nekko_lovemix_kitten_cover.jpg', price:'2.3' },
{ id: 19, name: 'Organic Seeds Spirulina', imageUrl: '../img/mew_other/PETClub_organic_seeds_spirulina_0.jpg', price:'1.3' },
{ id: 20, name: "Prim's - Cat House A18", imageUrl: '../img/mew_other/PETClub_prims_a18_cover1.jpg', price:'3' },
{ id: 21, name: "Prim's - Cat House A7", imageUrl: '../img/mew_other/PETClub_prims_a15_cover1.jpg', price:'3' },
{ id: 22, name: "Prim's - Cat Tower A2", imageUrl: '../img/mew_other/PETClub_prims_a2_cover.jpg', price:'5' },
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
      <a href="#">
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
