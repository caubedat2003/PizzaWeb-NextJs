export default function Pizza() {
    return (
        <section className="grid gap-8 md:grid-cols-2 md:items-center md:text-left text-center">
            <div>
                <img className="w-full rounded-lg" alt="Pizza"
                    src="https://product.hstatic.net/1000389344/product/hawaiian__2_43392427a44c472083c9a9f7a22cca43_master.png"></img>
            </div>
            <div>
                <h1 className="text-4xl text-bold font-medium mb-2">Pizza</h1>
                <p>Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients
                    (such as anchovies, mushrooms, olives, vegetables, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven.
                </p>
            </div>
        </section>
    );
}