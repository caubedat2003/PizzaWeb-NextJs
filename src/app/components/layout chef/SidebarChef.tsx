'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './SidebarChef.module.scss';

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
        <div className={`${styles.sidebar} ${open ? styles.open : styles.closed}`}>
            <button className={styles.toggleBtn} onClick={() => setOpen(!open)}>
                ☰
            </button>
            <nav className={styles.nav}>
                <Link href="/chef/orders" className={styles['menu-tab']}>Đơn hàng</Link>
                <Link href="/customer/profile" className={styles['menu-tab']}>Tài khoản</Link>
            </nav>
        </div>
    );
}
