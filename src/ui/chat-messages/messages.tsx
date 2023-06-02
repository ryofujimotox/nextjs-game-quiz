"use client";

import TypingAnimation from "../typing-animation";
import { memo, useEffect, useState } from "react";

import { WrapperMessages, WrapperMessageMe, WrapperMessageGPT } from "./styles";

// idなし
interface TypeMessageElement {
  text: string;

  is_yes?: boolean;
  reason: string;
}

// idあり
interface TypeMessage extends TypeMessageElement {
  id: number;
}

const Messages = ({ message_list }: { message_list: TypeMessage[] }) => {
  return (
    <WrapperMessages>
      {message_list.map((_message, i) => {
        const isLastData = message_list.length - 1 == i;

        return (
          <Message
            key={_message.id}
            data={_message}
            isYes={_message.is_yes}
            isLast={isLastData}
          />
        );
      })}
    </WrapperMessages>
  );
};

const Message = memo(
  ({
    data,
    isYes, //変更監視用
    isLast,
  }: {
    data: TypeMessage;
    isYes?: boolean;
    isLast: boolean;
  }) => {
    return (
      <div>
        <MessageMe text={data.text} />
        <MessageGPT is_yes={data.is_yes} isLast={isLast} />
      </div>
    );
  }
);

const MessageMe = ({ text }: { text: string }) => {
  return (
    <WrapperMessageMe>
      <div>{text}</div>
    </WrapperMessageMe>
  );
};

const MessageGPT = ({
  is_yes,
  isLast,
}: {
  is_yes?: boolean;
  isLast: boolean;
}) => {
  const [text, setText] = useState("");
  useEffect(() => {
    if (typeof is_yes === "undefined") {
      if (isLast) {
        setText("いい質問ですね。それではお答えしましょう。");
      }
    } else {
      setText(is_yes ? "はい" : "いいえ");
    }
  }, [isLast, is_yes]);

  return (
    <WrapperMessageGPT>
      <TypingAnimation text={text} typingSpeed={100} />
    </WrapperMessageGPT>
  );
};

export { Messages };
export type { TypeMessage };
