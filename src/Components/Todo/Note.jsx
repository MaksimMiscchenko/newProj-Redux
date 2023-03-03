import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { deletePost } from "../../redux/actions/action";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./style.css";

const Note = ({ item }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePost(item.id));
  };
  return (
    <li className="todo-note" key={item.id}>
      {item.title}
      <button onClick={handleDelete}>
        <DeleteForeverIcon />
      </button>
    </li>
  );
};

export default Note;
