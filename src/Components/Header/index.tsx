import logoImagem from '../../assets/Logo.svg';
import { Container, Content } from './style';

interface headerProps {
    onOpenModal: () => void;
}

export function Cabecalho({ onOpenModal }: headerProps) {

    return(
        <Container>
            <Content>
            <img src={logoImagem} alt="" />
           <button type="button" onClick={onOpenModal}>
               Nova Transação
               </button>

          </Content>
        </Container>
    )
}