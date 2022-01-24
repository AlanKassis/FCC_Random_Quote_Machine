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
    this.getRandomColor = this.getRandomColor.bind(this)
    }
  getQuote(quotes){
    //get a random quote from the quotes array
     let number = Math.floor(Math.random() * quotes.length)
    return quotes[number]
  }
  shuffleQuotes(quotes) {
    return quotes.sort(()=>Math.random()-0.5)
  }
  getRandomColor() {
    const color = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})`
      return color; 
  }
  handleChange = () => {
    let newQuote = this.getQuote(quotes)
    this.setState({
      quote: newQuote.quote,
      author: newQuote.author  
    })
    this.shuffleQuotes(quotes)
    this.getRandomColor()
  }
  render() {
    return (  
     <QuoteCard handleChange = {this.handleChange} color = {this.getRandomColor()} {...this.state} />
    );
  }
  
}

export default RandomQuoteMachine;
