import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Drawer,
  IconButton,
  Divider,
} from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import { ContactForm } from 'common';
import { Section, SectionAlternate } from 'components/organisms';
import {
  Advantages,
  FeaturedProperties,
  Form,
  Application,
  Community,
  Events,
  Hero,
  Locations,
  MapHero,
  Props,
  Reviews,
  ReviewsV2,
  Spaces,
} from './components';

import {
  mapData,
  advantages,
  featuredProperties,
  locations,
  properties,
  reviews,
  reviewsV2,
  events,
  gallery,
} from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  appBarBottom: {
    top: 'auto',
    bottom: 0,
    background: 'transparent',
    boxShadow: 'none',
  },
  toolbarBottom: {
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
  },
  chatIconButton: {
    position: 'absolute',
    right: theme.spacing(3),
    left: 'auto',
    top: theme.spacing(-3),
    background: theme.palette.primary.main,
    width: 55,
    height: 55,
    boxShadow: '0 2px 10px 0 rgba(23,70,161,.11)',
    '&:hover': {
      background: theme.palette.primary.main,
    },
  },
  forumIcon: {
    color: 'white',
    width: 25,
    height: 25,
  },
  contactForm: {
    padding: theme.spacing(3, 2),
    maxWidth: 800,
    margin: '0 auto',
  },
}));

const Coworking = () => {
  const classes = useStyles();

  const [openBottombar, setOpenBottombar] = React.useState(false);

  const handleBottombarOpen = () => {
    setOpenBottombar(true);
  };

  const handleBottombarClose = () => {
    setOpenBottombar(false);
  };

  return (
    <div className={classes.root}>
      <Hero />
      <SectionAlternate>
        <Advantages data={advantages} />
      </SectionAlternate>
      <Divider />
      <SectionAlternate>
        <FeaturedProperties data={featuredProperties} />
      </SectionAlternate>
      <Divider />
      <SectionAlternate>
        <ReviewsV2 data={reviewsV2} />
      </SectionAlternate>
      <Divider />
      <SectionAlternate>
        <Form />
      </SectionAlternate>
    </div>
  );
};

export default Coworking;
