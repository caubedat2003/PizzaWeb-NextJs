export default function ChefLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <div className="flex items-center justify-between px-4 py-6 bg-blue-50 shadow-sm">
                <div className="min-w-0 flex-1">
                    <h1 className="text-3xl font-bold text-gray-900">Pizza Shop</h1>
                    <p className="mt-1 text-sm text-gray-500">Đầu bếp</p>
                </div>

                <div className="flex space-x-3">
                    <a href="/chef/orders" type="button" className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                        Xem đơn hàng
                    </a>
                </div>
            </div>
            <main className="p-4"> {children}</main>
        </div>
    );
}
