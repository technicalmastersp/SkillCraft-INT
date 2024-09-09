// *****************************************************  for about bank  *****************************************************

const aboutBankBtn = document.getElementById('aboutBankBtn')
const aboutBank = document.getElementById('aboutBank')
const aboutBankText = `<div class="card text-bg-primary mt-5">
                    <div class="card-header text-center"><h1>About This Bank</h1></div>
                    <div class="card-body">
                        <p  class="card-text">Welcome to TechnicalMasterSP Bank, where innovation and opportunity come together to shape your financial future!</p>
                        <p  class="card-text">At TechnicalMasterSP Bank, we recognize that every individual's financial journey is unique and full of potential. That’s why we offer a diverse array of loan products designed to cater to your distinct needs and ambitions. Whether you’re looking to purchase your dream home, expand your business horizons, consolidate debt for a brighter financial future, or simply seize new opportunities, we have a solution crafted just for you.</p>
                        <p  class="card-text">Our commitment extends beyond traditional banking services. We leverage cutting-edge technology to ensure a streamlined, efficient process, allowing you to focus on what truly matters. Our personalized approach means that every interaction with us is tailored to your specific situation, ensuring that you receive not just a loan, but a strategic partner in your financial journey.</p>
                        <p  class="card-text">Imagine stepping into a world where your financial goals are not only understood but actively supported. Our home loans are designed to make your dream residence a reality, offering flexible terms and competitive rates to fit your lifestyle. For entrepreneurs and business owners, our commercial loans provide the capital needed to fuel growth, enhance operations, or explore new ventures with confidence. And if you’re looking to simplify and consolidate your finances, our consolidation loans offer a pathway to financial clarity and peace of mind.</p>
                        <p  class="card-text">At TechnicalMasterSP Bank, we believe that every financial decision you make should empower and inspire you. That’s why our expert team is dedicated to guiding you through every step of the loan process, ensuring that you have the knowledge and support needed to make informed choices. We pride ourselves on creating a banking experience that is as dynamic and forward-thinking as you are.</p>
                        <p  class="card-text">Join us at TechnicalMasterSP Bank, where your financial aspirations are met with innovative solutions and unwavering support. Together, let’s turn your dreams into reality and build a future filled with possibilities. Welcome to a new era of banking—where your success is our mission, and your journey is our priority.</p>
                    </div>
                </div>`;

aboutBankBtn.addEventListener('click', () => {
    aboutBank.innerHTML = aboutBankText
})

// *****************************************************  for home loan  *****************************************************

const hoamLoanBtn = document.getElementById('hoamLoanBtn')
const hoamLoan = document.getElementById('hoamLoan')
const hoamLoanText = `<div class="card text-bg-success mt-5">
            <div class="card-header text-center"><h1>Home Loan</h1></div>
            <div class="card-body">
                <p  class="card-text">Welcome to TechnicalMasterSP Bank, where your vision of homeownership is our highest priority. We are excited to introduce you to our comprehensive home loan solutions, designed to transform your dreams into reality with ease and confidence.</p>
                <p  class="card-text">At TechnicalMasterSP Bank, we understand that purchasing a home is more than just a financial transaction—it's a life-changing event. Whether you're embarking on the journey of buying your first home, upgrading to a larger space, or refinancing your existing mortgage, we offer a wide array of home loan products tailored to meet your unique needs and aspirations.</p>
                <p  class="card-text">Our commitment to providing exceptional home loan services begins with understanding your individual circumstances and goals. With a diverse selection of loan options, including fixed-rate mortgages, adjustable-rate mortgages, and specialized programs for first-time buyers, we ensure that you find the perfect fit for your financial situation. Our team of experienced loan officers is here to guide you through every step of the process, from application to closing, ensuring that you make informed decisions that align with your long-term financial objectives.</p>
                <div class="card-header"><h5>Why Choose TechnicalMasterSP Bank for Your Home Loan?</h5></div>
                <ul>
                    <li>Tailored Loan Solutions: We offer a variety of loan products designed to cater to different needs, whether you’re looking for the stability of a fixed-rate mortgage or the flexibility of an adjustable-rate mortgage. Our specialized programs for first-time homebuyers and other unique scenarios provide additional options to fit your specific situation.</li>
                    <li>Competitive Rates and Terms: At TechnicalMasterSP Bank, we strive to provide you with some of the most competitive interest rates and loan terms in the market. Our goal is to make homeownership affordable and accessible, allowing you to secure a loan that fits your budget and financial plans.</li>
                    <li>Streamlined Process: We leverage cutting-edge technology to make the home loan application process as smooth and efficient as possible. From online applications to digital document submissions, we are dedicated to reducing the paperwork and hassle typically associated with securing a home loan.</li>
                    <li>Expert Guidance: Our knowledgeable loan officers are here to support you throughout the entire process. They provide personalized advice, answer your questions, and help you navigate the complexities of the mortgage industry, ensuring that you feel confident and informed every step of the way.</li>
                    <li>Exceptional Service: At TechnicalMasterSP Bank, we pride ourselves on delivering outstanding customer service. We are committed to building lasting relationships with our clients, providing you with the support you need not just during your home loan process, but throughout your entire homeownership journey.</li>
                </ul>
                <p  class="card-text">We invite you to explore the possibilities with TechnicalMasterSP Bank and discover how our tailored home loan solutions can help you achieve your homeownership goals. With our dedication to personalized service, competitive rates, and innovative technology, we are here to make your path to a new home as seamless and rewarding as possible.</p>
                <p  class="card-text">Let TechnicalMasterSP Bank be your trusted partner in turning your homeownership dreams into reality. Welcome to a brighter future with a home loan that fits you perfectly.</p>
            </div>
        </div>`;

