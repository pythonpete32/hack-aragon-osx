import {
  ViewGridIcon,
  TerminalIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/outline";

const navLinks = [
  {
    route: "/",
    icon: <ViewGridIcon className="w-5 h-5" />,
    name: "Start",
  },
  {
    route: "/about",
    icon: <QuestionMarkCircleIcon className="w-5 h-5" />,
    name: "About",
  },
  {
    route: "https://github.com/pythonpete32/hack-web3-boilerplate",
    icon: <TerminalIcon className="w-5 h-5" />,
    name: "GitHub",
  },
];

export default navLinks;
