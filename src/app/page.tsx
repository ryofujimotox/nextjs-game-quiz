import Message, { TypeMessage } from "./messages";
import Sidemenu from "../ui/side-menu";

export default function Home() {
  const message_list: TypeMessage[] = [
    {
      id: 1,
      text: "赤い?赤い?赤い?赤い?赤い?赤い?",

      is_yes: true,
      reason: "本来はオレンジ色ですが、赤ともいえます。",
    },
    {
      id: 2,
      text: `大きいですか?\nipsa commodi illum saepe numquam maxime asperiores voluptate`,

      is_yes: true,
      reason: "観光地としても、日本国内の建造物としても大きいです。",
    },
    {
      id: 3,
      text: "東京タワー?東京タワー?東京タワー?東京タワー?東京タワー?東京タワー?",

      is_yes: false,
      reason: "",
    },
  ];

  return (
    <div className="flex h-screen antialiased text-gray-800">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        {/* <Sidemenu /> */}

        <Message list={message_list} />
      </div>
    </div>
  );
}
