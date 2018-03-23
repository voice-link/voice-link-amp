import colors from "./colors";

export default {
  headline: `
    font-family: "Merriweather+Sans", sans-serif;
    font-weight: 800;
    font-size: 6rem;
    line-height: 1;
  `,
  sectionHeadline: `
    font-family: "Merriweather+Sans", sans-serif;
    font-weight: 800;
    font-size: 5rem;
  `,
  caption: `
    font-family: "Merriweather+Sans", sans-serif;
    font-weight: 400;
    font-size: 2.7rem;
  `,
  body: `
    color: ${colors.almostblack};
    font-family: "Nunito", sans-serif;
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
