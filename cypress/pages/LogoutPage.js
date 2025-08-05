/// <reference types = "Cypress" />

class LogOuPage {
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

  enterEmailAndPass(email, password) {
    cy.get('input[data-qa="login-email"]').type(email);
    cy.get('input[data-qa="login-password"]').type(password);
  }

  clickLoginButton() {
    cy.get('button[data-qa="login-button"]').click();
  }

  verifyLoggedInAs(username) {
    cy.contains(`Logged in as ${username}`).should("be.visible");
  }

  clickLogOutButton() {
    cy.get('a[href="/logout"]').click();
  }

  verifyUserNavigatedToLogin() {
    cy.contains("Login to your account").should("be.visible");
  }
}

export default new LogOuPage();
