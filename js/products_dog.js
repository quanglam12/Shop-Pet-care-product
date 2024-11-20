let currentPage = 1;
  const totalPages = 3; 
  const visiblePages = 5; 
  let products = [
{ id: 23, name: 'Avoderm Weight Cover', imageUrl: '../img/dog_food/PETClub_avoderm_WEIGHT_COVER.jpg', price:'2.3' },
{ id: 24, name: 'Naturalcaore Sebstive Salmon Cover', imageUrl: '../img/dog_food/PETClub_naturalcaore_sebstive_salmon_cover.jpg', price:'2.3' },
{ id: 25, name: 'Natureprotection Fish Cover', imageUrl: '../img/dog_food/PETClub_natureprotection_jr_fish_cover.jpg', price:'2.3' },
{ id: 26, name: 'Ovenbaked Adult Chicken Cover', imageUrl: '../img/dog_food/PETClub_ovenbaked_ab_adult_chicken_cover.jpg', price:'2.3' },
{ id: 27, name: 'Ovenbaked Alllifesb Chicken Cover', imageUrl: '../img/dog_food/PETClub_ovenbaked_alllifesb_chicken_cover.jpg', price:'2.3' },
{ id: 28, name: 'Ovenbaked Allstages Fish Cover', imageUrl: '../img/dog_food/PETClub_ovenbaked_allstages_fish_cover.jpg', price:'2.3' },
{ id: 29, name: 'Ovenbaked Sbpuppy Cover', imageUrl: '../img/dog_food/PETClub_ovenbaked_sbpuppy_cover.jpg', price:'2.3' },
{ id: 30, name: 'Felina Single Cover', imageUrl: '../img/dog_food/PETClub_Shopee_felina_single_cover_1.jpg', price:'2.3' },
{ id: 31, name: 'JH mam chick cover', imageUrl: '../img/dog_food/PETClub_Shopee_jh_mam_chick_cover.jpg', price:'2.3' },
{ id: 32, name: 'Rcvet Renalsmall', imageUrl: '../img/dog_food/PETClub_Shopee_rcvet_renalsmall.jpg', price:'2.3' },
{ id: 33, name: 'Rcvet Satiety', imageUrl: '../img/dog_food/PETClub_Shopee_rcvet_satiety1.jpg', price:'2.3' },
{ id: 34, name: 'Sundaypets Lamb Puppy Cover', imageUrl: '../img/dog_food/PETClub_sundaypets_lamb_puppy_cover.jpg', price:'2.3' },
{ id: 35, name: 'Wellness Dog Ocean Cover', imageUrl: '../img/dog_food/PETClub_wellness_dog_ocean_cover.jpg', price:'2.3' },
{ id: 36, name: 'Wellness Dog Reduced Fat Cover', imageUrl: '../img/dog_food/PETClub_wellness_dog_reduced_fat_cover.jpg', price:'2.3' },
{ id: 37, name: 'Doggyman Rubber Cover', imageUrl: '../img/dog_other/PETClub_doggyman_rubber1_cover.jpg', price:'2.3' },
{ id: 38, name: 'Nina Puppytornado Cover', imageUrl: '../img/dog_other/PETClub_nina_puppytornado_cover.jpg', price:'2.3' },
{ id: 39, name: 'Outwardhound Balls Small', imageUrl: '../img/dog_other/PETClub_outwardhound_balls_sm_1.jpg', price:'2.3' },
{ id: 40, name: 'Pando Airdried Cover', imageUrl: '../img/dog_other/PETClub_pando_airdried_cover.jpg', price:'2.3' },
{ id: 41, name: 'Ruffwear Frontrange Collar', imageUrl: '../img/dog_other/petclub_ruffwear_frontrange_collar_4.jpg', price:'2.3' },
{ id: 42, name: 'Ruff Cover New', imageUrl: '../img/dog_other/PETClub_Shopee_ruff_cover_neww.jpg', price:'2.3' },
{ id: 43, name: 'Ruff Crag', imageUrl: '../img/dog_other/PETClub_Shopee_ruff_crag_0.jpg', price:'2.3' },

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
