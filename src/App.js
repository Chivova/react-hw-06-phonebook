import Container from './components/Container';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

import 'modern-normalize/modern-normalize.css';

function App() {
  return (
    <Container>
      <ContactForm />
      <Filter />
      <ContactList />
    </Container>
  );
}

export default App;
