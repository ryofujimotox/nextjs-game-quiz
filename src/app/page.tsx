import { Messages, TypeMessage } from "../ui/message_gpt";
import Sidemenu from "../ui/side-menu";
import { InputText } from "../ui/input-text";

export default function Home() {
  return (
    <div className="flex h-screen antialiased text-gray-800">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        {/* <Sidemenu /> */}

        <div className="flex flex-col flex-auto h-full p-6">
          <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
            <Message />

            <InputText />
          </div>
        </div>
      </div>
    </div>
  );
}

const Message = () => {
  const message_list: TypeMessage[] = [
    {
      id: 1,
      direction: "left",
      text: "Hey How are you today?",
      animation: false,
    },
    {
      id: 2,
      direction: "right",
      text: `はい`,
      animation: false,
    },
    {
      id: 3,
      direction: "left",
      text: "Hey How are you today?",
      animation: false,
    },
    {
      id: 4,
      direction: "right",
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                  ipsa commodi illum saepe numquam maxime asperiores voluptate
                  sit, minima perspiciatis.`,
      animation: false,
    },
    {
      id: 5,
      direction: "left",
      text: "Hey How are you today?",
      animation: false,
    },
    {
      id: 6,
      direction: "right",
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                  ipsa commodi illum saepe numquam maxime asperiores voluptate
                  sit, minima perspiciatis.`,
      animation: true,
    },
  ];
  return <Messages message_list={message_list} />;
};
