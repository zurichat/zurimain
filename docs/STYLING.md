# Styleguide link

[Zuri Master Guide](https://www.figma.com/file/srHjZ2Ztg7yOS7XDJMMX4m/Zuri-Chat-Master-Board?node-id=19%3A19322) - For typography, color palette, iconography, imagery, buttons, forms and spacing.

[FE Quality Control Docs](https://docs.google.com/document/d/1Sbq-ZC4O5477cx5cRuZKReVsdglABg7c585NAoZTHIU/edit) - For guidelines on how to contributeto the frontend.

# Styling in Zuri Main

To avoid style clashes use css modules when styling in Zuri Main
for example

```ts
// IS NOT VALID UNLESS REFERENCING A STYLE MADE AVAILABLE IN THE GLOBAL STYLESHEET
const TestComponent = () => {
  return <div style={`testComponentDiv`}></div>;
};
export default TestComponent;
```

```ts
// IS VALID
import style from "./styles.module.css";

const TestComponent = () => {
  return <div style={`${style.testComponentDiv}`}></div>;
};
export default TestComponent;
```
