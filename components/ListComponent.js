class ListComponent {

    getList() {
        throw new Error('getList() is not reproduced');
    }

    shouldBeEmpty() {
        return this.getList()
            .should('have.length', 0);
    }

    shouldNotBeEmpty() {
        return this.getList()
            .should('have.length', 0);
    }
}

export default ListComponent;