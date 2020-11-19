import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';

import { useMediaQuery, Button } from '@material-ui/core';
import { SectionHeader, SwiperImage } from 'components/molecules';
import { HeroShaped } from 'components/organisms';

import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {},
  swiperNavButton: {
    width: `${theme.spacing(3)}px !important`,
    height: `${theme.spacing(3)}px !important`,
    padding: `${theme.spacing(2)}px !important`,
  },
}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(grey[900]),
    backgroundColor: grey[900],
    '&:hover': {
      backgroundColor: grey[700],
    },
  },
}))(Button);

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <HeroShaped
        leftSide={
          <SectionHeader
            title={
              <span>
                WebAR made{' '}
                easy
              </span>
            }
            //subtitle="For Paulina, Rafal, and even Dariusz. Discover coworking spaces designed to inspire and to connect you to a community of motivated people."
            subtitle="Thanks to AnyShape.io in less than 5 minutes you can add WebAR capabilities to your website and increase your company growth by higher conversion into sales."
            ctaGroup={[
              <ColorButton
                variant="contained"
                color="primary"
                size={isMd ? 'large' : 'medium'}
              >
                Book
              </ColorButton>,
              <ColorButton
                variant="contained"
                color="primary"
                size={isMd ? 'large' : 'medium'}
              >
                Browse
              </ColorButton>,
            ]}
            align="left"
            titleVariant="h3"
          />
        }

        // Juchas - I'm chaging originall images to our own images //

        rightSide={
          <SwiperImage
            navigationButtonStyle={classes.swiperNavButton}
            items={[
              {
                src: '/images/photos/anyshape/ar-photo-1x2.JPG',
                srcSet: '/images/photos/anyshape/ar-photo-1.JPG 2x',
                alt: '...',
              },
              {
                src: '/images/photos/anyshape/ar-photo-2x2.JPG',
                srcSet: '/images/photos/anyshape/ar-photo-2.JPG 2x',
                alt: '...',
              },
              {
                src: '/images/photos/anyshape/ar-photo-3x2.JPG',
                srcSet: '/images/photos/anyshape/ar-photo-3.JPG 2x',
                alt: '...',
              },
            ]}
          />
        }
      />
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
