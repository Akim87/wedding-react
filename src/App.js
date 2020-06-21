import React from "react";
import "./App.scss";
import Header from "./components/header/header";
import SectionHero from "./components/section-hero/section-hero";
import SectionServices from "./components/section-services/section-services";
import SectionOffers from "./components/section-offers/section-offers";
import SectionCoaches from "./components/section-coaches/section-coaches";
import Footer from "./components/footer/footer";
import Popup from "./components/popup/popup";
import LoginForm from "./components/login-form/login-form";
import EditorForm from "./components/editor-form/editor-form";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sectionsData: [],
      isLoginPopupOpen: false,
      isEditorPopupOpen: false,
      isWrapperLocked: false,
      isDataLoaded: false,
      isUserLogined: false,
      editedSectionName : '',
    };
    this.togglePopup = this.togglePopup.bind(this);
    this.toggleUserStatus = this.toggleUserStatus.bind(this);
    this.getSectionsData = this.getSectionsData.bind(this);
  }

  async componentDidMount() {
    await this.getSectionsData();
    this.setState({isDataLoaded: true});
  }

  async getSectionsData() {
    const response = await fetch(
      "https://us-central1-cms-edu-2020-api.cloudfunctions.net/app/api/v1/section"
    );
    const { content } = await response.json();
    this.setState({sectionsData: content});
  }

  getSectionContent = (type) =>
    this.state.sectionsData.find((section) => section.type === type);

  togglePopup(popupType, sectionName) {
    this.setState({isWrapperLocked: !this.state.isWrapperLocked});

    if (popupType === "login") {
      this.setState({isLoginPopupOpen: !this.state.isLoginPopupOpen});
    }
    if (popupType === "editor") {
      this.setState({
        isEditorPopupOpen: !this.state.isEditorPopupOpen,
        editedSectionName: sectionName,
      });
    }
  }

  toggleUserStatus() {
    this.setState({isUserLogined: !this.state.isUserLogined});
  }

  render() {
    let wrapperClasses = "wrapper";

    if (this.state.isWrapperLocked) wrapperClasses += " wrapper--locked";

    return (
      <div className="App">
        {this.state.isDataLoaded && (
          <div className={wrapperClasses}>
            <Header
              togglePopup={this.togglePopup}
              data={this.getSectionContent("navigation")}
              isUserLogined={this.state.isUserLogined}
              toggleUserStatus={this.toggleUserStatus}
            />
            <SectionHero data={this.getSectionContent("info")} />
            <SectionServices
              data={this.getSectionContent("service")}
              isUserLogined={this.state.isUserLogined}
              togglePopup={this.togglePopup}
            />
            <SectionOffers data={this.getSectionContent("offer")} />
            <SectionCoaches data={this.getSectionContent("coach")} />
            <Footer />
          </div>
        )}
        {this.state.isLoginPopupOpen && (
          <Popup>
            <LoginForm
              togglePopup={this.togglePopup}
              isUserLogined={this.state.isUserLogined}
              toggleUserStatus={this.toggleUserStatus}
            />
          </Popup>
        )}
        {this.state.isEditorPopupOpen && (
          <Popup>
            <EditorForm
              togglePopup={this.togglePopup}
              data={this.getSectionContent(this.state.editedSectionName)}
              getSectionsData={this.getSectionsData}
            />
          </Popup>
        )}
      </div>
    );
  }
}

export default App;
