import React from 'react';
import './css/storage.css';
import Serach from "../search.svg";
import Notification from "../notification.svg";
import {NavLink} from "react-router-dom";
import Item from '../components/item_showcase'
import Image from '../components/test_image.png'
import Image1 from '../components/test_image2.png'

class Dashboard extends React.Component{
    render() {
        return(
        <div>
                <header>
                    <div className="upheader">
                        <form>
                            <img alt="" src={Serach} className="search_icon"/>
                            <input placeholder="Поиск" type="search"/>
                        </form>
                        <img alt="" src={Notification}/>
                    </div>
                    <div className="downheader">
                        <h1>Склад</h1>
                        <div className="category_panel">
                            <NavLink to="/storage" className={'category_inactive'} activeClassName="selected">Вся продукция</NavLink>
                            <NavLink to="/storage_id=all" className={'category_inactive'} activeClassName="selected">Скот</NavLink>
                            <NavLink to="/storage_id=all" className={'category_inactive'} activeClassName="selected">Растения</NavLink>
                        </div>
                    </div>
                </header>
                <div className="product_showcase">
                    <Item image={Image} name="АМФОРА" category="жимолоть" price="$ 2.99" quantity="250 шт."/>
                    <Item image={Image1} name="ТОРНФРИ" category="ежевика" price="$ 2.99" quantity="250 шт."/>
                    <Item image={Image} name="АМФОРА" category="жимолоть" price="$ 2.99" quantity="250 шт."/>
                    <Item image={Image1} name="ТОРНФРИ" category="ежевика" price="$ 2.99" quantity="250 шт."/>
                    <Item image={Image} name="АМФОРА" category="жимолоть" price="$ 2.99" quantity="250 шт."/>
                    <Item image={Image1} name="ТОРНФРИ" category="ежевика" price="$ 2.99" quantity="250 шт."/>
                    <Item image={Image} name="АМФОРА" category="жимолоть" price="$ 2.99" quantity="250 шт."/>
                    <Item image={Image1} name="ТОРНФРИ" category="ежевика" price="$ 2.99" quantity="250 шт."/>
                    <Item image={Image} name="АМФОРА" category="жимолоть" price="$ 2.99" quantity="250 шт."/>
                    <Item image={Image1} name="ТОРНФРИ" category="ежевика" price="$ 2.99" quantity="250 шт."/>
                </div>
            </div>
    )}}

export default Dashboard;
