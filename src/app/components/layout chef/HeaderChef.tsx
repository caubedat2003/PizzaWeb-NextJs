import '@/styles/css/chef/header-chef.css';

export default function ChefLayout() {
    return (
        <div>
            <div className="header-gradient-blue">
                <div className="min-w-0 flex-1">
                    <h1 className="h1-text">Pizza Shop</h1>
                    <p className="p-text">Đầu bếp</p>
                </div>

                <div className="btn-group">
                    <a href="/login" type="button" className="btn-black">
                        Đăng nhập
                    </a>
                    <a href="/register" type="button" className="btn-transparent">
                        Đăng ký
                    </a>
                </div>
            </div>
        </div>
    );
}