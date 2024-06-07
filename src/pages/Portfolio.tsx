
import Header from "../components/Header";
import Banner from "../components/Banner";
import Content from "../components/Content";
import Footer from "../components/Footer";

function Protfolio() {
    const title = "作品集"
    document.title = title
    return (
        <>
            <Header title={title} />
            <Banner />
            <Content />
            <Footer />
        </>
    );
}

export default Protfolio;
