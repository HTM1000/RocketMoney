import { Dashboard } from "./Components/Dashboard";
import { Cabecalho } from "./Components/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./Components/NewTransactionModal";
import Modal from 'react-modal';
import { useState } from 'react';
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {

  const [isOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
      setIsOpen(true);
  }

  function handleCloseModal() {
      setIsOpen(false);
  }

  return (
    <TransactionsProvider>

     <GlobalStyle />
     <Cabecalho onOpenModal={handleOpenModal}/>
     <Dashboard />
    <NewTransactionModal 
      isOpen={isOpen}    
      onResquestClose={handleCloseModal}
    />

    </TransactionsProvider>
  );
}


