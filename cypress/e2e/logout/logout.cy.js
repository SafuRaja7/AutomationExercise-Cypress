/// <reference types = "Cypress"/>

import LogOuPage from "../../pages/LogoutPage";

describe("User Logout Flow", () => {
  let user;

  beforeEach(() => {
    cy.fixture("user").then((userData) => {
      user = {
        ...userData,
      };
      LogOuPage.visitHomePage();
    });
  });

  afterEach(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
  });


  it("should logout successfully", ()=>{
    LogOuPage.visitHomePage();
    LogOuPage.verifyHomePageVisible();
    LogOuPage.clickSignUpOrLoginButton();
    LogOuPage.verifyLoginToAccountVisible();
    LogOuPage.enterEmailAndPass("saifsaifsaifsaif11223344@gmail.com","dracaryss77AA");
    LogOuPage.clickLoginButton();
    LogOuPage.verifyLoggedInAs("Raja");
    LogOuPage.clickLogOutButton();
    LogOuPage.verifyUserNavigatedToLogin();
  });

  
});
