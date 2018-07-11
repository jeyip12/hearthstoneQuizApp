import React, { Component } from "react";
import Question from "./Question";
import Answer from "./Answer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      questionCard: {
        cardSet: "Journey to Un'Goro",
        name: "Open the Waygate",
        type: "Spell",
        flavor:
          "Although powerful, the incantation is simple. It’s just a jump to the left, and then a step to the right.",
        artist: "Rafael Zanchetin",
        img:
          "http://media.services.zam.com/v1/media/byName/hs/cards/enus/UNG_028.png"
      },
    };
    this.handleBrokenImage = this.handleBrokenImage.bind(this);
    this.chooseOneRandomCard = this.chooseOneRandomCard.bind(this);
    this.revealMysteryCard = this.revealMysteryCard.bind(this);
  }

  handleBrokenImage(event) {
    event.target.src =
      "https://cdn.dribbble.com/users/841405/screenshots/2309412/6_1x.png";
  }

  async componentDidMount() {
    const res = await fetch(
      "https://omgvamp-hearthstone-v1.p.mashape.com/cards/qualities/Legendary",
      {
        headers: {
          "X-Mashape-Key": "GMFVBTatEkmshBpemRGxFQjZJIH4p177o9pjsnaxt5ebqxa0v9"
        }
      }
    );
    const data = await res.json();
    const cards = await data.filter(card => {
      if (
        card.img &&
        card.cardSet !== "Credits" &&
        card.cardSet !== "Tavern Brawl" &&
        card.flavor
      ) {
        return card;
      }
    });
    this.setState({
      cards: cards
    });
  }

  chooseOneRandomCard() {
    let randomCardIndex = Math.floor(
      Math.random() * (0, this.state.cards.length - 1) + 0
    );
    let randomCard = this.state.cards[randomCardIndex];
    this.setState({
      questionCard: randomCard,
    });
  }

  revealMysteryCard() {
    const answerCard = this.state.questionCard;
    this.setState({
      answerCard: <Answer answerCard={answerCard} />
    })
  }

  render() {
    return (
      <div>
        <Question
          questionCard={this.state.questionCard}
          chooseOneRandomCard={this.chooseOneRandomCard}
          revealMysteryCard={this.revealMysteryCard}
        />
        {this.state.answerCard}
      </div>
    );
  }
}

export default App;
