import colors from "./colors";

export default {
  headline: `
    font-weight: 700;
    font-size: 6rem;
    line-height: 1;
  `,
  sectionHeadline: `
    font-weight: 700;
    font-size: 5rem;
  `,
  caption: `
    font-weight: 400;
    font-size: 2.7rem;
  `,
  body: `
    color: ${colors.almostblack};
    font-family: "Averta Standard", sans-serif;
    font-weight: 400;
    font-size: 1.7rem;
    word-break: normal;
  `,
  accent: `
    color: ${colors.accent};
  `,
  link: `
    text-decoration: none;
    color: ${colors.accent};
  `
};
