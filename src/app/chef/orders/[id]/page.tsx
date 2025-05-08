'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

interface OrderItem {
    menuItemId: number;
    quantity: number;
}

interface Order {
    cart: OrderItem[];
    restuarantId: number;
}

export default function OrderDetailPage() {
    const { id } = useParams();
    const [order, setOrder] = useState<Order | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://private-be684-pizzaapp.apiary-mock.com/orders/${id}`)
            .then(res => res.json())
            .then(data => {
                setOrder(data);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p>Đang tải đơn hàng #{id}...</p>;

    if (!order) return <p>Không tìm thấy đơn hàng.</p>;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Đơn hàng #{id}</h1>
            <p>Nhà hàng: {order.restuarantId}</p>
            <h2 className="text-xl mt-4 mb-2">Món đã đặt:</h2>
            <ul className="list-disc pl-5">
                {order.cart.map((item, index) => (
                    <li key={index}>
                        Món ID: {item.menuItemId} – Số lượng: {item.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
}
