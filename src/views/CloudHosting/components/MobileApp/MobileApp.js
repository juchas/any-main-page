import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  ListItem,
  ListItemAvatar,
  Typography,
  Avatar,
} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  root: {},
  checkBox: {
    background: 'transparent',
    borderRadius: 0,
  },
  listItemAvatar: {
    alignSelf: 'flex-start',
  },
  image: {
    maxWidth: 300,
    height: 'auto',
  },
}));

const MobileApp = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item container justify="center" xs={12} md={6} data-aos="fade-up">
          <Image
            src="/images/illustrations/mobile-integration.png"
            srcSet="/images/illustrations/mobile-integration@2x.png 2x"
            className={classes.image}
          />
        </Grid>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <Grid
            container
            alignItems="flex-start"
            justify="center"
            direction="column"
            className={classes.propsGrid}
          >
            <SectionHeader
              label="COMPLETE CONTROL"
              title="Monitor and analyze usage patterns."
              subtitle="Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world."
              align="left"
              disableGutter
            />
            <Grid container spacing={2}>
              {data.map((item, index) => (
                <Grid item xs={12} sm={6} key={index} data-aos="fade-up">
                  <ListItem disableGutters>
                    <ListItemAvatar className={classes.listItemAvatar}>
                      <Avatar
                        src="/images/illustrations/check-icon-yellow.svg"
                        className={classes.checkBox}
                      />
                    </ListItemAvatar>
                    <Typography variant="subtitle1" color="textPrimary">
                      {item}
                    </Typography>
                  </ListItem>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

MobileApp.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default MobileApp;
