import style from '@/app/components/layout customer/HeaderCustomer.module.scss'

export default function HeaderCustomer() {
    return (
        <div className="">
            <div className={style['header-gradient-pink']}>
                <div>

                </div>
                <div className="min-w-0 flex-1">
                    <h1 className={style['h1-text']}>Pizza Shop</h1>
                    <p className={style['p-text']}>Khách hàng</p>
                </div>

                <div className="flex space-x-3">
                    <a href="/login" type="button" className={style['btn-black']}>
                        Đăng nhập
                    </a>
                    <a href="/register" type="button" className={style['btn-transparent']}>
                        Đăng ký
                    </a>
                </div>
            </div>
        </div>
    );
}