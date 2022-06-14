import { Summary } from "../Summary";
import { TabelaTransacoes } from "../TabelaTransacoes";
import { Container } from "./style";


export function Dashboard(){
    return (
        <Container>
            <Summary />
            <TabelaTransacoes />
        </Container>
    )
}