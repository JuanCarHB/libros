// Datos de los libros
const booksData = [
    {
        title: "Cien años de soledad",
        author: "Gabriel García Márquez",
        quote: "El secreto de una buena vejez no es otra cosa que un pacto honesto con la soledad.",
        review: "Cien años de soledad es una novela épica que narra la historia de la familia Buendía en el pueblo ficticio de Macondo. El libro mezcla realismo mágico y política, creando una narrativa profunda sobre el tiempo, el amor, y la fatalidad. La obra está llena de metáforas y simbolismos que invitan a reflexionar sobre la condición humana. Es una de las obras más influyentes del siglo XX.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_A7_86RDbMZ7y19pe1L_h9lD0hR7EsOdZyQ&s"
    },
    {
        title: "1984",
        author: "George Orwell",
        quote: "La libertad es la libertad de decir que dos y dos son cuatro. Si eso es concedido, todo lo demás sigue.",
        review: "1984 es una crítica brutal a los totalitarismos, donde Winston Smith lucha por encontrar la verdad en un mundo donde el estado lo controla todo. La novela explora el poder, la manipulación, y la opresión en una sociedad distópica. El gobierno del Gran Hermano está en todas partes, controlando pensamientos y acciones. Una obra aterradora que sigue siendo relevante hoy en día.",
        img: "https://2.bp.blogspot.com/-trdPWkJ6A6A/UgufOCfNDDI/AAAAAAAABeE/p-h81IEmleQ/s1600/1984_1.jpg"
    },
    {
        title: "Orgullo y prejuicio",
        author: "Jane Austen",
        quote: "Es una verdad universalmente aceptada que un hombre con fortuna debe estar en busca de esposa.",
        review: "Una novela clásica que examina los prejuicios y las expectativas sociales a través de la relación entre Elizabeth Bennet y el señor Darcy. A lo largo de la historia, los personajes evolucionan, enfrentando malentendidos y revelaciones que desafían sus creencias previas sobre el amor, la clase y el matrimonio.",
        img: "https://m.media-amazon.com/images/I/81RBELGte5L._AC_UF1000,1000_QL80_.jpg"
    }
];

// Función para mostrar los posts (libros)
function displayPosts() {
    const postsContainer = document.getElementById('posts');

    booksData.forEach(book => {
        const post = document.createElement('article');
        post.classList.add('post');

        post.innerHTML = `
            <img src="${book.img}" alt="${book.title}">
            <div class="post-content">
                <h2>${book.title}</h2>
                <p>${book.review}</p>
                <p class="quote">"${book.quote}"</p>
                <p class="author">- ${book.author}</p>
            </div>
        `;

        post.addEventListener('click', () => {
            // Cambiar el color de fondo cuando se hace clic
            document.querySelectorAll('.post').forEach(p => p.classList.remove('selected'));
            post.classList.add('selected');
        });

        postsContainer.appendChild(post);
    });
}

// Función para manejar la navegación
let currentIndex = 0;

function showPost(index) {
    const postsContainer = document.getElementById('posts');
    const posts = document.querySelectorAll('.post');
    
    if (index < 0) currentIndex = posts.length - 1;
    else if (index >= posts.length) currentIndex = 0;
    else currentIndex = index;
    
    postsContainer.style.transform = `translateX(-${currentIndex * 270}px)`;
}

// Funciones para manejar las flechas
document.getElementById('next').addEventListener('click', () => showPost(currentIndex + 1));
document.getElementById('prev').addEventListener('click', () => showPost(currentIndex - 1));

// Llamamos a la función para mostrar los posts cuando la página cargue
window.onload = () => {
    displayPosts();
    showPost(currentIndex); // Inicializar la vista
};

// Función para manejar el clic en los posts y cambiar su color
document.querySelectorAll('.post').forEach(post => {
    post.addEventListener('click', function() {
        // Quitar la clase 'selected' de todos los posts
        document.querySelectorAll('.post').forEach(p => p.classList.remove('selected'));

        // Agregar la clase 'selected' al post que fue clickeado
        post.classList.add('selected');
    });
});


