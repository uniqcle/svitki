import { Button } from "@/components/ui/button";
import logo from "@/assets/images/logo/logo.jpg";

function App() {
    return (
        <div className="app-container">
            <header className="header">
                <div className="logo">
                    <div className="logo-block">
                        <img src={logo} className="logo-image" alt="Логотип" />
                    </div>
                    <div>
                        <div className="main-logo text-4xl">
                            Свитки из Александрии
                        </div>
                        <div className="sub-logo text-2xl">
                            <span> Античная философия</span>
                        </div>
                    </div>
                </div>

                <div className="menu">Menu</div>
                <div className="mobile_menu">mobile</div>
            </header>

            <aside className="left-sidebar">Левый сайдбар</aside>

            <main className="main">
                <div className="main-container">
                    <div className="main-content typeset typeset-docs max-w-[37em]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusantium fugiat maiores, odit eius velit asperiores
                        esse. Natus provident aspernatur in, dignissimos
                        voluptate quia sint soluta eius deleniti. Odit,
                        blanditiis praesentium. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Accusantium fugiat
                        maiores, odit eius velit asperiores esse. Natus
                        provident aspernatur in, dignissimos voluptate quia sint
                        soluta eius deleniti. Odit, blanditiis praesentium.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusantium fugiat maiores, odit eius velit asperiores
                        esse. Natus provident aspernatur in, dignissimos
                        voluptate quia sint soluta eius deleniti. Odit,
                        blanditiis praesentium. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Accusantium fugiat
                        maiores, odit eius velit asperiores esse. Natus
                        provident aspernatur in, dignissimos voluptate quia sint
                        soluta eius deleniti. Odit, blanditiis praesentium.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusantium fugiat maiores, odit eius velit asperiores
                        esse. Natus provident aspernatur in, dignissimos
                        voluptate quia sint soluta eius deleniti. Odit,
                        blanditiis praesentium. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Accusantium fugiat
                        maiores, odit eius velit asperiores esse. Natus
                        provident aspernatur in, dignissimos voluptate quia sint
                        soluta eius deleniti. Odit, blanditiis praesentium.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusantium fugiat maiores, odit eius velit asperiores
                        esse. Natus provident aspernatur in, dignissimos
                        voluptate quia sint soluta eius deleniti. Odit,
                        blanditiis praesentium. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Accusantium fugiat
                        maiores, odit eius velit asperiores esse. Natus
                        provident aspernatur in, dignissimos voluptate quia sint
                        soluta eius deleniti. Odit, blanditiis praesentium.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusantium fugiat maiores, odit eius velit asperiores
                        esse. Natus provident aspernatur in, dignissimos
                        voluptate quia sint soluta eius deleniti. Odit,
                        blanditiis praesentium. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Accusantium fugiat
                        maiores, odit eius velit asperiores esse. Natus
                        provident aspernatur in, dignissimos voluptate quia sint
                        soluta eius deleniti. Odit, blanditiis praesentium.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusantium fugiat maiores, odit eius velit asperiores
                        esse. Natus provident aspernatur in, dignissimos
                        voluptate quia sint soluta eius deleniti. Odit,
                        blanditiis praesentium. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Accusantium fugiat
                        maiores, odit eius velit asperiores esse. Natus
                        provident aspernatur in, dignissimos voluptate quia sint
                        soluta eius deleniti. Odit, blanditiis praesentium.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusantium fugiat maiores, odit eius velit asperiores
                        esse. Natus provident aspernatur in, dignissimos
                        voluptate quia sint soluta eius deleniti. Odit,
                        blanditiis praesentium.
                    </div>

                    <div className="main-pagination">
                        Pagination
                        <Button>Нажми меня</Button>
                    </div>
                </div>
            </main>

            <aside className="right-sidebar">Правый сайдбар</aside>

            <footer className="footer">Футер (копирайт)</footer>
        </div>
    );
}
export default App;
