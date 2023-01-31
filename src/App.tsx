import React, { FC } from "react";
import { getTheme } from "@fluentui/react";

const theme = getTheme();
const Card: FC = (props) => {
  return <div {...props} style={{ boxShadow: theme.effects.elevation8 }} />;
};

export default function App() {
  return (
    <div className="App">
      <Card>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </Card>
    </div>
  );
}
