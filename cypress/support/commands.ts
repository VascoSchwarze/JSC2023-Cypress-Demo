/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }



// Cypress.Commands.add("testid", (testid: string) => {
// 	return cy.get(`[data-testid="${testid}"]`);
// });



import type { RecurseDefaults } from "cypress-recurse";
import * as compareSnapshotCommand from "cypress-image-diff-js/dist/command";
compareSnapshotCommand();


declare global {
	namespace Cypress {
		interface Chainable {
			/**
			 * @param name The name of the snapshots that will be generated
			 * @param testThreshold A number between 0 and 1 that represents the allowed percentage of pixels that can be different between the two snapshots
			 * @param retryOptions @see {@link RecurseDefaults}
			 * @example cy.compareSnapshot('empty-canvas', 0.1)
			 */
			compareSnapshot(
				name: string,
				testThreshold?: number,
				retryOptions?: Partial<typeof RecurseDefaults>
			): Chainable<Element>;

			testid(testid: string): Chainable<JQuery<HTMLElement>>;
		}
	}
}

