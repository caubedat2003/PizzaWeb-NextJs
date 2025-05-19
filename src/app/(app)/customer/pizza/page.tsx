import '@/styles/css/customer/pizza.css';

export default function Pizza() {
    return (
        <div className="container">
            <section className="container-pizza">
                <div>
                    <img className="img-container" alt="Pizza"
                        src="https://product.hstatic.net/1000389344/product/hawaiian__2_43392427a44c472083c9a9f7a22cca43_master.png"></img>
                </div>
                <div>
                    <h1 className="h1-text">Pizza</h1>
                    <p>Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients
                        (such as anchovies, mushrooms, olives, vegetables, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven.
                    </p>
                </div>
            </section>
        </div>

    );
}