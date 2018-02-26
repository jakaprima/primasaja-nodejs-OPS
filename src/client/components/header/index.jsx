import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';


class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
    }
  }
  handleToggle = () => this.setState({open: !this.state.open});
  render(){
    return pug `
      AppBar(title="judul", iconClassNameRight="muidocs-icon-navigation-expand-more" onClick=${this.handleToggle})
      Drawer(docked=${false}, width=${200} open=${this.state.open}, onRequestChange=${(open) => this.setState({open})})
        Link(to="/" className="nav-link") 
          MenuItem Home
        Link(to="/tentang-kami" className="nav-link")
          MenuItem Tentang Kami
    `
  }
}

export default Header;