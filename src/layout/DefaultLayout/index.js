import Header from "./Header";
import './DefaultLayout.scss'

import Footer from "./Footer";
import  className  from "classnames";
function DefaultLayout({ children}) {
    return ( 
        <div >
            <Header></Header>

            <div className={ className('content','container-xl',"container-fluid")}>
               {children}
            </div>

            <Footer></Footer>

        </div>
     );
}

export default DefaultLayout;