import React from 'react'
import {Menu} from 'antd'
import MenuConfig from './../../config/menuConfig'
import './index.less'


const SubMenu = Menu.SubMenu


export default class NavLeft extends React.Component{
    componentWillMount(){
        const MenuTreeNode = this.renderMenu(MenuConfig)

        this.setState({
            MenuTreeNode
        })
    }

    renderMenu = (data)=>{
        return data.map((item)=> {
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item key={item.key}>{item.title}</Menu.Item>
        })
    }

    render(){
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt="" />
                    <h1>vteso admin</h1>
                </div>
                <Menu
                    theme="dark"
                >
                    {this.state.MenuTreeNode}
                    {/* <SubMenu
                        key="sub1"
                        title={
                        <span>
                            <Icon type="appstore" />
                            <span>Navigation Three</span>
                        </span>
                        }
                    >
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                        <SubMenu key="sub1-2" title="Submenu">
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                        </SubMenu>
                    </SubMenu> */}
                </Menu>
                
            </div>
        )
    }
}