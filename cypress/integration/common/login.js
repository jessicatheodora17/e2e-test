import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

const objs = require('../../support/login_user_object.js')
const loginObj = new objs()

Given('user go to demo site', ()=>{
    cy.visit('http://thedemosite.co.uk/login.php')
})

When(`user fill username with {string}`, username =>{
    cy
    .get(loginObj.username)
    .click()
    .type(username)
    .wait(2000)
})
And(`user fill password with {string}`, password =>{
    cy
    .get(loginObj.password)
    .click()
    .type(password)
})
And(`user click login button`, ()=>{
    cy
    .get(loginObj.loginButton)
    .click()
    .wait(2000)
})

Then(`user should be able to see message login success`, ()=>{
    cy
    .get(loginObj.blockQuote)
    .contains('**Successful Login**')
})