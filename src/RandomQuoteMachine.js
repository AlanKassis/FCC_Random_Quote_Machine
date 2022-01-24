import React, {Component} from "react";
import "./App.css";
import QuoteCard from "./QuoteCard";
import quotes from './QuotesDatabase'
//this is the controller
class RandomQuoteMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author
    } 
    this.getQuote = this.getQuote.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.shuffleQuotes = this.shuffleQuotes.bind(this)
    }
  getQuote(quotes){
    //get a random quote from the quotes array
 
     let number = Math.floor(Math.random() * quotes.length)
    return quotes[number]
  }
  shuffleQuotes(quotes) {
    return quotes.sort(()=>Math.random()-0.5)
  }
  handleChange = () => {
    let newQuote = this.getQuote(quotes)
    this.setState({
      quote: newQuote.quote,
      author: newQuote.author  
    })
    this.shuffleQuotes(quotes)
  }
  render() {
    return (
     <QuoteCard handleChange = {this.handleChange} {...this.state} />
    );
  }
  
}

export default RandomQuoteMachine;
