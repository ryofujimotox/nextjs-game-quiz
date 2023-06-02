"use client";

import { useState } from "react";
import { Messages, TypeMessage } from "../ui/chat-messages/messages";

const Message = ({ list: initialize_list }: { list: TypeMessage[] }) => {
  const [list, setList] = useState<TypeMessage[]>(initialize_list);

  const submit = () => {
    setList((_list) => {
      return _list.map((_val) => {
        if (_val.id == 3) {
          _val.is_yes = !_val.is_yes;
          return _val;
        }
        if (_val.id == 2) {
          _val.is_yes = !_val.is_yes;
          return _val;
        }
        return _val;
      });
    });
  };

  return (
    <>
      <Messages message_list={list} />
      <button onClick={submit}>HI</button>
    </>
  );
};

export default Message;
export type { TypeMessage };
