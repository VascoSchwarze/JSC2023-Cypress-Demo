describe("Live demo spec", () => {
	// it("Does not accept invalid input", () => {
	// 	cy.visit("http://localhost:3000");
	// 	cy.get("[data-testid=lat-input]").clear().type("abc");
	// 	cy.get("[data-testid=submit-btn]").should("be.disabled");
	// 	cy.get("[data-testid=lat-input]").clear().type("12");

	// 	cy.get("[data-testid=lon-input]").clear().type("abc");
	// 	cy.get("[data-testid=submit-btn]").should("be.disabled");
	// 	cy.get("[data-testid=lon-input]").clear().type("12");
	// 	cy.get("[data-testid=submit-btn]").should("not.be.disabled");
	// });

	// it("Shows the correct data", () => {
	// 	const lon = "13";
	// 	const lat = "51";

	// 	cy.intercept(
	// 		"GET",
	// 		`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`,
	// 		{
	// 			statusCode: 200,
	// 			fixture: "weather.json",
	// 		}
	// 	).as("weatherRequest");

	// 	cy.visit("http://localhost:3000");
	// 	cy.get("[data-testid=lat-input]").clear().type(lat);
	// 	cy.get("[data-testid=lon-input]").clear().type(lon);
	// 	cy.get("[data-testid=submit-btn]").click();

	// 	cy.wait("@weatherRequest");
	// 	cy.get("[data-testid=temperature]").should("contain", "14.9 °C");
	// 	cy.get("[data-testid=weather-icon]").should("contain", "☁️");
	// });

	// it("Shows an error when receiving an error response", () => {
	// 	const lon = "13";
	// 	const lat = "100";

	// 	cy.intercept(
	// 		"GET",
	// 		`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`,
	// 		{
	// 			statusCode: 400,
	// 			fixture: "error.json",
	// 		}
	// 	).as("weatherRequest");

	// 	cy.visit("http://localhost:3000");
	// 	cy.get("[data-testid=lat-input]").clear().type(lat);
	// 	cy.get("[data-testid=lon-input]").clear().type(lon);
	// 	cy.get("[data-testid=submit-btn]").click();

	// 	cy.wait("@weatherRequest");
	// 	cy.get("[data-testid=error]").should(
	// 		"contain",
	// 		"Latitude must be in range of -90 to 90°. Given: 100.0."
	// 	);
	// });

	// it("Shows the correct icon", () => {
	// 	const lon = "13";
	// 	const lat = "51";

	// 	cy.intercept(
	// 		"GET",
	// 		`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`,
	// 		{
	// 			statusCode: 200,
	// 			body: {
	// 				current_weather: {
	// 					temperature: 15,
	// 					weathercode: 0,
	// 				},
	// 			},
	// 		}
	// 	).as("sunnyRequest");

	// 	cy.visit("http://localhost:3000");
	// 	cy.get("[data-testid=lat-input]").clear().type(lat);
	// 	cy.get("[data-testid=lon-input]").clear().type(lon);
	// 	cy.get("[data-testid=submit-btn]").click();

	// 	cy.wait("@sunnyRequest");

	// 	cy.get("[data-testid=weather-section]").compareSnapshot("Sunny", 0.03);
	// });
});
