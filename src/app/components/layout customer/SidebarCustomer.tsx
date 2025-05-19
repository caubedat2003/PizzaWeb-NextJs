'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import '@/styles/css/customer/sidebar-cus.css';

export default function Sidebar() {
    const [open, setOpen] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setOpen(false);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={`background ${open ? 'w-[250px]' : 'w-[60px]'}`}>
            <button className="btn-open" onClick={() => setOpen(!open)}>
                ☰
            </button>
            <nav className="nav">
                {open && (
                    <>
                        <Link href="/customer/menu" className="menu-tab">Menu</Link>
                        <Link href="/customer/order" className="menu-tab">Gọi món</Link>
                        <Link href="/customer/pizza" className="menu-tab">Giới thiệu</Link>
                    </>
                )}
            </nav>
        </div>
    );
}
