import React, { useState } from "react";

import { Modal, Button } from "../src";

export default {
  title: "Modal",
  component: Modal,
};

const Default: React.VFC<{}> = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>

      <Modal title="Modal Title" open={open} setOpen={setOpen}>
        Test
      </Modal>
    </>
  );
};
export { Default };
