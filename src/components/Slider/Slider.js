import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  root: {
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: 5,
    overflow: 'hidden',
  },
  mobileStep: {
    marginTop: '-48px',
    backgroundColor: 'rgba(0, 0, 0, .7)',
    position: 'relative',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
  },
  img: {
    height: 200,
    display: 'block',
    overflow: 'hidden',
    width: '100%',
    borderRadius: 5,
  },
}));

const Slider = (props) =>{
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  }; 
  
  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {props.images.map((img, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                className={classes.img}
                src={require(`assets/img/${img}.jpg`)}
                alt={index}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        variant="dots"
        steps={props.images.length}
        position="static"
        activeStep={activeStep}
        className={classes.mobileStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === props.images.length - 1}
          >
            {props.context.next}
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            {props.context.back}
          </Button>
        }
      />
    </div>
  );
}

export default Slider;
