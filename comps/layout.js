
import Navbar from "./navbar";
import Footer from '../comps/footer'

const Layout = ({ children }) => {
    return ( 
        <div className="content">
            <Navbar />
            {children }
            <Footer />
        </div>
    )}
 
export default Layout;