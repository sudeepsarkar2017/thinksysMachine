var customlocators = require('D:/protractor/Demo_thinksys/util/customlocators.js');
var site = require('../json/objects.json');

describe('angularjs homepage todo list', function () {
    // browser.ignoreSynchronization=true;

    // beforeEach(function () {
    //     browser.get('')
    // }) ;


    // it('should add a todo', function() {
    //     browser.get('https://angularjs.org');
    //
    //
    //     element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    //     element(by.css('[value="add"]')).click();
    //
    //     var todoList = element.all(by.repeater('todo in todoList.todos'));
    //     expect(todoList.count()).toEqual(3);
    //     expect(todoList.get(2).getText()).toEqual('write first protractor test');
    //
    //     // You wrote your first test, cross it off the list
    //     todoList.get(2).element(by.css('input')).click();
    //     var completedAmount = element.all(by.css('.done-true'));
    //     expect(completedAmount.count()).toEqual(2);
    // });
    //


    // it('test script', function () {
    //     browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
    //      browser.sleep(2000);
    //     allure.createStep('Filling data', function () {
    //         element (by.model('Auth.user.name')).sendKeys('angular');
    //          browser.sleep(2000);
    //         element (by.model('Auth.user.password')).sendKeys('password');
    //          browser.sleep(2000);
    //         element (by.model('model[options.key]')).sendKeys('angular');
    //         element(by.buttonText("Login"));
    //
    //
    //         // browser.sleep(4000);
    //         // element (by.model('Auth.login()')).click();
    //         browser.sleep(3000);
    //
    //         // var homeText=element(by.tagName('h1')).getText();
    //         // homeText.then(function (text) {
    //         //    expect(text).toBe('Home');
    //         // });
    //
    //         // let homeText = element.all(by.xpath(@class="ng-scope"])).first();
    //
    //     })});


    it('Login', function () {

        // browser.get('https://weather.com/en-IN');
        browser.get(site.urls);
        element(by.model('query')).sendKeys('test' + protractor.Key.ENTER);
        browser.wait(element(by.xpath(".//*[@title='Test Freelancers']")));

        browser.getTitle().then(function (title) {
            // expect(title).toEqual('imakerman: Home');   console.log();
            console.log(title);

        });

        element(by.id('oSearchContractorsHeader')).getText().then(function (text) {

            expect(text).toContain('Freelancers');


        });

        //expect(element(by.xpath(".//*[@class='ellipsis m-0-top-bottom'")).getText()).toBe('Test Freelancers');


        //  // element(by.ngClick('headerDrilldownVm.signIn()')).click(); //clicking on login
        //  // element(by.xpath(@label="Email Address")).
        //
        //  browser.findElement(by.xpath("//*[@label='Email Address']")).sendKeys('xyz@gmail.com'+protractor.Key.TAB);
        //  //browser.wait(3000);
        //  browser.findElement(by.xpath("//*[@label='Password']")).sendKeys('test123!@#'+protractor.Key.ENTER);
        //  browser.wait( browser.findElement(by.xpath("//*[@class='btn btn-disabled sign-button login-button']")));
        // // var input = ('test123!@#');
        //  //$(".")
        // // console.log("dsfsdfsdf");
        //  //browser.findElement(by.xpath("//*[@label='Password']")).sendKeys(protractor.Key.ENTER);
        //
        //  browser.findElement(by.xpath("//*[@class='btn btn-disabled sign-button login-button']")).click();
        //  // element(by.buttonText('Log In')).click();
        //  browser.sleep(30000);
        // // element(by.binding("My Profile")).getText().then(function(text){


//            console.log(text);

        //      });

    });


    // it ('calculator test', function () {
    //
    //     browser.get('')
    //
    // });
});
