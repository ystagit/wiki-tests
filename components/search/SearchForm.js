class SearchForm {

    get searchInput() {
        return cy.get('#mw-search-top-table #searchText input');
    }

    get button() {
        return cy.get('#mw-search-top-table button[type="submit"]');
    }

    visible() {
        return cy.get('body').then(($body) => {
            return $body.find('#search input').is(':visible');
        });
    }

    clearSearchValue() {
        return cy.get('#searchText .oo-ui-indicator-clear').click();
    }

    enterSearchInput(text) {
        this.searchInput
            .clear()
            .type(text);
    }

    searchEmptyValue() {
        this.searchInput.clear();
        this.button.click();
    }

    searchOnButton(text) {
        this.enterSearchInput(text);
        this.button.click();
    }

    searchOnEnter(text) {
        this.enterSearchInput(text + '{enter}');
    }

}


export default SearchForm;