
import { colors } from './colors';
import { normalize } from './normalize';

export const fonts = {
    BodoniModaRegular: '',
    BodoniModaMedium: 'BodoniModa-Medium',
    BodoniModaBold: 'BodoniModa-Bold',
    BodoniModaSemiBold: 'BodoniModa-SemiBold',
    BodoniModaItalic: 'BodoniModa-Italic',
    BodoniModaSemiBoldItalic: 'BodoniModa-SemiBoldItalic',
    TenorSans:'TenorSans'
};

//  FONT SIZE
export const FONT_SIZE_12 = normalize(12);
export const FONT_SIZE_14 = normalize(14);
export const FONT_SIZE_15 = normalize(15);
export const FONT_SIZE_16 = normalize(16);
export const FONT_SIZE_18 = normalize(18);
export const FONT_SIZE_20 = normalize(20);
export const FONT_SIZE_40 = normalize(40);

//  Additional font family

export const FONT_SEMI_BOLD = {
    fontFamily: fonts.BodoniModaSemiBold,
    color: colors.TXT_BLACK
};

export const FONT_SEMI_BOLD_12 = {
    ...FONT_SEMI_BOLD,
    fontSize: FONT_SIZE_12,
};

export const FONT_SEMI_BOLD_14 = {
    ...FONT_SEMI_BOLD,
    fontSize: FONT_SIZE_14,
};
export const FONT_SEMI_BOLD_16 = {
    ...FONT_SEMI_BOLD,
    fontSize: FONT_SIZE_16,
};
export const FONT_SEMI_BOLD_18 = {
    ...FONT_SEMI_BOLD,
    fontSize: FONT_SIZE_18,
};
export const FONT_SEMI_BOLD_20 = {
    ...FONT_SEMI_BOLD,
    fontSize: FONT_SIZE_20,
};

//  Font Regular Style
export const FONT_REGULAR = {
    fontFamily: fonts.BodoniModaRegular,
    color: colors.TXT_BLACK,
};

export const FONT_REGULAR_12 = {
    ...FONT_REGULAR,
    fontSize: FONT_SIZE_12,
};

export const FONT_REGULAR_14 = {
    ...FONT_REGULAR,
    fontSize: FONT_SIZE_14,
};

export const FONT_REGULAR_15 = {
    ...FONT_REGULAR,
    fontSize: FONT_SIZE_15,
};

export const FONT_REGULAR_16 = {
    ...FONT_REGULAR,
    fontSize: FONT_SIZE_16,
};

export const FONT_REGULAR_18 = {
    ...FONT_REGULAR,
    fontSize: FONT_SIZE_18,
};

export const FONT_REGULAR_20 = {
    ...FONT_REGULAR,
    fontSize: FONT_SIZE_20,
};

//  Font Medium Style
export const FONT_MEDIUM = {
    fontFamily: fonts.BodoniModaMedium,
    color: colors.TXT_BLACK,
};

export const FONT_MEDIUM_12 = {
    ...FONT_MEDIUM,
    fontSize: FONT_SIZE_12,
};

export const FONT_MEDIUM_14 = {
    ...FONT_MEDIUM,
    fontSize: FONT_SIZE_14,
};

export const FONT_MEDIUM_15 = {
    ...FONT_MEDIUM,
    fontSize: FONT_SIZE_15,
};

export const FONT_MEDIUM_16 = {
    ...FONT_MEDIUM,
    fontSize: FONT_SIZE_16,
};

export const FONT_MEDIUM_18 = {
    ...FONT_MEDIUM,
    fontSize: FONT_SIZE_18,
};

export const FONT_MEDIUM_20 = {
    ...FONT_MEDIUM,
    fontSize: FONT_SIZE_20,
};

//  Font Bold Style
export const FONT_BOLD = {
    fontFamily: fonts.BodoniModaBold,
    color: colors.TXT_BLACK,
};

export const FONT_BOLD_12 = {
    ...FONT_BOLD,
    fontSize: FONT_SIZE_12,
};

export const FONT_BOLD_14 = {
    ...FONT_BOLD,
    fontSize: FONT_SIZE_14,
};

export const FONT_BOLD_16 = {
    ...FONT_BOLD,
    fontSize: FONT_SIZE_16,
};

export const FONT_BOLD_18 = {
    ...FONT_BOLD,
    fontSize: FONT_SIZE_18,
};

export const FONT_BOLD_20 = {
    ...FONT_BOLD,
    fontSize: FONT_SIZE_20,
};
export const shadow = {
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
};
/// Font Italic Style
export const FONT_ITALIC = {
    fontFamily: fonts.BodoniModaItalic,
    color: colors.TXT_BLACK,
};
export const FONT_ITALIC_40 = {
    ...FONT_ITALIC,
    fontSize: FONT_SIZE_40,
};

/// Font Semi Bold Italic Style
export const FONT_SEMI_BOLD_ITALIC = {
    fontFamily: fonts.BodoniModaSemiBoldItalic,
    color: colors.TXT_BLACK,
};
export const FONT_SEMI_BOLD_ITALIC_40 = {
    ...FONT_SEMI_BOLD_ITALIC,
    fontSize: FONT_SIZE_40,
};

/// Font TenorSans 
export const FONT_TENORSANS = {
    fontFamily: fonts.TenorSans,
    color: colors.TXT_BLACK_NORMAL,
};
export const FONT_TENORSANS_14 = {
    ...FONT_TENORSANS,
    fontSize: FONT_SIZE_14
};
export const HIT_SLOP_12 = {
    top: 16, bottom: 16, right: 16, left:16 
}