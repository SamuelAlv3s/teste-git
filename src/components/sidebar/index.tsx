import styles from "./sidebar.module.css"
import {FiHome, FiUser, FiUsers} from "react-icons/fi"
import {RiMoneyDollarCircleLine} from "react-icons/ri"
import {MdAttachMoney} from "react-icons/md"
import {AiOutlineShoppingCart} from "react-icons/ai"
export default function Sidebar() {
    return (
      <nav className={styles.containerNav}>
        <ul>
          <li>
            <FiHome /> Início
          </li>
          <li>
            <FiUser /> Usuário
          </li>
          <li>
            <FiUsers /> Clientes
          </li>
          <li>
            <RiMoneyDollarCircleLine /> Financeiro
          </li>
          <li>
            <MdAttachMoney /> Vendas
          </li>
          <li>
            <AiOutlineShoppingCart /> Estoque
          </li>
        </ul>
      </nav>
    );
  }