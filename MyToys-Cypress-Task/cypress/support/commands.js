// ***********************************************
// This example commands.js shows you how to
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
// ***********************************************
// This example commands.js shows you how to
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
Cypress.Commands.add('login', (email, password) => { 
    cy.get('#inputEmail').type(email)
    cy.get('#inputPassword').type(password)
    cy.get('#btnLogin').click();
})
Cypress.Commands.add('getByClass', (selector)=> {
    return cy.get(`.${selector}`)
  });
  
  Cypress.Commands.add('getByID', (selector)=> {
    return cy.get(`#${selector}`)
  });
  
  Cypress.Commands.add('getByPlaceholder', (selector, ...args)=> {
    return cy.get(`input[placeholder="${selector}"]`, ...args);
  });

 
  Cypress.Commands.add('getByName', (selector, ...args)=> {
    return cy.get(`[name="${selector}"]`, ...args);
  });
  
  Cypress.Commands.add('getByTextAreaName', (selector, ...args)=> {
    return cy.get(`textarea[name="${selector}"]`, ...args);
  });

  Cypress.Commands.add('getByAriaLabel', (selector, ...args)=> {
    return cy.get(`[aria-label="${selector}"]`, ...args);
  });
  
  Cypress.Commands.add('getBySpanAriaLabel', (selector, ...args)=> {
    return cy.get(`span[aria-label="${selector}"]`, ...args);
  });
  
  Cypress.Commands.add('getByButtonId', (selector, ...args)=> {
    return cy.get(`button[id="${selector}"]`, ...args);
  });

  Cypress.Commands.add('getByDataIcon', (selector, ...args)=> {
    return cy.get(`[data-icon="${selector}"]`, ...args);
  });

  Cypress.Commands.add('getByDataId', (selector, ...args)=> {
    return cy.get(`[data-id="${selector}"]`, ...args);
  });
  
  Cypress.Commands.add('getBySVGDataIcon', (selector, ...args)=> {
    return cy.get(`[data-icon="${selector}"]`, ...args);
  });
  
  Cypress.Commands.add('getByDataMenuID', (selector, ...args)=> {
    return cy.get(`[data-menu-id="${selector}"]`, ...args);
  });
  
  Cypress.Commands.add('getByHref', (selector, ...args)=> {
    return cy.get(`[href="${selector}"]`, ...args);
  });
  
  Cypress.Commands.add('getByAHref', (selector, ...args)=> {
    return cy.get(`a[href="${selector}"]`, ...args);
  });
  
  Cypress.Commands.add('getByTitle', (selector, ...args)=> {
    return cy.get(`[title="${selector}"]`, ...args);
  });
  
  Cypress.Commands.add('getByTitleRetryUser', (selector, ...args)=> {
    return cy.get(`[title="retry SMITH - ${selector}"]`, ...args);
  });
  
  Cypress.Commands.add('getByOwnerTitle', (selector, ...args)=> {
    return cy.get(`[title="JOHN SMITH - ${selector}"]`, ...args);
  });

  Cypress.Commands.add('getByCSS', (selector, ...args)=> {
    return cy.get(`${selector}`, ...args);
  });
  
  Cypress.Commands.add('forceVisit', url => {
    cy.window().then(win => {
        return win.open(url, '_self'); 
      });
  });

  const origLog = Cypress.log;
Cypress.log = function (opts, ...other) {
  if (opts.displayName === 'script' || opts.name === 'request') {
    return;
  }
  return origLog(opts, ...other);
};