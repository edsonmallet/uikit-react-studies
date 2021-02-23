import React from "react";

import { Button } from "../src";

export default {
  title: "Botões",
  component: Button,
};

const Default: React.VFC<{}> = () => <Button>Default</Button>;
const Outlined: React.VFC<{}> = () => <Button outlined>Outlined</Button>;
const Disabled: React.VFC<{}> = () => <Button disabled>Default</Button>;

export { Default, Outlined, Disabled };