hoamLoanBtn.addEventListener('click', () => {
    hoamLoan.innerHTML = hoamLoanText
})

// *****************************************************  for personal loan  *****************************************************

const personalLoanBtn = document.getElementById('personalLoanBtn')
const personalLoan = document.getElementById('personalLoan')
const personalLoanText = `<div class="card text-bg-success mt-5">
            <div class="card-header text-center"><h1>Personal Loan</h1></div>
            <div class="card-body">
              <p class="card-text">Welcome to TechnicalMasterSP Bank, where we redefine what it means to secure a personal loan with unmatched flexibility, transparency, and dedication to your financial well-being. At TechnicalMasterSP Bank, we understand that life often presents unexpected opportunities and challenges, and having the right financial support can make all the difference. That’s why our Personal Loan offerings are designed to meet a wide range of needs, ensuring you have access to the funds you need, when you need them.</p>
              <p class="card-text">Our extensive portfolio of personal loans is crafted to accommodate a variety of financial scenarios, from fulfilling your dreams and aspirations to managing life’s unforeseen expenses. Whether you’re planning a major life event, consolidating debt, or simply seeking to enhance your financial flexibility, TechnicalMasterSP Bank is here to provide tailored solutions that fit your unique requirements.</p>
              <p class="card-text">For those looking to finance significant personal milestones, such as weddings, vacations, or home renovations, our Signature Personal Loans offer an excellent solution. These loans come with competitive rates and flexible terms, allowing you to manage your payments in a way that suits your budget while achieving your personal goals.</p>
              <p class="card-text">If you're considering consolidating existing debts into a single, more manageable payment, our Debt Consolidation Loans are designed to simplify your financial life. By combining multiple debts into one loan with a lower interest rate, you can streamline your payments and potentially save on overall interest costs, providing you with greater peace of mind and financial stability.</p>
              <p class="card-text">For unexpected expenses or urgent financial needs, our Emergency Personal Loans offer quick access to funds with straightforward application processes and rapid approval times. We understand that urgent financial situations require immediate action, and our commitment is to ensure that you receive the support you need without unnecessary delays.</p>
              <p class="card-text">In addition to these options, TechnicalMasterSP Bank provides specialized loans for specific needs. Our Education Loans are tailored to help you invest in your future by covering tuition fees and other educational expenses, while our Medical Expense Loans are designed to provide financial relief for unforeseen medical costs, ensuring you have the support you need during challenging times.</p>
              <p class="card-text">Our personal loan offerings also include Flexi-Loans, which provide the ultimate in financial flexibility. With this type of loan, you can access a revolving credit line that allows you to borrow as needed and repay at your own pace, making it ideal for managing fluctuating expenses and ongoing financial needs.</p>
              <p class="card-text">At TechnicalMasterSP Bank, we pride ourselves on a customer-centric approach, providing not only a diverse range of loan products but also exceptional service throughout the entire lending process. Our dedicated loan officers are here to offer expert guidance, answer all your questions, and help you navigate the various options to find the personal loan that best suits your needs.</p>
              <p class="card-text">We believe that your financial journey is unique, and our mission is to support you with personalized solutions and a commitment to your success. Whether you’re planning for the future, addressing immediate needs, or seeking greater financial flexibility, TechnicalMasterSP Bank is here to empower you with the right tools and resources.</p>
              <p class="card-text">Experience the difference with TechnicalMasterSP Bank, where our expertise, comprehensive loan options, and dedication to customer satisfaction set us apart as your ideal partner in personal financing. Contact us today to explore how our personal loans can help you achieve your financial goals and make your dreams a reality.</p>
            </div>
        </div>`;

