export default function CustomerLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <div className="">
                <div className="flex items-center justify-between px-4 py-6 shadow-sm bg-gradient-to-br from-[#fff1be] via-[#f2a4c6] to-[#d779da] text-white">
                    <div className="min-w-0 flex-1">
                        <h1 className="text-4xl font-bold text-gray-900">Pizza Shop</h1>
                        <p className="mt-1 text-sm text-gray-600">Khách hàng</p>
                    </div>

                    <div className="flex space-x-3">
                        <a href="/customer/menu" type="button" className="px-6 py-3 rounded-2xl shadow-md bg-transparent border border-white text-white font-semibold hover:bg-white hover:text-black transition">
                            Menu
                        </a>
                        <a href="/customer/order" type="button" className="px-6 py-3 rounded-2xl shadow-md bg-black text-white font-semibold hover:bg-white hover:text-black transition">
                            Gọi món
                        </a>
                    </div>
                </div>
            </div>
            <main className="p-4"> {children}</main>
        </div>

    );
}
