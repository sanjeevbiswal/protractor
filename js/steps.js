module.exports=function () {
    this.When(/^i navigate to homepage of the application$/, function() {
        browser.get("https://semaphoreci.com/community/tutorials/getting-started-with-protractor-and-cucumber");

    });
}
