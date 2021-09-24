import { Container, IconSignOut } from "./styles";
import Navbar from '../../components/NavBar';
import signOut from '../../global'
function Header() {

   
 

    return (
        <Container>
            {signOut && (<Navbar />)}
            <div>
               <p>The Buzzer</p>
            </div>
            {signOut && (<IconSignOut />)}
        </Container>
    )
}

export default Header;
