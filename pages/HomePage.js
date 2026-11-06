import BasePage from '@pages/BasePage';

class HomePage extends BasePage {
    open() {
        this.visit('/');
    }
}

export default new HomePage();