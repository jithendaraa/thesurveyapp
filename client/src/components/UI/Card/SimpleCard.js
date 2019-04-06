import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '../Button/Button';
import Typography from '@material-ui/core/Typography';
import TakeSurveyPopup from '../TakeSurveyPopup/TakeSurveyPopup';

// import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';

const styles = {
  card: {
    minWidth: 200,
    width: "20%",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  det: {
    display: "flex",
    flexWrap: "wrap",
    fontSize: 14,
    justifyContent: "space-between",
  }
};

function SimpleCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <Zoom>
      <CardContent>
        <div className={classes.det}>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {props.postedOn}
              </Typography>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {props.postTime}
              </Typography>
        </div>
        
        <Typography variant="h5" component="h4">
          Survey Created By: {props.postedBy}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.postedByEmail}
        </Typography>
        <Typography component="p">
          {props.postBody}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small" onClick={props.likeOnClick} hide={props.hide}>Take Survey</Button> */}
        {(props.responded === true) ? (<Button btnText="Responded" color="gray"/>) : (<TakeSurveyPopup questions={props.questions} surveyName={props.postBody} surveyId={props.surveyId}/>)}
        
      </CardActions>
      </Zoom>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);