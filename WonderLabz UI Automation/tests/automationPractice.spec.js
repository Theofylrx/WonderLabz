import { test, expect } from '@playwright/test';
import { NavigateHelper } from '../helper/NavigateHelper';
import { automationPractice } from '../Pages/automationPractice';

test.beforeEach(async({page, baseURL}) => {
    const navigate = new NavigateHelper(page, baseURL);
	await navigate.gotourl();
});

test('Rahul Shetty Practice', async ({ page }) => {
	//automationPractice page declaration
	const rahulShettyPage = new automationPractice(page);
	//radio button tests
	await rahulShettyPage.clickRadionBtn3();
	expect(await rahulShettyPage.rdBtn3.isChecked()).toBeTruthy();
	expect(await rahulShettyPage.rdBtn2.isChecked()).toBeFalsy();
	expect(await rahulShettyPage.rdBtn1.isChecked()).toBeFalsy();
	await rahulShettyPage.clickRadionBtn2();
	expect(await rahulShettyPage.rdBtn3.isChecked()).toBeFalsy();
	expect(await rahulShettyPage.rdBtn2.isChecked()).toBeTruthy();
	expect(await rahulShettyPage.rdBtn1.isChecked()).toBeFalsy();
	//suggestion test
	await rahulShettyPage.TypeSuggestions("South");
	await rahulShettyPage.SelectSuggestion("South Africa");
	await rahulShettyPage.clearSuggestion();
	await rahulShettyPage.TypeSuggestions("Republic");
	await rahulShettyPage.Select1stSuggestion();
	//checkbox tests
	await rahulShettyPage.checkAllCheckBoxes();
	expect(await rahulShettyPage.chbOption1.isChecked()).toBeTruthy();
	expect(await rahulShettyPage.chbOption2.isChecked()).toBeTruthy();
	expect(await rahulShettyPage.chbOption3.isChecked()).toBeTruthy();
	await rahulShettyPage.UnCheckThe1stCheckBox();
	expect(await rahulShettyPage.chbOption1.isChecked()).toBeFalsy();
	expect(await rahulShettyPage.chbOption2.isChecked()).toBeTruthy();
	expect(await rahulShettyPage.chbOption2.isChecked()).toBeTruthy();

	//show hide tests
	await rahulShettyPage.clickOnHide();
	expect(await rahulShettyPage.hiddenShownTxt.isHidden()).toBeTruthy();
	await rahulShettyPage.ClickOnShow();
	expect(await rahulShettyPage.hiddenShownTxt.isVisible()).toBeTruthy();

	//Web Table Fixed Header
	//const table = await rahulShettyPage.tableFixedHeader;
	//expect(await rahulShettyPage.tableFixedHeader).toHaveValue('46');
	expect(await rahulShettyPage.totalAmount.isVisible()).toBeTruthy();
	expect(await rahulShettyPage.totalAmount.textContent('296')).toBeTruthy();

	//Iframe tests
	await rahulShettyPage.checkIFrame();
	expect(await rahulShettyPage.iFrame.isVisible()).toBeTruthy();
	await rahulShettyPage.clickLogo();
});