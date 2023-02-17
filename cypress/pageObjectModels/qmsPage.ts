import { mainPage } from "./mainPage";

class QmsPage {

    // Locators

    private submitButtonLocator: string = '[style="margin:0 5em 0 0"] > #create-thread-submit';
    private newChatLocator: string = "(//a[@title='Начать новый диалог'])[1]";

    // Elements

    private get submitButtonElement() {
        return cy.get(this.submitButtonLocator);
    }

    private get newChatElement() {
        return cy.xpath(this.newChatLocator);
    }

    // Methods

    createNewChat(title: string) {
        mainPage.openQMS(title);
        this.newChatElement.click();
    }

    checkSubmitButtonIsClickable(title: string) {
        mainPage.openQMS(title);
        this.submitButtonElement.should('be.enabled');
    }

}

export const qmsPage = new QmsPage();