class SearchPage {

    // Locators

    private searchResultLocator: string = "//strong/a[contains(@href, '/?s')]";
    private firstArticleLocator: string = "(//ul[contains(@class, 'search-list')]/li/div)[1]";
    private articleContainerLocator: string = "//div[contains(@itemtype, 'http://schema.org/Article')]";

    // Elements

    private get searchResultElement() {
        return cy.xpath(this.searchResultLocator);
    }

    private get firstArticleElement() {
        return cy.xpath(this.firstArticleLocator);
    }

    private get articleContainerElement() {
        return cy.xpath(this.articleContainerLocator);
    }

    // Methods

    validateSearchResult(expectedText: string) {
        this.searchResultElement.should('have.text', expectedText);
    }

    validateArticleResult(expectedText: string) {
        this.firstArticleElement.click();
        this.articleContainerElement.should('include.text', expectedText);
    }

}

export const searchPage = new SearchPage();