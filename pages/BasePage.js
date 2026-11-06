const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36';

class BasePage {

    visit(path = '/') {
        cy.visit(encodeURI(path), {
            headers: {
                'User-Agent': USER_AGENT
            }
        });
    }

    get title() {
        return cy.title();
    }

    get url() {
        return cy.url();
    }
}

export default BasePage;