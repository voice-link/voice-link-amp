import addonBackgrounds from "@storybook/addon-backgrounds";
import theme from "themes";

export default addonBackgrounds(
  Object.keys(theme.colors).reduce(
    (acc, cur) => acc.concat({ name: cur, value: theme.colors[cur] }),
    []
  )
);
