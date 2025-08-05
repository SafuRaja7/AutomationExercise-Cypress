/// <reference types = "Cypress" />

class LoginPage {
  visitHomePage() {
    cy.visit("https://automationexercise.com");
  }

  verifyHomePageVisible() {
    cy.get("body").should("contain", "AutomationExercise");
  }

  clickSignUpOrLoginButton() {
    cy.get('a[href="/login"]').click();
  }

  verifyLoginToAccountVisible() {
    cy.contains("Login to your account").should("be.visible");
  }

  enterCorrectEmailAndPass(email, password) {
    cy.get('input[data-qa="login-email"]').type(email);
    cy.get('input[data-qa="login-password"]').type(password);
  }

  clickLoginButton() {
    cy.get('button[data-qa="login-button"]').click();
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


export default new LoginPage();