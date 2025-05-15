'use client';

import Link from 'next/link';

export default function OrdersListPage() {
    const mockOrderIds = [1, 2, 3];

    return (
        <div className="h-full">
            <h1 className="text-2xl font-bold mb-4">Đơn hàng mới</h1>
            <ul className="space-y-2">
                {mockOrderIds.map((id) => (
                    <li key={id}>
                        <Link href={`/chef/orders/${id}`} className="text-blue-600 underline">
                            Xem đơn hàng #{id}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
