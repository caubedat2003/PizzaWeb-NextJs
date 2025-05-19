'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import '@/styles/css/chef/sidebar-chef.css';

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
                        <Link href="/chef/orders" className="menu-tab">Đơn hàng</Link>
                        <Link href="/chef/profile" className="menu-tab">Tài khoản</Link>
                    </>
                )}
            </nav>
        </div>
    );
}
