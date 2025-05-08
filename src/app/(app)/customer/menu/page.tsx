'use client';

import { useEffect, useState } from 'react';

interface Pizza {
    id: number;
    category: string;
    name: string;
    topping: string[];
    price: number;
    rank: number;
}

export default function MenuPage() {
    const [menu, setMenu] = useState<Pizza[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://private-anon-03d95d7459-pizzaapp.apiary-mock.com/restaurants/1/menu?category=Pizza&orderBy=rank')
            .then(res => res.json())
            .then(data => {
                setMenu(data);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Đang tải menu...</p>;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Thực đơn Pizza</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {menu.map((pizza) => (
                    <div key={pizza.id} className="border p-4 rounded shadow">
                        <h2 className="text-xl font-semibold">{pizza.name}</h2>
                        <p className="text-sm text-gray-600">
                            {(pizza.topping ?? []).join(', ')}
                        </p>
                        <p className="font-bold mt-2">{pizza.price} SEK</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
