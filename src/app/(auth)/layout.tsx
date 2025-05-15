import '@/styles/main.scss';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-auth">
            {children}
        </div>
    );
}
