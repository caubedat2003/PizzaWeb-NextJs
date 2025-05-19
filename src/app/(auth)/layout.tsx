import '@/styles/css/auth.css'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-auth">
            {children}
        </div>
    );
}
