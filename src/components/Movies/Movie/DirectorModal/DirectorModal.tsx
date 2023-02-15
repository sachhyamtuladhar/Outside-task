import React, { ReactNode } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

interface Props {
  description: string;
  children: ReactNode;
  name: string;
}
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const DirectorModal: React.FC<Props> = ({ description, children, name }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Typography onClick={handleOpen} className="director-div">
        {children}
      </Typography>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2 id="parent-modal-title">{name}</h2>
          <p>{description}</p>
        </Box>
      </Modal>
    </div>
  );
};

export default DirectorModal;
