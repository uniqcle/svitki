import {
    LuHouse,
    LuSearch,
    LuHeadphones,
    LuBookmark,
    LuBookOpen,
} from "react-icons/lu";

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div>
                    <div className="is-active">
                        <LuHouse />
                        <span>Главная</span>
                    </div>
                </div>
                <div>
                    <LuBookOpen />
                    <span>Сочинения</span>
                </div>
                <div>
                    <LuSearch />
                    <span>Авторы</span>
                </div>
                <div>
                    <LuHeadphones />
                    <span>Аудиокниги</span>
                </div>
                <div>
                    <LuBookmark />
                    <span>Мои свитки</span>
                </div>
                {/* <div>
                        <LuUser />
                        <span>Профиль</span>
                    </div> */}
            </div>
        </footer>
    );
}
