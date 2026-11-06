import HomePage from '@pages/HomePage';
import SearchPage from '@pages/SearchPage';

describe("Wikipedia - Search", () => {

    it('Should display the search value', () => {
        SearchPage.open();
        SearchPage.searchForm.enterSearchInput('Київ');
        SearchPage.searchForm.searchInput.should('have.value', 'Київ');
    });

    it('Should get the result when pressing on "Знайти"', () => {
        SearchPage.open();
        SearchPage.searchForm.searchOnButton('Київ');
        SearchPage.searchResult.shouldNotBeEmpty();
        SearchPage.searchResult.titleShouldContain('Київ');
    });

    it('Should get the result when pressing on "Enter"', () => {
        SearchPage.open();
        SearchPage.searchForm.searchOnEnter('Київ');
        SearchPage.searchResult.shouldNotBeEmpty();
        SearchPage.searchResult.titleShouldContain('Київ');
    });

    it('Should clear the search value', () => {
        SearchPage.open();
        SearchPage.searchForm.searchOnButton('Київ');
        SearchPage.searchForm.clearSearchValue();
        SearchPage.searchForm.searchInput.should('have.value', '');
    });

    it('Should get the empty result when searching the blank value', () => {
        SearchPage.open();
        SearchPage.searchForm.searchOnButton('Київ');
        SearchPage.searchResult.shouldNotBeEmpty();
        SearchPage.searchResult.titleShouldContain('Київ');
        SearchPage.searchForm.searchEmptyValue();
        SearchPage.searchResult.shouldBeEmpty();
    });

    it('Should get the empty result when searching the non-existent word', () => {
        SearchPage.open();
        SearchPage.searchForm.searchOnButton('sdfasdf');
        SearchPage.searchForm.searchInput.should('have.value', 'sdfasdf');
        SearchPage.searchResult.shouldBeEmpty();
    });

    it('Should get the result when searching the word with the special characters"', () => {
        SearchPage.open();
        SearchPage.searchForm.searchOnButton('&_Львів?');
        SearchPage.searchResult.shouldNotBeEmpty();
        SearchPage.searchResult.titleShouldContain('Львів');
    });
});