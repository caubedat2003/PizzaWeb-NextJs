import SidebarCustomer from "@/app/components/layout customer/SidebarCustomer";
import HeaderCustomer from "@/app/components/layout customer/HeaderCustomer";

export default function CustomerLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <HeaderCustomer />
            <div className="flex flex-1">
                <SidebarCustomer />

                <main className="flex-1 p-4">
                    {/* <CustomerMain> layout de dieu chinh responsive */}
                    {children}
                    {/* </CustomerMain> */}
                    {/* viet css thanh cac file rieng cho tung chuc nang dung @apply tailwind */}
                </main>
            </div>
        </div>

    );
}