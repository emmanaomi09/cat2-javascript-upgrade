const articlesData = [
    {
        name: "The Art of Writing",
        description: "Discover the secrets to crafting compelling stories and engaging content in our latest article on the art of writing."
    },
    {
        name: "Exploring Creativity",
        description: "Dive into the world of creativity and learn how to unlock your creative potential with our insightful article."
    },
    {
        name: "The Future of Publishing",
        description: "Explore the evolving landscape of publishing and how technology is shaping the way we consume content."
    },
    {
        name: "Writing for Change",
        description: "Learn how writers can use their craft to advocate for social change and make a difference in the world."
    }
];

// ==========================================
// FEATURE 2 & 4: Wishlist with localStorage Persistence
// ==========================================
const wishlistInput = document.getElementById('wishlist-input');
const wishlistAddBtn = document.getElementById('wishlist-add-btn');
const wishlistUl = document.getElementById('wishlist-ul');

// 1. Load existing items from localStorage on page load
let savedWishlist = JSON.parse(localStorage.getItem('myWishlist')) || [];

// 2. Render those saved items immediately
savedWishlist.forEach(itemText => {
    renderItemToDOM(itemText);
});

// Helper function to handle DOM creation and insertion
function renderItemToDOM(text) {
    const li = document.createElement('li');
    li.className = 'wishlist-item';
    li.style.display = 'flex';
    li.style.justifyContent = 'space-between';
    li.style.padding = '8px';
    li.style.borderBottom = '1px solid #eee';

    const textSpan = document.createElement('span');
    textSpan.textContent = text;
    li.appendChild(textSpan);

    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.style.cursor = 'pointer';
    
    // Remove button click handler
    removeBtn.addEventListener('click', () => {
        li.remove();
        // Update our array and save the new state to localStorage
        savedWishlist = savedWishlist.filter(item => item !== text);
        localStorage.setItem('myWishlist', JSON.stringify(savedWishlist));
    });

    li.appendChild(removeBtn);
    wishlistUl.appendChild(li);
}

// 3. Event handler for adding new items
wishlistAddBtn.addEventListener('click', () => {
    const textValue = wishlistInput.value.trim();
    
    if (textValue !== "") {
        // Add to DOM
        renderItemToDOM(textValue);
        
        // Push to local array and save to localStorage
        savedWishlist.push(textValue);
        localStorage.setItem('myWishlist', JSON.stringify(savedWishlist));
        
        // Clear input field
        wishlistInput.value = '';
    }
});

// Wishlist functionality   
const wishlistInput = document.getElementById('wishlist-input');
const wishlistAddBtn = document.getElementById('wishlist-add-btn');
const wishlistUl = document.getElementById('wishlist-ul');


wishlistAddBtn.addEventListener('click', () => {
    const itemText = wishlistInput.value.trim();

    
    if (itemText === "") {
        alert("Please type a book title before adding!");
        return;
    }

    
    const li = document.createElement('li');
    li.className = 'wishlist-item';
    li.style.display = 'flex';
    li.style.justifyContent = 'space-between';
    li.style.alignItems = 'center';
    li.style.padding = '8px';
    li.style.borderBottom = '1px solid #eee';
    li.style.maxWidth = '400px';


    const textSpan = document.createElement('span');
    textSpan.textContent = itemText;
    li.appendChild(textSpan);

   
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "❌ Remove";
    removeBtn.style.marginLeft = '10px';
    removeBtn.style.cursor = 'pointer';
    removeBtn.style.backgroundColor = '#ffecec';
    removeBtn.style.border = '1px solid #ffcccc';
    removeBtn.style.borderRadius = '3px';
    removeBtn.style.padding = '3px 8px';

    removeBtn.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(removeBtn);
    wishlistUl.appendChild(li);

    wishlistInput.value = "";
});

// Contact form validation
const contactForm = document.getElementById('contact-form');
const contactName = document.getElementById('contact-name');
const contactEmail = document.getElementById('contact-email');
const contactMessage = document.getElementById('contact-message');
const formFeedback = document.getElementById('form-feedback');

if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', (event) => {
        
        event.preventDefault();

        
        const nameValue = contactName.value.trim();
        const emailValue = contactEmail.value.trim();
        const messageValue = contactMessage.value.trim();

        
        if (nameValue === "" || emailValue === "" || messageValue === "") {
            formFeedback.textContent = " Error: All fields are required before sending.";
            formFeedback.style.color = "red";
            return; 
        }

        // 4. Evaluation Check B: Is it a syntactically realistic email?
        if (!emailValue.includes('@') || !emailValue.includes('.')) {
            formFeedback.textContent = " Error: Please enter a valid email address containing an '@' and a domain extension (e.g. .com).";
            formFeedback.style.color = "red";
            return; 
        }

        
        formFeedback.textContent = `Thank you, ${nameValue}! Your message has been sent to Pen & Post successfully. ✨`;
        formFeedback.style.color = "green";

        
        contactForm.reset();
    });
    console.log(" Feature 3: Form validation handler attached successfully.");
} else {
    console.error("Feature 3 Error: Form elements missing from HTML template.");
}

// Caption visibility styles (injected because this file is JS-only)
const captionStyle = document.createElement('style');
captionStyle.textContent = `
/* Hidden by default */
.hidden-caption {
    display: none;
    margin-top: 15px;
    padding: 10px;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 4px;
    border-left: 3px solid #fff;
    font-style: italic;
}

/* Revealed when clicked */
.show-caption {
    display: block;
}
`;
document.head.appendChild(captionStyle);
// Click event listener to toggle the classes we just injected
const bannerImg = document.getElementById('banner-img');
const bannerCaption = document.getElementById('banner-caption');

if (bannerImg && bannerCaption) {
    bannerImg.addEventListener('click', () => {
        bannerCaption.classList.toggle('show-caption');
        console.log("✅ Feature 5: Banner caption toggled successfully!");
    });
}

