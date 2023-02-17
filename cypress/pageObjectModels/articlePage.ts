class ArticlePage {

    // Locators

    private openCommentsLocator: string = "//a[contains(text(), 'Комментарии')]";
    private writeCommentTextFieldLocator: string = "//textarea[contains(@placeholder, 'Важно')]";
    private submitButtonLocator: string = "//button[contains(@type, 'submit')]";
    private noticeLocator: string = "//a[contains(@id, 'ok-commentNotice')]";

    // Elements

    private get openCommentsElement() {
        return cy.xpath(this.openCommentsLocator);
    }

    private get writeCommentTextFieldElement() {
        return cy.xpath(this.writeCommentTextFieldLocator);
    }

    private get submitButtonElement() {
        return cy.xpath(this.submitButtonLocator);
    }

    private get noticeElement() {
        return cy.xpath(this.noticeLocator);
    }

    // Methods

    commentPost(comment: string) {
        this.openCommentsElement.click();
        this.writeCommentTextFieldElement.click();
        this.noticeElement.click();
        this.writeCommentTextFieldElement.type(comment);
        return this.submitButtonElement.should('be.enabled');
    }

}

export const articlePage = new ArticlePage();