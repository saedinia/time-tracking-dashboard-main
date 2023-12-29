import React, { createContext, useContext } from 'react';

export const SVGContext = createContext();

export const useSVGContext = () => {
  return useContext(SVGContext);
};

export const SVGProvider = ({ children }) => {
  const icons = {
    icon_ellipsis: require('./../assets/images/icon-ellipsis.svg').default,
    icon_work: require('./../assets/images/icon-work.svg').default,
    icon_exercise: require('./../assets/images/icon-exercise.svg').default,
    icon_play: require('./../assets/images/icon-play.svg').default,
    icon_study: require('./../assets/images/icon-study.svg').default,
    icon_social: require('./../assets/images/icon-social.svg').default,
    icon_selfcare: require('./../assets/images/icon-self-care.svg').default,
    // Add more icons as needed
  };

  return <SVGContext.Provider value={icons}>{children}</SVGContext.Provider>;
};