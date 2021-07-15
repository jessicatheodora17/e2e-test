import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

const objs = require('../../support/add_user_object.js')
const obj = new objs()

Given('I go to demo site', ()=>{
    cy.visit('http://thedemosite.co.uk/savedata.php')
})

When(`I fill username with {string}`, username =>{
    cy
    .get(obj.username)
    .click()
    .type(username)
    .wait(2000)
})
And(`I fill password with {string}`, password =>{
    cy
    .get(obj.password)
    .click()
    .type(password)
})
And(`I click add button`, ()=>{
    cy
    .get(obj.addButton)
    .click()
    .wait(2000)
})

Then(`I should be able to see my username and password`, ()=>{
    cy
    .get(obj.blockQuote)
    .contains('jessicatest')
})