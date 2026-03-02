/* ========= Dynamic Menu Filter System ========= */

// Product data structure - you can expand this or load from JSON
const menuData = {
    pizza: [],
    pasta: [],
    salads: [],
    soup: [],
    beverages: []
};

function initMenuFilter() {
    const filterButtons = document.querySelectorAll('.button-3');
    const allMenuItems = document.querySelectorAll('.menu-item');
    
    // Build product data from existing HTML
    buildProductData(allMenuItems);
    
    // Set up filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Get category from href (e.g., #Menu-Pizza-Section -> pizza)
            const href = button.getAttribute('href');
            const category = extractCategoryFromHref(href);
            
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active-filter'));
            button.classList.add('active-filter');
            
            // Filter products
            filterProducts(category);
        });
    });
    
    // Show Pizza by default on page load
    filterProducts('pizza');
}

function buildProductData(menuItems) {
    menuItems.forEach(item => {
        const category = getCategoryFromItem(item);
        if (category) {
            const productData = extractProductData(item);
            if (!menuData[category]) {
                menuData[category] = [];
            }
            menuData[category].push(productData);
        }
    });
}

function getCategoryFromItem(item) {
    // Find which section this item belongs to
    const section = item.closest('section');
    if (!section) return null;
    
    const sectionId = section.id;
    if (sectionId.includes('Pizza')) return 'pizza';
    if (sectionId.includes('Pasta')) return 'pasta';
    if (sectionId.includes('Salad')) return 'salads';
    if (sectionId.includes('Soups')) return 'soup';
    if (sectionId.includes('Beverages')) return 'beverages';
    
    return null;
}

function extractProductData(item) {
    return {
        element: item.cloneNode(true),
        italianName: item.querySelector('.heading-5')?.textContent || '',
        englishName: item.querySelector('.eng-menu-name')?.textContent || '',
        description: item.querySelector('.paragraph-2')?.textContent || '',
        price: item.querySelector('.number-price-tag')?.textContent || '',
        image: item.querySelector('.image-2')?.src || '',
        available: !item.querySelector('.menu-item-overlay')
    };
}

function extractCategoryFromHref(href) {
    if (href.includes('Pizza')) return 'pizza';
    if (href.includes('Pasta')) return 'pasta';
    if (href.includes('Salad')) return 'salads';
    if (href.includes('Soups')) return 'soup';
    if (href.includes('Beverages')) return 'beverages';
    return 'pizza'; // default
}

function filterProducts(category) {
    // Hide all sections
    const sections = document.querySelectorAll('.menupizzasection, .menupastasection, .menusaladsection, .menusoupssection, .menubeveragessection');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Show the selected section
    let targetSection;
    switch(category) {
        case 'pizza':
            targetSection = document.querySelector('.menupizzasection');
            break;
        case 'pasta':
            targetSection = document.querySelector('.menupastasection');
            break;
        case 'salads':
            targetSection = document.querySelector('.menusaladsection');
            break;
        case 'soup':
            targetSection = document.querySelector('.menusoupssection');
            break;
        case 'beverages':
            targetSection = document.querySelector('.menubeveragessection');
            break;
    }
    
    if (targetSection) {
        targetSection.style.display = 'flex';
        
        // Smooth scroll to section
        targetSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
    
    // Update item count
    updateItemCount(category);
}

function updateItemCount(category) {
    const count = menuData[category]?.length || 0;
    const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
    
    // You can add a counter display if needed
    console.log(`Showing ${count} ${categoryName} items`);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initMenuFilter();
});