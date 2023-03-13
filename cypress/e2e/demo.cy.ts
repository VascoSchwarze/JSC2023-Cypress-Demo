describe("Demo spec", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/");
	});

	it("Displays 0 at the start", () => {
		cy.get("[data-testid=counter]")
			.should("have.text", "0");
	});

	it("Increments the counter", () => {
		cy.get("[data-testid=counter-btn]").click();
		cy.get("[data-testid=counter]")
			.should("have.text", "1");
	});
});
