import AdminIcon from "../assets/admin.svg";
import KnowledgeBase from "../assets/tick.svg";
import TrainSAM from "../assets/tick.svg";
import AgentInbox from "../assets/calendar-light.svg";
import HelpCenter from "../assets/clock.svg";
import Analytics from "../assets/chat.svg";

export const data = [
  {
    id: 1,
    title: "Average response Time",
    percentage: "+4.14%",
    color: "#F05D23",
    others: [
      {
        title: "Average Response Time",
        time: "30 Mins",
      },
      {
        title: "Response Time",
        time: "1 Hour 30 Mins",
      },
    ],
    graph: [
      {
        month: "Jan",
        sales: 12,
      },
      {
        month: "Feb",
        sales: 20,
      },
      {
        month: "Mar",
        sales: 30,
      },
      {
        month: "Apr",
        sales: 50,
      },
      {
        month: "May",
        sales: 20,
      },
      {
        month: "Jun",
        sales: 50,
      },
      {
        month: "Jul",
        sales: 20,
      },
      {
        month: "Aug",
        sales: 40,
      },
    ],
  },
  {
    id: 2,
    title: "Replies per resolution",
    percentage: "+4.14%",
    color: "#3E68FF",
    others: [
      {
        title: "Average Replies",
        time: "30 Mins",
      },
      {
        title: "Response Time",
        time: "1 Hour 30 Mins",
      },
    ],
    graph: [
      {
        month: "Jan",
        sales: 12,
      },
      {
        month: "Feb",
        sales: 20,
      },
      {
        month: "Mar",
        sales: 30,
      },
      {
        month: "Apr",
        sales: 50,
      },
      {
        month: "May",
        sales: 20,
      },
      {
        month: "Jun",
        sales: 50,
      },
      {
        month: "Jul",
        sales: 20,
      },
      {
        month: "Aug",
        sales: 40,
      },
    ],
  },
  {
    id: 3,
    title: "Average resolution time",
    percentage: "+4.14%",
    color: "#FB6491",
    others: [
      {
        title: "Average Resolution Rate",
        time: "30 Mins",
      },
      {
        title: "Response Time",
        time: "1 Hour 30 Mins",
      },
    ],
    graph: [
      {
        month: "Jan",
        sales: 12,
      },
      {
        month: "Feb",
        sales: 20,
      },
      {
        month: "Mar",
        sales: 30,
      },
      {
        month: "Apr",
        sales: 50,
      },
      {
        month: "May",
        sales: 20,
      },
      {
        month: "Jun",
        sales: 50,
      },
      {
        month: "Jul",
        sales: 20,
      },
      {
        month: "Aug",
        sales: 40,
      },
    ],
  },
  {
    id: 4,
    title: "First contact resolution rate",
    percentage: "+4.14%",
    color: "#07C9E2",
    others: [
      {
        title: "Average Contact Rate",
        time: "30 Mins",
      },
      {
        title: "Response Time",
        time: "1 Hour 30 Mins",
      },
    ],
    graph: [
      {
        month: "Jan",
        sales: 12,
      },
      {
        month: "Feb",
        sales: 20,
      },
      {
        month: "Mar",
        sales: 30,
      },
      {
        month: "Apr",
        sales: 50,
      },
      {
        month: "May",
        sales: 20,
      },
      {
        month: "Jun",
        sales: 50,
      },
      {
        month: "Jul",
        sales: 20,
      },
      {
        month: "Aug",
        sales: 40,
      },
    ],
  },
];

export const sideLinks = [
  {
    id: 1,
    name: "Admin",
    Icon: AdminIcon,
  },
  {
    id: 2,
    name: "Knowledge Base",
    Icon: KnowledgeBase,
  },
  {
    id: 3,
    name: "Train SAM",
    Icon: TrainSAM,
  },
  {
    id: 4,
    name: "Agent Inbox",
    Icon: AgentInbox,
  },
  {
    id: 5,
    name: "Help Center",
    Icon: HelpCenter,
  },
  {
    id: 6,
    name: "Analytics",
    Icon: Analytics,
    subLinks: ["Teams", "Knowledge Base", "Training SAM", "Help Center"],
  },
];
