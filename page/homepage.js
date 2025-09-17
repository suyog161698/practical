import { faker } from '@faker-js/faker';

 class HomePage {
    constructor(page) {
        this.page = page;
        this.signLoginLink = page.getByRole('link', { name: ' Signup / Login' });
        this.emailaddress =page.locator('//div[@class="login-form"]//input[@type="email"]');
        this.password =page.getByPlaceholder('Password');
        this.loginButton =page.getByRole('button', { name: 'Login' });
        this.signupemailaddress=page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address')

        this.name=page.getByRole('textbox', { name: 'Name' });  
        
        this.signupbutton=page.getByRole('button', { name: 'Signup' });
        this.addtocartproduct=page.locator('.nav.nav-pills.nav-justified > li > a');
        this.addtocartbutton=page.getByRole('button', { name: ' Add to cart' });
        this.viewcartlink=page.getByRole('link', { name: 'View Cart' });
        this.proceedtocheckoutlink=page.getByText('Proceed To Checkout');
        this.placeorderlink=page.getByRole('link', { name: 'Place Order' });

        this.nameoncard=page.locator('input[name="name_on_card"]');
        this.cardnumber=page.locator('input[name="card_number"]');
        this.expirymonth=page.getByRole('textbox', { name: 'MM' });
        this.expiryyear=page.getByRole('textbox', { name: 'YYYY' });
        this.cvv=page.getByRole('textbox', { name: 'ex.' })

        this.payandconfirmorderbutton=page.getByRole('button', { name: 'Pay and Confirm Order' });

        this.title=page.getByRole('radio', { name: 'Mr.' });
        this.signupname=page.getByRole('textbox', { name: 'Name *', exact: true });
        this.signuppassword=page.getByRole('textbox', { name: 'Password *' })
        this.days=page.locator('#days');
        this.months=page.locator('#months');
        this.years=page.locator('#years')
        this.newsletter=page.getByRole('checkbox', { name: 'Sign up for our newsletter!' });
        this.offers=page.getByRole('checkbox', { name: 'Receive special offers from' });
        this.firstname=page.getByRole('textbox', { name: 'First name *' });
        this.lastname=page.getByRole('textbox', { name: 'Last name *' });
        this.company=page.getByRole('textbox', { name: 'Company', exact: true });
        this.address= page.getByRole('textbox', { name: 'Address * (Street address, P.' })
        this.address2= page.getByRole('textbox', { name: 'Address 2' });
        this.state =page.getByRole('textbox', { name: 'State *' })
        this.city=page.getByRole('textbox', { name: 'City * Zipcode *' })
        this.pincode= page.locator('#zipcode')
        this.mobilenumber=page.getByRole('textbox', { name: 'Mobile Number *' });
        this.createaccountbutton=page.getByRole('button', { name: 'Create Account' });  
        this.userfirstname;
        this.userlastname;
      
    }

    async login(emailaddress, password) {
        await this.signLoginLink.click();
        await this.emailaddress.fill(emailaddress);
        await this.password.fill(password);
        await this.loginButton.click();
    }


    async orderproduct(){
        await this.addtocartproduct.first().click();
        await this.addtocartbutton.click();
        await this.viewcartlink.click();
        await this.proceedtocheckoutlink.click();
        await this.placeorderlink.click();        
    }

    async orderproductwithcreditcard(nameoncard, cardnumber, expirymonth, expiryyear, cvv){
        await this.nameoncard.fill(nameoncard);
        await this.cardnumber.click();
        await this.cardnumber.click();
        await this.cardnumber.fill(cardnumber);
        await this.cvv.click();
        await this.cvv.fill(cvv);
        await this.expirymonth.click();
        await this.expirymonth.fill(expirymonth);
        await this.expiryyear.click();
        await this.expiryyear.fill(expiryyear);
        await this.payandconfirmorderbutton.click();
    }

     generateRandomEmail() {
        const timestamp = Date.now();
        const randomNum = Math.floor(Math.random() * 1000);
        return `user${timestamp}${randomNum}@yopmail.com`;
      }


      async signup(email){
         this.userfirstname = faker.person.firstName();
         this.userlastname = faker.person.lastName();
        await this.signLoginLink.click();
        await this.name.click();
        await this.name.fill(this.userfirstname + ' ' + this.lastname);
        await this.signupemailaddress.click();
        await this.signupemailaddress.fill(email);
        await this.signupbutton.click();
      }


      async createaccount(){
        const address = faker.location.streetAddress();
        const dob = faker.date.birthdate({ min: 18, max: 65, mode: 'age' });
        // Extract parts
         this.day = dob.getDate().toString();          // 1–31
         this.month = (dob.getMonth() + 1).toString();   // 0–11 (add +1 for 1–12)
         this.year = dob.getFullYear().toString();     // full year e.g. 1990
         this.companyname = faker.company.name();
         this.addressline = faker.location.streetAddress();
         this.newaddress = faker.location.streetAddress();
         this.userstate = faker.location.state();
         this.userzipcode = faker.location.zipCode();
         this.usercity = faker.location.city();
         this.number = faker.phone.number('##########');
         this.password = faker.internet.password(10, true); // length 10, with symbols
       
        await this.title.check();
        await this.signupname.click();
        await this.signuppassword.click();
        await this.signuppassword.fill(this.password);
        await this.days.selectOption(this.day);
        await this.months.selectOption(this.month);
        await this.years.selectOption(this.year);
        await this.newsletter.check();
        await this.offers.check();
        await this.firstname.click();
        await this.firstname.fill(this.userfirstname);
        await this.lastname.click();
        await this.lastname.fill(this.userlastname);
        await this.company.click();
        await this.company.fill(this.companyname);
        await this.address.click();
        await this.address.fill(this.newaddress);
        await this.address2.click();
        await this.address2.fill(this.addressline);
        await this.state.click();
        await this.state.fill(this.userstate);
        await this.city.click();
        await this.city.fill(this.usercity);
        await  this.pincode.click();
        await this.pincode.fill(this.userzipcode);
        await this.mobilenumber.click();
        await this.mobilenumber.fill(this.number);
        await this.createaccountbutton.click();

        return this.password;
        
      }
}
export default HomePage;

 