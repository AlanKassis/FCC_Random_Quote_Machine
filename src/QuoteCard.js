import React from "react"

//this is the view
class QuoteCard extends React.Component {
  //still todo -   configure heroku and make buttons change styles 

render() {
    const quote = this.props.quote
    const author = this.props.author
    const color = this.props.color    
    const html = document.documentElement; 
    html.style.backgroundColor = color; 
    const tweetUrl = `https://twitter.com/intent/tweet?url=${window.location.href}&text=${encodeURIComponent(quote)}${encodeURIComponent(author)}`
    return (
      <div id="wrapper" style={{ backgroundColor: "white" }}>
        <div id="quote-box" style={{ color: color }}>
          <div id="text"> {quote}</div>
          <div id="author">{author}</div>
          <button onClick={this.props.handleChange} id="new-quote">
            new quote
          </button>
          <button id="tweet-button">
            {/* "https://twitter.com/intent/tweet?url=" + pageUrl + "&text=" + encodeURIComponent(text); */}
            <a href={tweetUrl} id="tweet-quote">
              Tweet This
            </a>
          </button>
        </div>
      </div>
    );
    }
}  
export default QuoteCard
/* 
User Story #1: I can see a wrapper element with a corresponding id="quote-box".

User Story #2: Within #quote-box, I can see an element with a corresponding id="text".

User Story #3: Within #quote-box, I can see an element with a corresponding id="author".

User Story #4: Within #quote-box, I can see a clickable element with a corresponding id="new-quote".

User Story #5: Within #quote-box, I can see a clickable a element with a corresponding id="tweet-quote".

User Story #6: On first load, my quote machine displays a random quote in the element with id="text".

User Story #7: On first load, my quote machine displays the random quote's author in the element with id="author".

User Story #8: When the #new-quote button is clicked, my quote machine should fetch a new quote and display it in the #text element.

User Story #9: My quote machine should fetch the new quote's author when the #new-quote button is clicked and display it in the #author element.

User Story #10: I can tweet the current quote by clicking on the #tweet-quote a element. This a element should include the "twitter.com/intent/tweet" path in its href attribute to tweet the current quote.

User Story #11: The #quote-box wrapper element should be horizontally centered. Please run tests with browser's zoom level at 100% and page maximized.
*/