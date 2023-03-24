export class automationPractice {
    constructor(page){
		this.page = page;
        //radio button elements
        this.rdBtn1 = page.locator('#radio-btn-example > fieldset > label:nth-child(2) > input');
        this.rdBtn2 = page.locator('#radio-btn-example > fieldset > label:nth-child(3) > input');
        this.rdBtn3 = page.locator('#radio-btn-example > fieldset > label:nth-child(4) > input');
        //suggestion elements
        this.sgsTxt = page.locator('#select-class-example #autocomplete');
        this.sgsTxtList = page.locator('#ui-id-1 > li > div');
        //checkbox elements
        this.chbOption1 = page.locator('#checkBoxOption1');
        this.chbOption2 = page.locator('#checkBoxOption2');
        this.chbOption3 = page.locator('#checkBoxOption3');
        //show hide elements
        this.hideBtn = page.locator('#hide-textbox');
        this.showBtn = page.locator('#show-textbox');
        this.hiddenShownTxt = page.locator('#displayed-text');
        //Web Table Fixed Header elements
        this.tableFixedHeader = page.locator('.tableFixHead > #product > tbody > tr').filter({ hasText: 'Joe'}).filter({ hasText: 'Postman'}).filter({ hasText: 'Chennai'});
        this.totalAmount = page.locator('div.totalAmount');
        //iframe elements
        let frame = '#courses-iframe';
        this.iFrame = page.locator(frame);
        this.iframeElement = page.frameLocator(frame).locator('div.pull-left.logo-outer > div');
    }

    async clickRadionBtn3(){
        await this.rdBtn3.setChecked(true);
    }

    async clickRadionBtn2(){
        await this.rdBtn2.setChecked(true);
    }

    async TypeSuggestions(suggestion){
        await this.sgsTxt.fill(suggestion);
    }
    async SelectSuggestion(option){
        await this.sgsTxtList.filter({ hasText: option}).click();
    }
    async Select1stSuggestion(){
        await this.sgsTxtList.nth(0).click();
    }
    async clearSuggestion(){
        await this.sgsTxt.clear();
    }

    async checkAllCheckBoxes(){
        await this.chbOption1.setChecked(true);
        await this.chbOption2.setChecked(true);
        await this.chbOption3.setChecked(true);
    }

    async UnCheckThe1stCheckBox(){
        await this.chbOption1.uncheck();
    }

    async clickOnHide(){
        await this.hideBtn.click();
    }

    async ClickOnShow(){
        await this.showBtn.click();
    }

    async checkIFrame(){
		await this.iFrame.scrollIntoViewIfNeeded();
    }

    async clickLogo(){
        await this.iframeElement.click();
    }
}