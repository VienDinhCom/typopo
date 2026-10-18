import { base } from "../const.js";

export const viVN = {
  quotes: {
    openingDoubleQuote: "“",
    closingDoubleQuote: "”",
    openingSingleQuote: "‘",
    closingSingleQuote: "’",
  },

  /* 
    …sentence, “Direct speech…” 
  */
  directSpeechIntro: ",",

  /*
    Dash and spacing between words 
  */
  dashWords: {
    spaceBefore: "",
    dash:        base.emDash,
    spaceAfter:  "",
  },

  spaceAfter: {
    copyright:               base.nbsp, // ©⎵2025
    soundRecordingCopyright: base.nbsp, // ℗⎵2025
    numeroSign:              base.nbsp, // №⎵1234
    sectionSign:             base.nbsp, // §⎵38
    paragraphSign:           base.nbsp, // ¶⎵38
    /* 
      a space after "n-1" abbreviation in abbr. sequence
      F.⎵X. Šalda, Ch.⎵G.⎵D. Lambert, e.⎵g., v.⎵u.⎵Z.
    */
    abbreviation:            "",
  },

  spaceBefore: {
    percent: "", // 12%
  },

  numbers: {
    ordinalIndicator:      "st|nd|rd|th",
    romanOrdinalIndicator: "\\.",
  },

  /* 
    The first and the second space in the ordinal date, 
    e.g. 1. 1. 1993 → 1.{firstSpace}1.{secondSpace}1993
  */
  ordinalDate: {
    firstSpace:  base.nbsp,
    secondSpace: base.nbsp,
  },

  /* 
    Common single-word abbreviations that are followed by a non-breaking space.
    For coding purposes, they are written here without periods.
  */
  singleWordAbbreviations: [
    "tr", // trang (page)
    "tập", // tập (volume)
    "chương", // chương (chapter)
    "điều", // điều (article)
    "khoản", // khoản (clause)
    "hình", // hình (figure)
    "bảng", // bảng (table)
  ],
  /*
    Common multi-word abbreviations that require proper spacing.
    For coding purposes, they are written here without periods and without correct spacing.
  */
  multipleWordAbbreviations: [
    "v v", // vân vân (et cetera)
    "N x b", // Nhà xuất bản (publisher)
    "T p", // Thành phố (city)
    "v d", // ví dụ (for example)
  ],
};
