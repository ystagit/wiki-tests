import BasePage from '@pages/BasePage';
import SearchForm from '@components/search/SearchForm';
import SearchResult from '@components/search/SearchResult';

const SEARCH_PAGE_PATH = '/wiki/Спеціальна:Пошук';

class SearchPage extends BasePage {
    searchForm = new SearchForm();
    searchResult = new SearchResult();

    open() {
        this.visit(SEARCH_PAGE_PATH);
    }

    get searchForm() {
        this.searchForm;
    }

    get searchResult() {
        this.searchResult;
    }
}

export default new SearchPage();