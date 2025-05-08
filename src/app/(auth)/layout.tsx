// app/(auth)/layout.tsx
export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#fff1be] via-[#f2a4c6] to-[#d779da] flex items-center justify-center">
            {children}
        </div>
    );
}
