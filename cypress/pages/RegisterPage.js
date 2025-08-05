/// <reference types = "Cypress" />

class RegisterPage {
  visitHomePage() {
    cy.visit("https://automationexercise.com");
  }

  verifyHomePageVisible() {
    cy.get("body").should("contain", "AutomationExercise");
  }

  clickSignUpOrLoginButton() {
    cy.get('a[href="/login"]').click();
  }

  verifyNewUserSignUpVisible() {
    cy.contains("New User Signup!").should("be.visible");
  }

  enterNameAndEmail(name, email) {
    cy.get('input[data-qa="signup-name"]').type(name);
    cy.get('input[data-qa="signup-email"]').type(email);
  }

  clickSignUpButton() {
    cy.get('button[data-qa="signup-button"]').click();
  }

  verifyEnterAccInfoVisible() {
    cy.contains("Enter Account Information").should("be.visible");
  }

  fillAccountInformation({password, day, month, year}) {
    cy.get('#id_gender1').check();
    cy.get("#password").type(password);
    cy.get("#days").select(day);
    cy.get("#months").select(month);
    cy.get("#years").select(year);
  }

  checkNewsletters() {
    cy.get("#newsletter").check();
    cy.get("#optin").check();
  }

  fillAddressDetails({
    firstName,
    lastName,
    company,
    address1,
    address2,
    country,
    state,
    city,
    zipcode,
    mobileNumber,
  }) {
    cy.get("#first_name").type(firstName);
    cy.get("#last_name").type(lastName);
    cy.get("#company").type(company);
    cy.get("#address1").type(address1);
    cy.get("#address2").type(address2);
    cy.get("#country").select(country);
    cy.get("#state").type(state);
    cy.get("#city").type(city);
    cy.get("#zipcode").type(zipcode);
    cy.get("#mobile_number").type(mobileNumber);
  }

  clickCreateAccount() {
    cy.get('button[data-qa="create-account"]').click();
  }

  verifyAccountCreated() {
    cy.contains("Account Created!").should("be.visible");
  }

  clickContinue() {
    cy.get('a[data-qa="continue-button"]').click();
  }

  verifyLoggedInAs(username) {
    cy.contains(`Logged in as ${username}`).should("be.visible");
  }

  clickDeleteAccount() {
    cy.get('a[href="/delete_account"]').click();
  }

  verifyAccountDeleted() {
    cy.contains("Account Deleted!").should("be.visible");
  }
}

export default new RegisterPage();
