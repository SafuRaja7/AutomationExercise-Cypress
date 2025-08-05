/// <reference types = "Cypress"/>

import LoginPage from "../../pages/LoginPage";

describe("User Login Flow", () => {
  let user;

  beforeEach(() => {
    cy.fixture("user").then((userData) => {
      user = {
        ...userData,
      };
      LoginPage.visitHomePage();
    });
  });

  afterEach(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
  });

  it("should log in the user with correct email and password", () => {
    LoginPage.verifyHomePageVisible();
    LoginPage.clickSignUpOrLoginButton();
    LoginPage.verifyLoginToAccountVisible();
    LoginPage.enterEmailAndPass(user.email, user.password);
    LoginPage.clickLoginButton();
    LoginPage.verifyLoggedInAs(user.name);
    LoginPage.clickDeleteAccount();
    LoginPage.verifyAccountDeleted();
  });

  it("should not log in the user with incorrect email", () => {
    LoginPage.verifyHomePageVisible();
    LoginPage.clickSignUpOrLoginButton();
    LoginPage.verifyLoginToAccountVisible();
    LoginPage.enterEmailAndPass("saif1122@gmail.com", "dracar");
    LoginPage.clickLoginButton();
    LoginPage.verifyLoginErrorVisible();
  });

  it("should not log in the user with incorrect password", () => {
    LoginPage.verifyHomePageVisible();
    LoginPage.clickSignUpOrLoginButton();
    LoginPage.verifyLoginToAccountVisible();
    LoginPage.enterEmailAndPass(user.email, "dracar");
    LoginPage.clickLoginButton();
    LoginPage.verifyLoginErrorVisible();
  });
});
