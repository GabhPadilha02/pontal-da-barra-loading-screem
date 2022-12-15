import { Container, SpinnerItem } from "./style";
import Logo from "../../assets/logopontal1.jpeg"

export function Spinner() {
  return(
      <Container>
        <img src={Logo}/>
        <h1>Site em construção.</h1>
        <span>AGUARDEM!!</span>
        <SpinnerItem/>
      </Container>
  )

}