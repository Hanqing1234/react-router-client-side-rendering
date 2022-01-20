import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";

import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Max', text: 'Hello World'},
    {id: 'q2', author: 'Ham', text: 'Hello guys'},
    {id: 'q3', author: 'Jes', text: 'Hello man'}
  ]; 

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quotesId);
  console.log(quote)

  if(!quote) {
    return <p>No quote found!</p>
  }

  return (
  <Fragment>
    <HighlightedQuote text={quote.text} author={quote.author}/>
    <Route path={`/quotes/${params.quotesId}/comments`}>
      <Comments />
    </Route>
  </Fragment>
  );
};

export default QuoteDetail;
