import React, { useState } from "react";

import { Radio } from "../src";

export default {
  title: "Radio",
  component: Radio,
};

const Group: React.VFC<{}> = () => {
  const options = [
    { id: 1, value: "Alpha" },
    { id: 2, value: "Beta" },
  ];

  const [option, setOption] = useState(options[1].id);

  return (
    <form>
      {options.map((item) => (
        <Radio
          name="radio"
          key={item.id}
          label={item.value}
          value={item.value}
          checked={option === item.id}
          onChange={() => setOption(Number(item.id))}
        />
      ))}
    </form>
  );
};
const Checked: React.VFC<{}> = () => (
  <Radio
    label="Checked"
    value="Checked"
    name="radio"
    defaultChecked={true}
    readOnly
  />
);

const Unchecked: React.VFC<{}> = () => (
  <Radio
    label="Unchecked"
    value="Unchecked"
    name="radio"
    checked={false}
    readOnly
  />
);

export { Group, Checked, Unchecked };
