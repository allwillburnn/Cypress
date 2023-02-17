class ForumPage {

    // Locators

    private onlineStatsLocator: string = "//table[contains(@class, 'ipbtable')]/tbody/tr[contains(@id, 'ShowUsersInOnline')]";
    private qmsLocator: string = "//p/a[contains(text(), 'Сообщения')]";
    private submitButtonLocator: string = '[style="margin:0 5em 0 0"] > #create-thread-submit';
    private newChatLocator: string = "//a[@class='btn on-show-sidebar']";
    private firstForumCategoryLocator: string = "(//table[contains(@class, 'ipbtable')]/tbody/tr[2]/td[2]/b)[1]";
    private firstForumTopicLocator: string = "(//a[contains(@title, 'Тема создана')])[1]";
    private fastResponceLocator: string = "//a[contains(text(), 'БЫСТРЫЙ ОТВЕТ')]";
    private commentTextFieldLocator: string = "//textarea[contains(@name, 'post')]";
    private sendForumCommentButtonLocator: string = "//div[@align='center']/div/input[@name='submit']";

    // Elements

    private get onlineStatsElement() {
        return cy.xpath(this.onlineStatsLocator);
    }

    private get qmsElement() {
        return cy.xpath(this.qmsLocator).should($a => {
            $a.attr('target', '_self')
        });
    }

    private get firstForumCategoryElement() {
        return cy.xpath(this.firstForumCategoryLocator);
    }

    private get firstForumTopicElement() {
        return cy.xpath(this.firstForumTopicLocator);
    }

    private get fastResponceElement() {
        return cy.xpath(this.fastResponceLocator);
    }

    private get commentTextFieldElement() {
        return cy.xpath(this.commentTextFieldLocator);
    }

    private get sendForumCommentButtonElement() {
        return cy.xpath(this.sendForumCommentButtonLocator);
    }

    private get newChatElement() {
        return cy.xpath(this.newChatLocator);
    }


    private get submitButtonElement() {
        return cy.get(this.submitButtonLocator);
    }

    // Methods

    openQMS(title: string) {
        this.qmsElement.click();
        cy.title().should('equal', title);
    }

    verifyOnlineStatsIsExist() {
        return this.onlineStatsElement.should('be.hidden');
    }

    createNewChat(title: string) {
        this.openQMS(title);
        this.newChatElement.click();
    }

    checkSubmitButtonIsClickable(title: string) {
        this.submitButtonElement.should('be.enabled');
    }

    createNewForumPost(comment: string) {
        this.firstForumCategoryElement.click();
        this.firstForumTopicElement.click();
        this.fastResponceElement.click();
        this.commentTextFieldElement.type(comment);
        this.sendForumCommentButtonElement.should('be.enabled');
    }

}

export const forumPage = new ForumPage();