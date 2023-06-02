import Message, { TypeMessage } from "./message";
import Sidemenu from "../ui/side-menu";
import { InputText } from "../ui/input-text";

export default function Home() {
  const message_list: TypeMessage[] = [
    {
      id: 1,
      direction: "left",
      text: "Hey How are you today?",
    },
    {
      id: 2,
      direction: "right",
      text: `はい`,
    },
    {
      id: 3,
      direction: "left",
      text: "Hey How are you today?",
    },
    {
      id: 4,
      direction: "right",
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                  ipsa commodi illum saepe numquam maxime asperiores voluptate
                  sit, minima perspiciatis.`,
    },
    {
      id: 5,
      direction: "left",
      text: "Hey How are you today?",
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

  return (
    <div className="flex h-screen antialiased text-gray-800">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        {/* <Sidemenu /> */}

        <div className="flex flex-col flex-auto h-full p-6">
          <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
            <Message list={message_list} />

            <InputText />
          </div>
        </div>
      </div>
    </div>
  );
}
