import {FC, useEffect, useRef} from "react";
import LoginHeader from "./loginComponents/LoginHeader";
import LoginForm from "./loginComponents/LoginForm";
import LoginAppInfo from "./loginComponents/LoginAppInfo";
import LoginFooter from "./loginComponents/LoginFooter";
import "./login.css";
import {Box, Container} from "@mantine/core";

const Login: FC = () => {
    const contentBlockAuthRef = useRef<HTMLDivElement | null>(null);
    const logoRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const contentBlockAuth = contentBlockAuthRef.current;
        const contentBlockAuthArray = contentBlockAuth ? Array.from(contentBlockAuth.childNodes) : [];

        // Создаем клон элемента без дочерних элементов
        const clonedContentBlockAuth = contentBlockAuth ? contentBlockAuth.cloneNode(false) : null;

        // Клонируем дочерние элементы и добавляем их к клонированному элементу
        if (clonedContentBlockAuth) {
            contentBlockAuthArray.forEach((el: Node) => {
                clonedContentBlockAuth.appendChild(el.cloneNode(true));
            });
        }

        const handleResize = () => {
            const windowWidth = window.innerWidth;
            const content = document.getElementById('main-content');
            const contentBlockAuthInner = document.getElementById('content-block-auth');

            if (windowWidth <= 720) {
                const contentArray = content ? Array.from(content.childNodes) : [];

                if (contentBlockAuthInner) {
                    content?.removeChild(contentBlockAuthInner);
                }
                contentBlockAuthArray.forEach((el: ChildNode) => {
                    if (!contentArray.includes(el)) {
                        content?.appendChild(el);
                    }
                });
            } else {
                const contentArray = content ? Array.from(content.childNodes) : [];

                contentBlockAuthArray.forEach((el: ChildNode) => {
                    if (contentArray.includes(el)) {
                        content?.removeChild(el);
                    }
                });
                if (!contentBlockAuthInner && clonedContentBlockAuth) {
                    content?.insertBefore(clonedContentBlockAuth.cloneNode(true), content.firstChild);
                }
            }
        };

        const logo = logoRef.current;
        const container = containerRef.current;

        if (logo && container) {
            setTimeout(function () {
                logo.style.transform = 'translateY(0)';
                container.style.opacity = '1';
            }, 3000);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div className="container" ref={containerRef}>
            <LoginHeader />
            <Container size="xl" id="main-content" className="content" mt={20}>
                <LoginForm />
                <LoginAppInfo />
            </Container>
            <LoginFooter />
        </div>
    );
}

export default Login;