personalLoanBtn.addEventListener('click', () => {
    personalLoan.innerHTML = personalLoanText
})

// *****************************************************  for Gold loan  *****************************************************

const goldLoanBtn = document.getElementById('goldLoanBtn')
const goldLoan = document.getElementById('goldLoan')
const goldLoanText = `<div class="card text-bg-success mt-5">
          <div class="card-header text-center"><h1>Gold Loan</h1></div>
          <div class="card-body">
            <p  class="card-text">Welcome to TechnicalMasterSP Bank, where we offer innovative and flexible financial solutions to meet your diverse needs. Among our comprehensive range of loan products, our Gold Loan services stand out as a prime example of how we combine convenience, value, and customer-centric solutions. At TechnicalMasterSP Bank, we recognize that gold is not only a treasured asset but also a valuable resource that can provide financial support in times of need or opportunity.</p>
            <p  class="card-text">Our Gold Loan offerings are designed to help you unlock the full potential of your gold assets while ensuring a smooth and transparent borrowing experience. Whether you are looking to manage urgent financial requirements, capitalize on investment opportunities, or simply enhance your financial flexibility, TechnicalMasterSP Bank provides a suite of gold loan options tailored to meet your specific needs.</p>
            <div class="card-header"><h5>Why Choose a Gold Loan with TechnicalMasterSP Bank?</h5></div>
            <ul>
              <li>Value and Accessibility: Gold Loans are an ideal choice for those who seek immediate financial assistance without the need to liquidate their assets. By pledging your gold jewelry, coins, or bullion, you can access substantial loan amounts with favorable terms. Our expert valuation team ensures that you receive a fair and accurate assessment of your gold's worth, maximizing the loan amount you can secure.</li>
              <li>Competitive Interest Rates: At TechnicalMasterSP Bank, we understand the importance of affordability in your financial planning. That's why we offer some of the most competitive interest rates in the market for our Gold Loans. Our transparent pricing structure ensures there are no hidden fees or surprises, allowing you to manage your loan with confidence.</li>
              <li>Flexible Repayment Options: We believe that repayment should be as flexible as your financial situation requires. Our Gold Loans come with a range of repayment options, including EMI plans and flexible tenure choices. Whether you prefer shorter-term solutions for quick repayments or extended periods to manage your budget more comfortably, we have a plan that suits your needs.</li>
              <li>Swift and Hassle-Free Processing: Time is of the essence when it comes to financial needs, which is why we have streamlined our Gold Loan application process to ensure quick approval and disbursement. Our efficient processing and minimal paperwork mean you can access the funds you need with minimal delay, allowing you to focus on what matters most.</li>
              <li>Security and Assurance: At TechnicalMasterSP Bank, the safety of your pledged gold is our top priority. Our state-of-the-art security systems and dedicated storage facilities ensure that your valuable assets are kept safe throughout the loan period. You can have peace of mind knowing that your gold is in secure hands.</li>
              <li>Expert Guidance: Navigating the world of gold loans can be complex, which is why our experienced loan officers are here to guide you every step of the way. From understanding the loan terms to addressing any queries you may have, our team is committed to providing personalized assistance and ensuring a smooth and transparent loan experience.</li>
            </ul>
            <p  class="card-text">In addition to our standard Gold Loans, TechnicalMasterSP Bank also offers specialized products for varied needs. Whether you're looking for a Loan Against Gold for business expansion, urgent medical expenses, or any other specific requirement, we have tailored solutions designed to meet those needs effectively.</p>
            <p  class="card-text">At TechnicalMasterSP Bank, we are dedicated to providing financial solutions that enhance your financial stability and support your aspirations. Our Gold Loan services are a testament to our commitment to delivering valuable, flexible, and customer-focused financial products. Discover how our Gold Loans can provide the support you need while safeguarding your valuable assets.</p>
            <p  class="card-text">Experience the excellence of TechnicalMasterSP Bank, where our expertise, diverse loan offerings, and dedication to customer satisfaction come together to offer you the ultimate in financial support. Contact us today to learn more about how our Gold Loan solutions can help you achieve your financial goals with ease and confidence.</p>
          </div>
        </div>`;

