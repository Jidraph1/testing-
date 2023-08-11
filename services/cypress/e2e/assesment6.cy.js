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

  it('should submit the form with valid data', () => {
    cy.get('#fname').type('John Doe');
    cy.get('#email').type('john.doe@thejitu.com');
    cy.get('#cohortNumber').type('17');
    cy.get('#add-user-form').submit();

  
  });
  

  // it("should have input placeholder", () => {
  //   // cy.get(" form input placeholder").should("exist");
  //   // cy.get("#email").should("exist");
  //   // cy.get("#cohortNumber").should("exist").and("be.visible");
  // });

  // it('should show an error message for invalid email format', () => {
  //   cy.get('#email').type('invalidemail');
  //   cy.get('#email-error').should('contain', 'Invalid email format. Please use fname.lname@thejitu.com.');
  // });

  // it('should show an error message for invalid cohort number format', () => {
  //   cy.get('#cohortNumber').type('invalidcohort');
  //   cy.get('#cohortNumber-error').should('have.text', 'Invalid cohort number format. Please use a valid number.');
  // });


