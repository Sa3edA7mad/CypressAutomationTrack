class LoginPage{
    userNameField = ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input";
    passwordField = ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input";
    submitBtn = ".oxd-button";
    setUserName(username){
        cy.get(this.userNameField).clear().type(username);
    }
    setPassword(password){
        cy.get(this.passwordField).clear().type(password);
    }
    clickSubmit(){
        cy.get(this.submitBtn).click();
    }

}
export default LoginPage;