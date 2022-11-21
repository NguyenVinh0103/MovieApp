import {Dimensions, Platform} from 'react-native';

export const {width, height} = Dimensions.get('window');
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

// Default guideline sizes are based on iPhone X
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const scale = size => (shortDimension / guidelineBaseWidth) * size;
export const verticalScale = size =>
  (longDimension / guidelineBaseHeight) * size;
export const normalizeHorizontal = (size, factor = 0.5) =>
  Math.floor(size + (scale(size) - size) * factor);
export const normalize = (size, factor = 0.5) =>
  Math.round(size + (verticalScale(size) - size) * factor);

export const s = scale;
export const vs = verticalScale;
export const nl = normalize;
export const nlv = normalize;

export function isIphoneX() {
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (height === 812 || width === 812 || height === 896 || width === 896)
  );
}

export function ExtraHight(number) {
  const newNumber =
    Platform.OS === 'ios' ? normalize(number) : normalize(number / 2);
  return newNumber;
}
