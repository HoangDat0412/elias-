import Header from "./Header";
import './DefaultLayout.scss'

import Footer from "./Footer";
function DefaultLayout({ children}) {
    return ( 
        <div >
            <Header></Header>

            <div className="content container-xl container-fluid">
               {children}
            </div>

            <Footer></Footer>

        </div>
     );
}

export default DefaultLayout;