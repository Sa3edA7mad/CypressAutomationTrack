import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";


import LoginPage from "@pages/LoginPage"
import DashboardPage from "../../pages/dashboardPage"

let userData;
const ln = new LoginPage();
const db = new DashboardPage();

before(() => {
    cy.clearCookies()
    cy.getCookies().should('be.empty')

    cy.visit("/")

    cy.fixture("testData").then((data) => {
        userData = data;

    })
})

Given(/^The user logs in$/, function () {

    ln.setUserName(userData.userName);
    ln.setPassword(userData.passWord);
    ln.clickSubmit();
    db.verityLogin();

});
When(/^The user navigates to MyInfo screen$/, function () {
    db.clickMyInfoBtn();
    db.validatePersonalInfoScreenOpened()
});
When(/^Changes his nickname$/, function () {
    db.enterNickName(userData.nickname);
});
When(/^Changes his order ID$/, function () {
    db.enterOrderID(userData.orderID)
});
Then(/^The changes are implemented$/, function () {
    db.validOrderID(userData.orderID);
    db.validNickName(userData.nickname);
});