import { useHistory } from 'react-router-dom';

import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

const NewQuote = () => {
  const {sendRequest, status} = useHttp(addQuote);

  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
      console.log(quoteData);
  
      history.push('/quotes');
 
  }

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
