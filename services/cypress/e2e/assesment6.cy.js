describe("First Test", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/frontend/");
  });

  it("should display the form", () => {
    cy.get(".register-form").should("exist");
    cy.get("#add-user-form").should("exist");
  });

  it("should have input fields", () => {
    cy.get("#fname").should("exist");
    cy.get("#email").should("exist");
    cy.get("#cohortNumber").should("exist").and("be.visible");
  });

  it("selects elements by parent element", () => {
    cy.get("form input");
  });

  it("selects elements by type", () => {
    cy.get('[type="email"]');
    cy.get('[type="text"]');
  });

  it("should have a clickable submit button", () => {
    cy.get("button").click();
  });

  it("should show an error message for invalid email format", () => {
    const invalidEmail = "invalidemail";

    cy.get("#email").type(invalidEmail);
  });

  it("should fill out the registration form and submit", () => {
    cy.get("#fname").type("john"), cy.get("#email").type("jid.kim@thejitu.com");
    cy.get("#cohortNumber").type("17");
  });

  it("should style error messages with red color", () => {
    cy.get(".error-message").should("have.css", "color", "rgb(255, 0, 0)");
  });
});
