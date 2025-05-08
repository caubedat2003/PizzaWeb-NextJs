export default function DetailsLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-6 bg-orange-500 bg-opacity-60">Chi tiết đơn hàng</h1>
            {children}
        </div>
    );
}