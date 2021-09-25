import { Container, IconSignOut } from "./styles";
import Navbar from '../../components/NavBar';
import signOut from '../../global'
function Header() {


    return (
        <Container>
            <Navbar />
            <div>
               <p>The Buzzer</p>
            </div>
            <IconSignOut />
        </Container>
    )
}

export default Header;
