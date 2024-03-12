import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/icons/logo.svg'
export const Footer = () => {
  return (
    <div className="p-16 bg-gray-200 flex  justify-between ">
      <div className='flex flex-col gap-1.5'>
        <Link className=" block" to={"/"}>
          <img src={Logo} alt="" />
        </Link>
        <div className="">
          <h1 className="text-2xl font-medium">+99 893 374-66-44</h1>
          <p>справочная служба</p>
        </div>
        <div>
          <h1 className="text-2xl font-medium">+99 890 253-77-53</h1>
          <p>интернет-магазин </p>
        </div>
      </div>
      <div>
        <ul className="flex flex-col gap-1.5">
          <li>
            <Link>Условия обмена и возврата</Link>
          </li>
          <li>
            <Link>Каталог</Link>
          </li>
          <li>
            <Link>О компании</Link>
          </li>
          <li>
            <Link>Контакты</Link>
          </li>
          <li>
            <Link>Доставка</Link>
          </li>
          <li>
            <Link>Оплата</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-col gap-1.5">
          <li>
            <Link>Клиентам</Link>
          </li>
          <li>
            <Link>Личный кабинет</Link>
          </li>
          <li>
            <Link>Блог</Link>
          </li>
          <li>
            <Link>Обратная связь</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className='flex flex-col gap-1.5'>
          <li>
            <Link>Информация</Link>
          </li>
          <li>
            <Link>Пользовательское соглашение</Link>
          </li>
          <li>
            <Link>Политика конфиденциальности и оферта</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
