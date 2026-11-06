import ListComponent from '@components/ListComponent';

class SearchResult extends ListComponent {

    getList() {
        return cy.get('ul.mw-search-results li.mw-search-result');
    }

    titleShouldContain(text) {
        this.getList().each((item, index) => {
            cy.wrap(item)
                .get('.mw-search-result-heading')
                .should('contain.text', text);
        })
    }
}

export default SearchResult;