beforeEach(() => {
    // root-level hook
    // runs before every test block
    cy.fixture('example').then(function(data)
        {
            this.data=data;
        })
  })