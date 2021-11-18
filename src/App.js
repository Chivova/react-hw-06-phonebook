import Container from './components/Container';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import { Toaster } from 'react-hot-toast';

import 'modern-normalize/modern-normalize.css';

function App() {
  return (
    <Container>
      <ContactForm />
      <Filter />
      <ContactList />
      <Toaster position="top-center" />
    </Container>
  );
}

export default App;
