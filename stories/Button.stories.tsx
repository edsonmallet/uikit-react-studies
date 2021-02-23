import React from "react";

import { Button } from "../src/components/Button";

export default {
  title: "Botões",
  component: Button,
};

const Default = () => <Button>Default</Button>;
const Outlined = () => <Button outlined>Outlined</Button>;
const Disabled = () => <Button disabled>Default</Button>;

export { Default, Outlined, Disabled };
