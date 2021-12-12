import { theme as lekoTheme } from "@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui";
import { merge } from "theme-ui";
 
const theme = merge(lekoTheme,{
   h1: {
      variant: `text.heading`,
      fontSize: [3, 4, 5, 6],
      mt: 2,
    },
})
export default theme