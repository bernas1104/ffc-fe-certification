import React, { useEffect, useState, useCallback } from 'react';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faRetweet } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import { Container, QuoteBox } from './styles';
import { useFreeCodeCamp } from '../../hooks/freeCodeCampHook';

interface Quote {
  quote: string;
  author: string;
}

const RandomQuoteMachine: React.FC = () => {
  const { addTestBundle } = useFreeCodeCamp();

  const [allQuotes, setAllQuotes] = useState<Quote[]>([]);
  const [quote, setQuote] = useState<Quote>({} as Quote);

  const generateRandomNumber = useCallback((): number => {
    return Math.floor(Math.random() * 102);
  }, []);

  useEffect(() => {
    async function fetchQuotes(): Promise<void> {
      const response = await axios.get(
        'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
      );

      const idx = generateRandomNumber();

      setAllQuotes([...response.data.quotes]);
      setQuote(response.data.quotes[idx]);
    }

    addTestBundle();
    fetchQuotes();
  }, [addTestBundle, generateRandomNumber]);

  const handleSelectNewQuote = useCallback(() => {
    const idx = generateRandomNumber();

    setQuote(allQuotes[idx]);
  }, [generateRandomNumber, allQuotes]);

  return (
    <Container>
      <QuoteBox id="quote-box">
        <div className="quote">
          <FontAwesomeIcon icon={faQuoteLeft} size="2x" />
          <span id="text">{quote.quote}</span>
        </div>

        <span id="author" className="author">
          &nbsp;-&nbsp;
          {quote.author}
        </span>

        <div className="actions">
          <Button
            variant="outlined"
            id="new-quote"
            onClick={handleSelectNewQuote}
          >
            New Quote
          </Button>
          <a
            id="tweet-quote"
            href="https://twitter.com/intent/tweet"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faRetweet} />
            Tweet
          </a>
        </div>
      </QuoteBox>
    </Container>
  );
};

export default RandomQuoteMachine;
