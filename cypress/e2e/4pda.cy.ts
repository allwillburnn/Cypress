import { articlePage } from "../pageObjectModels/articlePage";
import { mainPage } from "../pageObjectModels/mainPage";
import { forumPage } from "../pageObjectModels/forumPage";
import { qmsPage } from "../pageObjectModels/qmsPage";
import { searchPage } from "../pageObjectModels/searchPage";

describe('4PDA main features', () => {

  beforeEach(() => {
    cy.setCookie('member_id', '11206283', { domain: ".4pda.to", httpOnly: true, sameSite: "lax" });
    cy.setCookie('pass_hash', 'd78ee7d03dd57b795bb6e74ee23e5c6a', { domain: '.4pda.to', httpOnly: true, sameSite: "lax" });
    cy.getCookie('member_id').should('have.property', 'value', '11206283');

    cy.visit('/');
  })

  const qmsTitle: string = "QMS .:. 4PDA";
  const comment: string = "Some comment";

  it("Check that online users statistic is hidden from user", () => {

    mainPage.goToForum();
    forumPage.verifyOnlineStatsIsExist();

  })

  /* Seems like mobile version have problems with chromium or in general with playwright.
  Chat window is stretched and elements is not clickable. On actual mobile it works fine.
  */

  it("Check that logged user can send QMS from main page", () => {

    qmsPage.createNewChat(qmsTitle);
    forumPage.checkSubmitButtonIsClickable(qmsTitle);

  })

  // Excellent number of new pages after each action...  

  it("Check that logged user can send QMS from forum page", () => {

    mainPage.goToForum();
    forumPage.createNewChat(qmsTitle);

    forumPage.checkSubmitButtonIsClickable(qmsTitle);

  })

  it("Check that search query work correctly", () => {

    const searchPageTitle: string = "Поиск - 4PDA";
    const searchQueryArray: string[] = ["Samsung", "Xiaomi   ", "Apple"];
    const searchQuery: string = searchQueryArray[Math.floor(Math.random() * searchQueryArray.length)];

    mainPage.search(searchQuery);
    cy.title().should('equal', searchPageTitle);

    searchPage.validateSearchResult(searchQuery.trim());
    searchPage.validateArticleResult(searchQuery.trim());

  })

  it("Check that logged user can comment article post", () => {

    // If it was a test build, I will add an actual comment post and check if a comment will appear.

    mainPage.openFirstArticle();
    articlePage.commentPost(comment);

  })

  // Warning! Test can fail if topic was closed or user cant post in it.

  // OK

  it("Check that logged user can comment forum post", () => {

    // If it was a test build, I will add an actual comment post and check if a comment will appear.

    mainPage.goToForum();
    forumPage.createNewForumPost(comment);

  })


});