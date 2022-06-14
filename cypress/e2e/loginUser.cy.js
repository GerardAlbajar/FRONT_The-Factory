describe("Given the The Astro Factory webpage", () => {
  describe("When the user 'gerard' logs in", () => {
    it("Then it should navigate to /thefactory path", () => {
      const username = "cypress";
      const password = "cypress";

      cy.visit(
        "https://gerard-albajar-front-final-project-202204-bcn.netlify.app/home"
      );

      cy.get("button").contains("Log-In").click();

      cy.get("label").contains("Username").type(username);
      cy.get("label").contains("Password").type(`${password}{enter}`);

      cy.get(`[class="top-nav"]`).contains("Explore").click();

      cy.get(`[class="main-list"]`).contains("gerard");
      cy.get("p").contains("Next User Collection").click();
      cy.get(`[class="main-list"]`).contains("hola");
      cy.get("p").contains("Previous User Collection").click();
      cy.get(`[class="main-list"]`).contains("gerard");

      cy.get(`[class="top-nav"]`).contains("Your Collection").click();

      cy.get("button").contains("ASSEMBLE A MUTANT ASTRO").click();

      cy.get("ul").should("contain.text", "VUE ASTRO");
      cy.get("li").contains("VUE ASTRO").click();

      cy.get("ul").should("contain.text", "REACT ROCKET");
      cy.get("li").contains("REACT ROCKET").click();

      cy.get("ul").should("contain.text", "ANGULAR NAUT");
      cy.get("li").contains("ANGULAR NAUT").click();

      cy.get("label")
        .contains("Mutant Astro Name:")
        .type("MUTANT ADDED FROM CYPRESS {enter}");

      cy.get(`[class="top-nav"]`).contains("Your Collection").click();

      cy.get("ul").should("contain.text", "Id: #1655218590777");
      cy.get("li").contains("Id: #1655218590777").click();

      cy.visit(
        "https://gerard-albajar-front-final-project-202204-bcn.netlify.app/details/astros/62a8a1a203a3f00b3dbfdf9b"
      );

      cy.get("button").contains("Edit Item").click();

      cy.get("ul").should("contain.text", "ANGULAR ROCKET");
      cy.get("li").contains("ANGULAR ROCKET").click();

      cy.get("ul").should("contain.text", "JQUERY ASTRO");
      cy.get("li").contains("JQUERY ASTRO").click();

      cy.get("ul").should("contain.text", "REACT NAUT");
      cy.get("li").contains("REACT NAUT").click();

      cy.get("label")
        .contains("Mutant Astro Name:")
        .click()
        .focused()
        .clear()
        .type("MUTANT EDITED FROM CYPRESS {enter}");

      cy.get(`[class="top-nav"]`).contains("Astros").click();

      cy.get("button").contains("VUE").click();

      cy.get("ul").should("contain.text", "VUE ROCKET");
      cy.get("li").contains("VUE ROCKET").click();

      cy.visit(
        "https://gerard-albajar-front-final-project-202204-bcn.netlify.app/details/astroparts/629e513c85d60f0e2f74ec42"
      );

      // cy.get("button").contains("Add Item").click();

      // cy.get(`[class="top-nav"]`).contains("Explore").click();
      // cy.get(`[class="top-nav"]`).contains("The Factory").click();

      // cy.get(`[class="top-nav"]`).contains("Your Collection").click();

      // cy.get("ul").contains("VUE ROCKET").click(`[class="delete"]`);
    });
  });
});
