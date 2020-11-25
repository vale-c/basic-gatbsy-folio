import { colors as defaultColors } from "../../tailwind"

const lightTheme = {
  bg: defaultColors["indigo"],
  bgDark: defaultColors["grey-lightest"],
  color: defaultColors["indigo-darker"],
  accent: defaultColors["indigo-light"],
  description: defaultColors["gray-light"],
}

const darkTheme = {
  bg: defaultColors["blue-dark"],
  bgDark: defaultColors["blue-darker"],
  color: defaultColors["pink-lighter"],
  accent: defaultColors["pink-light"],
  description: defaultColors["white"],
}

export { lightTheme, darkTheme }
