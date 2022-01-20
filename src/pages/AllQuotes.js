import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  {id: 'q1', author: 'Max', text: 'Hello World'},
  {id: 'q2', author: 'Ham', text: 'Hello guys'},
  {id: 'q3', author: 'Jes', text: 'Hello man'}
]

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES}/>
}

export default AllQuotes;