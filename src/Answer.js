import React from 'react';

const styles = {
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  }
}

const Answer = ({answerCard}) => {
  return (
    <div style={styles.card}>
      <img src={answerCard.img} alt={answerCard.name}/>
      <h1>{answerCard.name}</h1>
    </div>
  )
}

export default Answer;
