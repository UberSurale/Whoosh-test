import React from "react";
import Header from '../header/header';
import Footer from "../footer/footer";
import "./style.css";
import MainPage from "../../pages/main-page/main-page";

// Обёртка для контента страниц
function PageWrapper( {...prop} ) {
    return (
        <>
            <Header/>
            <main className="page-wrapper__main">
                <MainPage {...prop} />
            </main>
            <Footer />
        </>
    );
}

export default PageWrapper;
