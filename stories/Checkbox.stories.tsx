import React, { useState } from "react";

import { CheckBox } from "../src/components/Checkbox";

export default {
  title: "Checkbox",
  component: CheckBox,
};

const Group = () => {
  const allOptions = [
    { id: 1, value: "Alpha" },
    { id: 2, value: "Beta" },
  ];

  const [options, setOptions] = useState([allOptions[1].id]);

  function toggleOption(id: number) {
    setOptions(
      options.includes(id)
        ? options.filter((option) => option !== id)
        : [...options, id]
    );
  }

  return (
    <form>
      {allOptions.map((item) => (
        <CheckBox
          name="checkbox"
          key={item.id}
          label={item.value}
          value={item.value}
          checked={options.includes(item.id)}
          onChange={() => toggleOption(item.id)}
        />
      ))}
    </form>
  );
};
const Checked: React.VFC<{}> = () => (
  <CheckBox
    name="checkbox"
    label="Checked"
    value="Checked"
    defaultChecked={true}
    readOnly
  />
);

const Unchecked = () => (
  <CheckBox
    name="checkbox"
    label="Unchecked"
    value="Unchecked"
    checked={false}
    readOnly
  />
);

export { Group, Checked, Unchecked };
