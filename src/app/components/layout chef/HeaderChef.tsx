import style from '@/app/components/layout chef/HeaderChef.module.scss';

export default function ChefLayout() {
    return (
        <div>
            <div className={style['header-blue']}>
                <div className="min-w-0 flex-1">
                    <h1 className={style['h1-text']}>Pizza Shop</h1>
                    <p className={style['p-text']}>Đầu bếp</p>
                </div>

                <div className="flex space-x-3">
                    <a href="/login" type="button" className={style['btn-black']}>
                        Đăng nhập
                    </a>
                    <a href="/register" type="button" className={style['btn-purple']}>
                        Đăng ký
                    </a>
                </div>
            </div>
        </div>
    );
}