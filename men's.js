document.addEventListener('DOMContentLoaded', function () {
    const mensProductsData = [
        { id: 10, name: 'LeBron James Jersey', price: 80.99, image: '/img/lakersjersey.png', description: 'Rep your favorite team with our stylish basketball jerseys. Made from breathable fabric for a comfortable fit on and off the court.' },
        { id: 11, name: 'Trae Young Jersey', price: 69.99, image: '/img/atlantahawksjersey.png', description: 'Rep your favorite team with our stylish basketball jerseys. Made from breathable fabric for a comfortable fit on and off the court.' },
        { id: 12, name: 'Luka Doncic Jersey', price: 78.99, image: '/img/dallasmavsjersey.jpg', description: 'Rep your favorite team with our stylish basketball jerseys. Made from breathable fabric for a comfortable fit on and off the court.' },
        { id: 13, name: 'Russell Westbrook Jersey', price: 120.99, image: '/img/laclippersrussellwestbrook.jpg', description: 'Rep your favorite team with our stylish basketball jerseys. Made from breathable fabric for a comfortable fit on and off the court.' },
        { id: 14, name: 'DeMar Derozan Jersey', price: 94.99, image: '/img/demarderozan.jpg', description: 'Rep your favorite team with our stylish basketball jerseys. Made from breathable fabric for a comfortable fit on and off the court.' },
        { id: 15, name: 'Shai Gilgeous-Alexander Jersey', price: 119.99, image: '/img/shaijersey.jpg', description: 'Rep your favorite team with our stylish basketball jerseys. Made from breathable fabric for a comfortable fit on and off the court.' },
        { id: 16, name: 'James Harden Jersey', price: 45.99, image: '/img/jamesharden.jpg', description: 'Rep your favorite team with our stylish basketball jerseys. Made from breathable fabric for a comfortable fit on and off the court.' },
        { id: 17, name: 'Kevin Durant Jersey', price: 49.99, image: '/img/kd.jpg', description: 'Rep your favorite team with our stylish basketball jerseys. Made from breathable fabric for a comfortable fit on and off the court.' },
        { id: 18, name: 'Kyrie Irving Jersey', price: 55.99, image: '/img/kyrieirving.jpg', description: 'Rep your favorite team with our stylish basketball jerseys. Made from breathable fabric for a comfortable fit on and off the court.' },
        { id: 19, name: 'Joel Embiid Jersey City Edition', price: 59.99, image: '/img/joelembiid.jpg', description: 'Rep your favorite team with our stylish basketball jerseys. Made from breathable fabric for a comfortable fit on and off the court.' },
        { id: 20, name: 'Lamello Ball Jersey', price: 90.99, image: '/img/lamelo.jpg', description: 'Rep your favorite team with our stylish basketball jerseys. Made from breathable fabric for a comfortable fit on and off the court.' },
        { id: 21, name: 'Giannis Antetokounmpo Jersey Icon Edition', price: 60.99, image: '/img/giannis.jpg', description: 'Rep your favorite team with our stylish basketball jerseys. Made from breathable fabric for a comfortable fit on and off the court.' },
        // Add more men's products as needed
    ];

    function createMensProductCard(product) {
        const card = document.createElement('div');
        card.classList.add('sh-m-featured-product'); // Corrected class name

        const image = document.createElement('img');
        image.src = product.image;
        image.alt = product.name;

        const body = document.createElement('div');
        body.classList.add('sh-m-featured-product-body'); // Corrected class name

        const title = document.createElement('h3');
        title.textContent = product.name;

        const description = document.createElement('p');
        description.textContent = product.description;

        const price = document.createElement('p');
        price.textContent = `$${product.price.toFixed(2)}`;

        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Add to Cart';
        addToCartButton.onclick = function () {
            addToCart(product.id);
        };

        const viewDetailsButton = document.createElement('button');
        viewDetailsButton.textContent = 'View Details';
        viewDetailsButton.onclick = function () {
            showProductModal(product.id);
        };

        body.appendChild(title);
        body.appendChild(description);
        body.appendChild(price);
        body.appendChild(addToCartButton);
        body.appendChild(viewDetailsButton);

        card.appendChild(image);
        card.appendChild(body);

        return card;
    }

    function displayMensProducts() {
        const mensProductsContainer = document.getElementById('mensProducts'); // Corrected ID

        mensProductsData.forEach(function (product) {
            const card = createMensProductCard(product);
            mensProductsContainer.appendChild(card);
        });
    }

    displayMensProducts();
});
