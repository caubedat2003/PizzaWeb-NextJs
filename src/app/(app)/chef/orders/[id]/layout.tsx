export default function DetailsLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Chi tiết đơn hàng</h1>
            {children}
        </div>
    );
}