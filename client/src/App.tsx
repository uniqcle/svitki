import "./index.css"; // Tailwind + сбросы
//import "./styles/reset.css";
import "./styles/styles.css";
import "./styles/media.css";

import { Button } from "@/components/ui/button";

function App() {
    return (
        <div className="app-container">
            <header className="header">
                <div className="logo">
                    <div>Свитки из Александрии</div>
                    <div>Античная философия</div>
                </div>
                <div className="menu">Menu</div>
                <div className="mobile_menu">mobile</div>
            </header>

            <aside className="left-sidebar">Левый сайдбар</aside>

            <main className="main">
                <div className="main-container">
                    <div className="main-content">
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
