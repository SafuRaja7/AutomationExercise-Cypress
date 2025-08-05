/// <reference types = "Cypress"/>

import RegisterPage from "../../pages/RegisterPage";

describe("User SignUp Flow", () => {
  const user = {
    name: "Saifu",
    email: `saifu_${Date.now()}@testmail.com`,
    password: "Test@1234",
    day: "10",
    month: "March",
    year: "1995",
    firstName: "Saifu",
    lastName: "Raja",
    company: "TestCompany",
    address1: "123 Main Street",
    address2: "Apt 456",
    country: "Australia",
    state: "Punjab",
    city: "Lahore",
    zipcode: "54000",
    mobileNumber: "03001234567",
  };

  beforeEach(() => {
    RegisterPage.visitHomePage();
  });

  afterEach(() => {
    cy.clearAllCookies();
    cy.clearLocalStorage();
  });

  it("should successfullt start the signup process", () => {
    RegisterPage.verifyHomePageVisible();
    cy.wait(2000);
    RegisterPage.clickSignUpOrLoginButton();
    cy.wait(2000);
    RegisterPage.verifyNewUserSignUpVisible();
    cy.wait(2000);

    RegisterPage.enterNameAndEmail(user.name, user.email);
    cy.wait(2000);

    RegisterPage.clickSignUpButton();
    cy.wait(2000);
    RegisterPage.verifyEnterAccInfoVisible();
    cy.wait(2000);

    RegisterPage.fillAccountInformation({
      password: user.password,
      day: user.day,
      month: user.month,
      year: user.year,
    });
    cy.wait(2000);

    RegisterPage.checkNewsletters();
    cy.wait(2000);

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
    cy.wait(2000);

    RegisterPage.clickCreateAccount();
    cy.wait(2000);
    RegisterPage.verifyAccountCreated();
    cy.wait(2000);
    RegisterPage.clickContinue();
    cy.wait(2000);
    RegisterPage.verifyLoggedInAs(user.name);
    cy.wait(2000);
    RegisterPage.clickDeleteAccount();
    cy.wait(2000);
    RegisterPage.verifyAccountDeleted();
    cy.wait(2000);
  });
});
