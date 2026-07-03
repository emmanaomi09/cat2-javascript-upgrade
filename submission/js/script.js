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