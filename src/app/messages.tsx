"use client";

import { useState } from "react";
import { Messages, TypeMessage } from "../ui/chat-messages/messages";
import { InputText } from "../ui/input-text";

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
    <div className="flex flex-col flex-auto h-full p-6">
      <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
        <Messages message_list={list} />
        <InputText
          placeholder="赤い？大きい？, 答えを教えて, ヒントを教えて"
          onSubmit={submit}
        />
      </div>
    </div>
  );
};

export default Message;
export type { TypeMessage };
