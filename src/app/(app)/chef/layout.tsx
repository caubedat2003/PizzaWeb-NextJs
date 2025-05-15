import HeaderChef from "@/app/components/layout chef/HeaderChef";
import SidebarChef from "@/app/components/layout chef/SidebarChef";

export default function ChefLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <HeaderChef />
            <div className="flex flex-1">
                <SidebarChef />

                <main className="flex-1 p-4">
                    {children}
                </main>
            </div>
        </div>
    );
}
