import React, { Component } from 'react'

export default class Header extends Component {
    /**
     * @description method untuk menampilkan header pada halaman dashboard
     */
    render() {
        return (
            <div>
                <header className="main-header">
                {/* Logo */}
                <a href="index2.html" className="logo">
                    {/* mini logo for sidebar mini 50x50 pixels */}
                    <span className="logo-mini"><b>A</b>LT</span>
                    {/* logo for regular state and mobile devices */}
                    <span className="logo-lg"><b>Admin</b></span>
                </a>
                {/* Header Navbar: style can be found in header.less */}
                <nav className="navbar navbar-static-top">
                
                    {/* Navbar Right Menu */}
                    <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav">
                        
                        {/* Notifications: style can be found in dropdown.less */}
                        <li className="dropdown notifications-menu">
                        <a href="fake_url" className="dropdown-toggle" data-toggle="dropdown">
                            <i className="fa fa-bell-o" />
                            <span className="label label-warning">2</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li className="header">You have 2 notifications</li>
                            <li>
                            {/* inner menu: contains the actual data */}
                            <ul className="menu">
                                <li>
                                <a href="fake_url">
                                    <i className="fa fa-users text-aqua" /> 5 new members joined today
                                </a>
                                </li>
                                <li>
                                <a href="fake_url">
                                    <i className="fa fa-warning text-yellow" /> Very long description here that may not fit into the
                                    page and may cause design problems
                                </a>
                                </li>
                            </ul>
                            </li>
                            <li className="footer"><a href="fake_url">View all</a></li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                </nav>
                </header>
            </div>

            
        )
    }
}
