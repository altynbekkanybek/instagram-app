import { AiFillHome, AiOutlineSearch, AiOutlineHeart} from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiMessageSquareAdd, BiMoviePlay, BiUserCircle,} from "react-icons/bi";
import { FiUsers } from 'react-icons/fi';
import { Layout } from "../services/path";

export const SidebarList = [
  {
    id: 1,
    caption: "Главная",
    icon: AiFillHome
  },
  {
    id: 2,
    caption: "Пользователи",
    icon: FiUsers,
    route: Layout.users
  },
  {
    id: 3,
    caption: "Поисковый запрос",
    icon: AiOutlineSearch
  },
  {
    id: 4,
    caption: "Reels",
    icon: BiMoviePlay
  },
  {
    id: 5,
    caption: "Уведомления",
    icon: AiOutlineHeart
  },
  {
    id: 6,
    caption: "Создать",
    icon: BiMessageSquareAdd
  },
  {
    id: 7,
    caption: "Профиль",
    icon: BiUserCircle,
    route: Layout.profile
  },
  {
    id: 8,
    caption: "Еще",
    icon: RxHamburgerMenu
  },
]


