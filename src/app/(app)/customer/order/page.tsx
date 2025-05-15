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

interface CartItem {
    menuItemId: number;
    quantity: number;
}

export default function OrderPage() {
    const [menu, setMenu] = useState<Pizza[]>([]);
    const [cart, setCart] = useState<Record<number, number>>({});
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');

    // Lấy danh sách menu
    useEffect(() => {
        fetch('https://private-anon-03d95d7459-pizzaapp.apiary-mock.com/restaurants/restaurantId/menu?category=Pizza&orderBy=rank')
            .then(res => res.json())
            .then(data => {
                setMenu(data);
                setLoading(false);
            });
    }, []);

    const updateQuantity = (id: number, delta: number) => {
        setCart((prev) => {
            const newQty = Math.max((prev[id] || 0) + delta, 0);
            const updated = { ...prev };
            if (newQty === 0) {
                delete updated[id];
            } else {
                updated[id] = newQty;
            }
            return updated;
        });
    };

    const handleSubmit = async () => {
        const cartItems: CartItem[] = Object.entries(cart).map(([menuItemId, quantity]) => ({
            menuItemId: parseInt(menuItemId),
            quantity,
        }));

        if (cartItems.length === 0) {
            setMessage('Bạn chưa chọn món nào!');
            return;
        }

        const payload = {
            cart: cartItems,
            restuarantId: 1,
        };

        const response = await fetch('https://private-be684-pizzaapp.apiary-mock.com/orders/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            setMessage('Đơn hàng đã được gửi thành công!');
            setCart({});
        } else {
            setMessage('Có lỗi xảy ra khi gửi đơn hàng.');
        }
    };

    if (loading) return <p>Đang tải menu...</p>;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Chọn món</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {menu.map((pizza) => (
                    <div key={pizza.id} className="border p-4 rounded shadow">
                        <h2 className="text-xl font-semibold">{pizza.name}</h2>
                        <p className="text-sm text-gray-600">
                            {(pizza.topping ?? []).join(', ')}
                        </p>
                        <p className="mt-2 font-bold">{pizza.price} USD</p>
                        <div className="flex items-center mt-2 gap-2">
                            <button onClick={() => updateQuantity(pizza.id, -1)} className="px-2 bg-gray-300 rounded">−</button>
                            <span>{cart[pizza.id] || 0}</span>
                            <button onClick={() => updateQuantity(pizza.id, 1)} className="px-2 bg-gray-300 rounded">+</button>
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={handleSubmit}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
                Gửi đơn hàng
            </button>

            {message && <p className="mt-4 text-lg font-medium">{message}</p>}
        </div>
    );
}
