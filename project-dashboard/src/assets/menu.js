import React, { Component } from 'react'

export default class Menu extends Component {
     /**
     * @description method untuk menampilkan menu pada halaman dashboard
     */
    render() {
        return (
            <div>
                <aside className="main-sidebar">
                {/* sidebar: style can be found in sidebar.less */}
                <section className="sidebar">
                    {/* sidebar menu: : style can be found in sidebar.less */}
                    <ul className="sidebar-menu" data-widget="tree">
                    <br></br>
                    <li className="header">MANAJEMEN AKUN</li>
                    <li>
                        <a href="pages/akunsaya.html">
                        <i className="fa fa-user" /> <span>Kelola Akun Saya</span>
                        </a>
                    </li>
                    <li>
                        <a href="pages/KelolaUser/content.html">
                        <i className="fa fa-users" /> <span>Kelola User</span>
                        </a>
                    </li>
                    <li className="header"><b>NAVIGASI UTAMA</b></li>
                    <li>
                        <a href="pages/menu.html">
                        <i className="fa fa-cutlery" /> <span>Menu</span>
                        </a>
                    </li>
                    <li>
                        <a href="pages/stock.html">
                        <i className="fa  fa-check-square" /> <span>Stock</span>
                        </a>
                    </li>
                    <li>
                        <a href="pages/UoM.html">
                        <i className="fa fa-balance-scale" /> <span>UoM</span>
                        </a>
                    </li>
                    </ul>
                </section>
                {/* /.sidebar */}
                </aside>
            </div>
            
        )
    }
}
