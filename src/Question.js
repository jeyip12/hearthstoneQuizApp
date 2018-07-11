import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  div: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    maxWidth: "100vw",
    maxHeight: "100vh"
  }
};

const Question = ({
  classes,
  questionCard,
  chooseOneRandomCard,
  revealMysteryCard
}) => {
  return (
    <div className={classes.div}>
      <Card className={classes.card}>
        <CardContent>
          <Typography component="p">
            <strong>CardSet:</strong> {questionCard.cardSet}
          </Typography>
          <Typography component="p">
            <strong>Type:</strong> {questionCard.type}
          </Typography>
          <Typography component="p">
            <strong>Flavor Text:</strong> {questionCard.flavor}
          </Typography>
          <Typography component="p">
            <strong>Artist:</strong> {questionCard.artist}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="outlined"
            color="primary"
            onClick={chooseOneRandomCard}
          >
            Draw a Random Card
          </Button>
          <Button
            size="small"
            variant="outlined"
            color="secondary"
            onClick={revealMysteryCard}
          >
            Reveal your Mystery Card
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

Question.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Question);
