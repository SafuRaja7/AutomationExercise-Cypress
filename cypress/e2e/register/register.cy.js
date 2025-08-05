/// <reference types = "Cypress"/>

import RegisterPage from "../../pages/RegisterPage";

describe("User SignUp Flow", () => {
  let user;

  beforeEach(() => {
    cy.fixture("user").then((userData) => {
      user = {
        ...userData,
      };
    });
    RegisterPage.visitHomePage();
  });

  afterEach(() => {
    cy.clearAllCookies();
    cy.clearLocalStorage();
  });

  it("should signup the user", () => {
    RegisterPage.verifyHomePageVisible();
    RegisterPage.clickSignUpOrLoginButton();
    RegisterPage.verifyNewUserSignUpVisible();

    RegisterPage.enterNameAndEmail(user.name, user.email);

    RegisterPage.clickSignUpButton();
    RegisterPage.verifyEnterAccInfoVisible();

    RegisterPage.fillAccountInformation({
      password: user.password,
      day: user.day,
      month: user.month,
      year: user.year,
    });

    RegisterPage.checkNewsletters();

    RegisterPage.fillAddressDetails({
      firstName: user.firstName,
      lastName: user.lastName,
      company: user.company,
      address1: user.address1,
      address2: user.address2,
      country: user.country,
      state: user.state,
      city: user.city,
      zipcode: user.zipcode,
      mobileNumber: user.mobileNumber,
    });

    RegisterPage.clickCreateAccount();
    RegisterPage.verifyAccountCreated();
    RegisterPage.clickContinue();
    RegisterPage.verifyLoggedInAs(user.name);
    RegisterPage.clickDeleteAccount();
    RegisterPage.verifyAccountDeleted();
  });
});
