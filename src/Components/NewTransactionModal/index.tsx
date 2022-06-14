import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './style';
import close from '../../assets/close.svg'
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import { FormEvent, useState } from 'react';
import { useTransactions } from './../../hooks/useTransactions';

interface NewTransactionModalProps {
    isOpen: boolean;
    onResquestClose: () => void;
}

export function NewTransactionModal({ isOpen, onResquestClose}: NewTransactionModalProps) {

    const { createTransaction } = useTransactions();

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit');

    async function handleNewTransaction (event: FormEvent){  
        event.preventDefault();

        const number = Number(amount.replace(',', '.')).toFixed(2);

        await createTransaction({
            title,
            amount: Number(number),
            category, 
            type,
        })

        setTitle('');
        setAmount('');
        setType('deposit');
        setCategory('')
        onResquestClose();
    }

    const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const number = e.target.value.replace(/D/, '');
        setAmount(number);
    }

    return (

        <Modal
         isOpen={isOpen}
          onRequestClose={onResquestClose} 
          overlayClassName='react-modal-overlay'
          className='react-modal-content'
        >

        <button type='button' onClick={onResquestClose} className='react-modal-close'>
            <img src= {close} alt='Fechar Modal'></img>
        </button>

        <Container onSubmit={handleNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input
            placeholder = 'Titulo'
            value={title}
            onChange={event => setTitle(event.target.value)}
        />

        <input
            type="text"
            placeholder = 'Valor'
            value={amount}
            onChange={handleInputValue}
        />

        <TransactionTypeContainer>
            <RadioBox type="button" onClick={() => {setType('deposit')}} isActive={type === 'deposit'} activeColor="green">
            <img src={income} alt="Entrada"/>
            <span>Entrada</span>
            </RadioBox>

            <RadioBox type="button" onClick={() => {setType('withdraw')}} isActive={type === 'withdraw'} activeColor="red">
            <img src={outcome} alt="Saida"/>
            <span>Saida</span>
            </RadioBox>
        </TransactionTypeContainer>

        <input
            placeholder = 'Categoria'
            value={category}
            onChange={event => setCategory(event.target.value)}
        />

        <button type='submit'>Cadastrar</button>

        </Container>
        </Modal>
       
    )
}