goldLoanBtn.addEventListener('click', () => {
    goldLoan.innerHTML = goldLoanText
})

// *****************************************************  for Gold loan  *****************************************************

const lapLoanBtn = document.getElementById('lapLoanBtn')
const lapLoan = document.getElementById('lapLoan')
const lapLoanText = `<div class="card text-bg-success mt-5">
  <div class="card-header text-center"><h1>LAP ( Loan Against Property )</h1></div>
  <div class="card-body">
    <p  class="card-text">Welcome to TechnicalMasterSP Bank, where we turn your property into a powerful financial tool through our comprehensive Loan Against Property (LAP) services. At TechnicalMasterSP Bank, we understand that your property is not only a valuable asset but also a potential source of financial empowerment. Our LAP solutions are designed to help you unlock the value of your real estate investments, offering you the flexibility and support you need to achieve your financial goals.</p>
    <div class="card-header"><h5>Why Choose Loan Against Property with TechnicalMasterSP Bank?</h5></div>
    <ul>
      <li>Access to Significant Funds: Whether you’re looking to fund a large-scale investment, consolidate high-interest debt, or cover substantial personal expenses, a Loan Against Property provides you with access to substantial amounts of capital. By leveraging the equity in your residential or commercial property, you can secure the funds you need while maintaining ownership of your asset.</li>
      <li>Competitive Interest Rates: At TechnicalMasterSP Bank, we believe that accessing the funds you need should be both affordable and straightforward. Our LAP services come with some of the most competitive interest rates available, designed to provide you with a cost-effective solution for financing your needs. Our transparent fee structure ensures you understand the full cost of your loan, with no hidden charges.</li>
      <li>Flexible Loan Terms: We recognize that each financial situation is unique, which is why we offer flexible loan terms to suit your specific needs. With options for both short-term and long-term loans, you can choose a repayment period that aligns with your financial plans. Our customizable loan tenures ensure that you have the flexibility to manage your repayments comfortably.</li>
      <li>Swift and Simplified Process: Time is a crucial factor when it comes to securing financial support. Our streamlined application process ensures quick approval and disbursement of your loan. With minimal paperwork and efficient processing, we aim to provide you with a hassle-free experience so you can focus on your financial objectives.</li>
      <li>Comprehensive Property Valuation: The value of your property is a critical factor in determining your loan amount. Our expert valuation team uses the latest techniques and market insights to provide an accurate assessment of your property’s worth. This ensures you receive a fair and optimal loan amount based on the value of your asset.</li>
      <li>Security and Transparency: At TechnicalMasterSP Bank, we prioritize the security of your property and financial information. Our robust security measures ensure that your property is safe throughout the loan period, and our transparent processes guarantee that you are fully informed of all terms and conditions.</li>
      <li>Expert Assistance: Navigating the complexities of a Loan Against Property can be challenging. That’s why our experienced loan officers are dedicated to guiding you through every step of the process. From explaining the loan terms to addressing any concerns, our team is committed to providing personalized assistance and ensuring that you make informed decisions.</li>
    </ul>
    <div class="card-header"><h5>Tailored Solutions for Every Need?</h5></div>
    <p  class="card-text">Our Loan Against Property offerings are versatile and can be customized to meet a wide range of financial needs. Whether you need funds for business expansion, medical expenses, education, or any other significant expense, our LAP solutions are designed to provide the support you need. Additionally, we offer specialized products for specific requirements, ensuring that you have access to the right financial tools for your unique situation.</p>
    <p  class="card-text">At TechnicalMasterSP Bank, we are dedicated to empowering you with the financial resources you need to achieve your goals. Our Loan Against Property services are a testament to our commitment to providing valuable, flexible, and customer-focused financial solutions.</p>
    <p  class="card-text">Experience the difference with TechnicalMasterSP Bank, where our expertise, diverse loan offerings, and unwavering dedication to customer satisfaction make us your ideal partner in property-backed financing. Contact us today to learn more about how our LAP solutions can help you unlock the potential of your property and turn your financial aspirations into reality.</p>
  </div>
</div>`;

lapLoanBtn.addEventListener('click', () => {
    lapLoan.innerHTML = lapLoanText
})

// *****************************************************  for finish line  *****************************************************