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


const articlesContainer = document.getElementById('dynamic-articles-container');

articlesData.forEach(article => {
    
    const articleCard = document.createElement('article');
    articleCard.className = 'article-card';

    articleCard.innerHTML = `
        <h3>${article.name}</h3>
        <p>${article.description}</p>
    `;

    articlesContainer.appendChild(articleCard);
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