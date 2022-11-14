/// <reference types="Cypress" />

import { Toys } from "../../cypress/fixtures/TestData";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
describe("Test the MyToys Cypress Task", () => {
  
  it("Positive Test Case of Search and Add To Cart Product", async() => {

    cy.visit("/");
    cy.getByID("onetrust-accept-btn-handler").click();
    cy.getByPlaceholder("Wonach suchst du?")
      .type(Toys.searchName)
      .type("{enter}");
      cy.wait(2000)
    cy.getByName("select").first().select("Höchster Preis");

    cy.getByClass("prod-tile__price-regular").each(($el, index, list) => {
      if (index == 5) {
        return false;
      }
      const value = $el.text();
      const STRvalue = value.slice(0, 4);
      const Numvalue = parseFloat(STRvalue);
      cy.log( 'index'+index+ ':' + 'Value'+ Numvalue)
    });
    cy.getByClass('js-nfh-dropdown').contains('Preis').click();
    cy.getByClass('js-input-text-price-start').first().clear().type(Toys.startPrice)
    cy.getByClass('js-input-text-price-end').first().clear().type(Toys.endPrice);
    cy.getByClass('js-price-filter-submit').first().click();
    cy.wait(2000);
    cy.getByClass('js-nfh-submit').click();
    cy.getByClass('js-prodlink').each(($el,index)=>{
      if(index ==5){
        return false
      }

      if(index == 3){
        cy.wrap($el).click();
      }
    })
    async function Description(){
      return new Cypress.Promise((resolve)=> {
        cy.getByClass('prod-info__name').invoke('text').then((Desc)=>{
          resolve(Desc)
        })
      })
    }
    let FirstDescription = await Description();
    cy.getByClass('btn--add-to-cart').first().click();
    

    async function ProdDesc(){
      return new Cypress.Promise((resolve)=> {
        cy.getByClass('layer__prod-name').first().invoke('text').then((SecondDesc)=>{
          resolve(SecondDesc)
        })
      })
    }
    let SecondDescription = await ProdDesc();
    expect(FirstDescription).contains(SecondDescription)
  });
  
});
