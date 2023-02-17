class MainPage {

    // Locators

    private reviewsLocator: string = "//ul[contains(@class, 'menu-main')]/li/a[contains(text(), 'ОБЗОРЫ')]";
    private forumLocator: string = "//ul[contains(@class, 'menu-main')]/li/a[contains(text(), 'ФОРУМ')]";
    private qmsLocator: string = "//span[contains(@id, 'events-count')]";
    private searchFieldLocator: string = "//form[contains(@class, 'menu-search')]/input[contains(@class, 'input')]";
    private firstArticleLocator: string = "(//h2[contains(@class, 'post-title')])[1]";

    // Elements

    private get reviewsElement() {
        return cy.xpath(this.reviewsLocator);
    }

    private get forumElement() {
        return cy.xpath(this.forumLocator);
    }

    private get qmsElement() {
        return cy.xpath(this.qmsLocator).should($a => {
            $a.attr('target', '_self')
        });;
    }

    private get searchElement() {
        return cy.xpath(this.searchFieldLocator);
    }

    private get firstArticleElement() {
        return cy.xpath(this.firstArticleLocator);
    }

    // Methods

    goToForum() {
        this.forumElement.click();
    }

    openFirstArticle() {
        this.firstArticleElement.click();
    }

    search(searchQuery: string) {
        this.searchElement.type(`${searchQuery}{enter}`);
    }

    openQMS(title: string) {
        this.qmsElement.click();
        cy.title().should('equal', title);
    }

}

export const mainPage = new MainPage();