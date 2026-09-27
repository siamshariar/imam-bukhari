import Header from "./Header";
// import Footer from "./Footer";
import FooterTwo from "./FooterTwo";
import { useMenu } from "../../context/MenuContext";

export default function Layout({ children, logo }) {
  const { menuItems } = useMenu();
  return (
    <>
      <Header menuItems={menuItems} logo={logo}/>
      <main id="viewport" className="viewport">
        {children}
        {/* <Footer /> */}
        <FooterTwo />
      </main>
    </>
  );
}
