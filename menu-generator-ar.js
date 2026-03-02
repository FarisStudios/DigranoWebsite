/* ========= Arabic Menu Generator ========= */

// Create product card from template (Arabic version)
function createProductCard(product, category) {
    const card = document.createElement('div');
    card.className = 'collection-item menu-item';
    
    // Build price section based on category
    const priceHTML = category === 'pizza' 
        ? createPizzaPriceHTML(product)
        : createSinglePriceHTML(product);
    
    // Build availability overlay (Arabic text)
    const overlayHTML = !product.available 
        ? '<div class="menu-item-overlay"><span class="menu-item-overlay-text">غير متاح حاليا</span></div>'
        : '';
    
    card.innerHTML = `
        <div class="div-block-17">
            <div class="div-block-24">
                <img src="${product.image}" 
                     alt="${product.nameArabic}" 
                     class="image-2" />
                ${overlayHTML}
            </div>
            <div class="div-block-11">
                <h1 class="heading-5">${product.nameArabic}</h1>
                ${product.ingredientsArabic ? `<p class="paragraph-2">${product.ingredientsArabic}</p>` : ''}
            </div>
            ${priceHTML}
        </div>
    `;
    
    return card;
}

// Create pizza price HTML — three side-by-side chips, label on top · price below (Arabic)
function createPizzaPriceHTML(product) {
    return `
        <div class="div-block-10 pizza-price-block">
            <div class="price-chip">
                <div class="chip-label ">كلاسيكو</div>
                <div class="chip-amount">
                    <span class="number-price-tag">${product.priceClassico}</span>
                    <span class="egp-price-tag">EGP</span>
                </div>
            </div>
            <div class="price-chip combo-chip">
                <div class="chip-label">كلاسيكو<br>+ سلطة</div>
                <div class="chip-amount">
                    <span class="number-price-tag">${product.priceClassicoCombo}</span>
                    <span class="egp-price-tag">EGP</span>
                </div>
            </div>
            <div class="price-chip">
                <div class="chip-label">جراندي</div>
                <div class="chip-amount">
                    <span class="number-price-tag">${product.priceGrande}</span>
                    <span class="egp-price-tag">EGP</span>
                </div>
            </div>
        </div>
    `;
}

// Create single price HTML
function createSinglePriceHTML(product) {
    return `
        <div class="div-block-10">
            <div class="div-block-12">
                <div class="number-price-tag">${product.price}</div>
                <div class="egp-price-tag">EGP</div>
            </div>
        </div>
    `;
}

// Render products for a category
function renderCategory(category) {
    const products = menuProducts[category];
    if (!products) return;
    
    const section = getCategorySection(category);
    if (!section) return;
    
    const grid = section.querySelector('.menu-list');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    products.forEach(product => {
        const card = createProductCard(product, category);
        grid.appendChild(card);
    });
}

// Get section element for category
function getCategorySection(category) {
    const sectionMap = {
        'pizza': '.menupizzasection',
        'pasta': '.menupastasection',
        'salads': '.menusaladsection',
        'soup': '.menusoupssection',
        'beverages': '.menubeveragessection'
    };
    
    return document.querySelector(sectionMap[category]);
}

// Initialize all categories
function renderAllCategories() {
    Object.keys(menuProducts).forEach(category => {
        renderCategory(category);
    });
}

// Filter functionality
function initMenuFilter() {
    const filterButtons = document.querySelectorAll('.button-3');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            const href = button.getAttribute('href');
            const category = extractCategoryFromHref(href);
            
            filterButtons.forEach(btn => btn.classList.remove('active-filter'));
            button.classList.add('active-filter');
            
            filterProducts(category);
        });
    });
    
    filterProducts('pizza');
}

function extractCategoryFromHref(href) {
    if (href.includes('Pizza')) return 'pizza';
    if (href.includes('Pasta')) return 'pasta';
    if (href.includes('Salad')) return 'salads';
    if (href.includes('Soups')) return 'soup';
    if (href.includes('Beverages')) return 'beverages';
    return 'pizza';
}

function filterProducts(category) {
    const sections = document.querySelectorAll(
        '.menupizzasection, .menupastasection, .menusaladsection, .menusoupssection, .menubeveragessection'
    );
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    const targetSection = getCategorySection(category);
    
    if (targetSection) {
        targetSection.style.display = 'flex';
        targetSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
    
    const count = menuProducts[category]?.length || 0;
    const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
    console.log(`عرض ${count} عنصر من ${categoryName}`);
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    renderAllCategories();
    initMenuFilter();
});