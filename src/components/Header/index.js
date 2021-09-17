import { Container, IconSignOut } from "./styles";
import Navbar from '../../components/NavBar';

function Header() {

    const signOut = true;
 

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
