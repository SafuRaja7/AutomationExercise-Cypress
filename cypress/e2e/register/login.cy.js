/// <reference types = "Cypress"/>

import LoginPage from "../../pages/LoginPage";

describe("User Login Flow", () => {
  let user;

  beforeEach(() => {
    cy.fixture("user").then((userData) => {
      user = {
        ...userData,
      };
    });
    LoginPage.visitHomePage();
  });

  afterEach(()=>{
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
  })

  it("should log in the user with correct email and password",()=> {
    LoginPage.verifyHomePageVisible();
    LoginPage.clickSignUpOrLoginButton();
    LoginPage.verifyLoginToAccountVisible();
    LoginPage.enterCorrectEmailAndPass(user.email,user.password);
    LoginPage.clickLoginButton();
    LoginPage.verifyLoggedInAs(user.name);
    LoginPage.clickDeleteAccount();
    LoginPage.verifyAccountDeleted();
  });
});
