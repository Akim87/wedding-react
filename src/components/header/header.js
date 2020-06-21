import React from "react";
import "./header.scss";
import Menu from "../menu/menu";
import Logo from "../logo/logo";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrolled: false,
    };
  }


  componentDidMount() {
    document.addEventListener('scroll', () => {
      this.setState({
        isScrolled: Boolean(window.top.scrollY)
      })
    });
  }

  render() {

    let headerClasses = 'header base-section d-flex align-center justify-between'

    if (this.state.isScrolled) headerClasses += ' header--has-shadow'

    return (
      <header className={headerClasses}>
        <Logo />
        <Menu data={this.props.data} />
        <span className="header__menu-burger" />
        {this.props.isUserLogined
          ? <button className="btn-main header__login-btn" onClick={() => this.props.toggleUserStatus()}>Sign out</button>
          : <button className="btn-main header__login-btn" onClick={() => this.props.togglePopup('login')}>Sign in</button>}
      </header>
    );
  }
}

export default Header;
