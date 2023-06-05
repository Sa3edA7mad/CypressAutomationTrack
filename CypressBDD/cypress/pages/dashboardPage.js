class DashboardPage{
    labelMsg = ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module";
    myInfoBtn = ":nth-child(6) > .oxd-main-menu-item > .oxd-text";
    personalInfoTxt = ".orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6"
    verityLogin(){
        cy.get(this.labelMsg).should('have.text','Dashboard')
    }

    clickMyInfoBtn(){
        cy.get(this.myInfoBtn).click()
    }
    validatePersonalInfoScreenOpened(){
        cy.get(this.personalInfoTxt).should('be.visible');
    }
    enterNickName(nickname){
        cy.get('div').find('label').contains('Nickname').parent().parent().find('input').clear().type(nickname)
    }
    validNickName(nickname){
        cy.get('div').find('label').contains('Nickname').parent().parent().find('input').should('have.value',nickname);
    }
    enterOrderID(orderID){
        cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type(orderID)
    }
    validOrderID(orderID){
        cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.value',orderID);
    }
}
export default DashboardPage;