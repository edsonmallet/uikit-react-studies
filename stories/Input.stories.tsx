import React, { useState } from "react";

import { MdSearch } from "react-icons/md";

import { Input } from "../src";

export default {
  title: "Input",
  component: Input,
};

const Default: React.VFC<{}> = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <Input
      name="findMe"
      placeholder="findMe..."
      value={inputValue}
      setValue={setInputValue}
    />
  );
};
const WithIcon: React.VFC<{}> = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <Input
      name="findMe"
      icon={<MdSearch />}
      placeholder="findMe..."
      value={inputValue}
      setValue={setInputValue}
    />
  );
};

export { Default, WithIcon };
