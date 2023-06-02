"use client";

import { useState } from "react";
import { Messages, TypeMessage } from "../ui/chat-messages/messages";
import { InputText } from "../ui/input-text";

const Message = ({ list: initialize_list }: { list: TypeMessage[] }) => {
  const [list, setList] = useState<TypeMessage[]>(initialize_list);
  const addList = (text: string) => {
    const maxId = Math.max(...list.map((obj) => obj.id));
    const _new: TypeMessage = {
      id: maxId + 1,
      text: text,
    };
    setList((_list) => [..._list, _new]);
  };

  const submit = (text: string) => {
    addList(text);
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
