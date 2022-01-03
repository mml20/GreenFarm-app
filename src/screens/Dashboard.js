import React from 'react';
import './css/dashboard.css';
import Serach from '../search.svg';
import Notification from '../notification.svg';
import {Routes, Route, NavLink} from 'react-router-dom';

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
                        <h1>Панель управления</h1>
                        <div className="category_panel">
                            <NavLink to="/dashboard/" className={'category_inactive'} activeClassName="selected">Компания</NavLink>
                            <NavLink to="/dashboard/production" className={'category_inactive'} activeClassName="selected">Производство</NavLink>
                            <NavLink to="/dashboard/shops" className={'category_inactive'} activeClassName="selected">Магазины</NavLink>
                        </div>
                    </div>
                </header>
                <Routes>
                    <Route path="/dashboard/company" element={<h1>123</h1>}/>
                    <Route path="/dashboard/production" element={<h1>123</h1>}/>
                    <Route path="/dashboard/shops" element={<h1>123</h1>}/>
                </Routes>
            </div>
    )}}

export default Dashboard;
