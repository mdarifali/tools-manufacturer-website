import React from 'react';
import FAQ from '../../assets/images/FAQ.jpg'

const GeneralQuestions = () => {
    return (
        <div className='my-10 p-10'>
            <div class="card lg:card-side bg-base-200 shadow-xl gap-5 flex">
                <figure className='flex-1'>
                    <img src={FAQ} alt="Album" />
                </figure>
                <div class="card-body flex-1 justify-center">
                    <div class="collapse collapse-plus border border-base-300 bg-base-300 rounded-box">
                        <input type="checkbox" class="peer" />
                        <div class="collapse-title">
                            Do you use the latest and best in infrastructure and technology?
                        </div>
                        <div class="collapse-content bg-green-400">
                            <p>You can outsource any back office or non-core business function, as we provide a wide array of services, some of which are: Call Center Services, Data Entry Services, Software Development Services, Mortgage Services</p>
                        </div>
                    </div>
                    <div class="collapse collapse-plus border border-base-300 bg-base-300 rounded-box">
                        <input type="checkbox" class="peer" />
                        <div class="collapse-title">
                            How are completed contracts or work orders signed off?
                        </div>
                        <div class="collapse-content bg-green-400">
                            <p>You can outsource any back office or non-core business function, as we provide a wide array of services, some of which are: Call Center Services, Data Entry Services, Software Development Services, Mortgage Services</p>
                        </div>
                    </div>
                    <div class="collapse collapse-plus border border-base-300 bg-base-300 rounded-box">
                        <input type="checkbox" class="peer" />
                        <div class="collapse-title">
                            What modes of payment do you accept?
                        </div>
                        <div class="collapse-content bg-green-400">
                            <p className='font-semibold'>Paypal</p>
                            <p className='font-semibold'>Alipay</p>
                            <p className='font-semibold'>Visa Credit Card, Master Card</p>
                            <p className='font-semibold'>WeChat Pay</p>
                            <p className='font-semibold'>Stripe </p>
                        </div>
                    </div>
                    <div class="collapse collapse-plus border border-base-300 bg-base-300 rounded-box">
                        <input type="checkbox" class="peer" />
                        <div class="collapse-title">
                            How long will it take to get my refund?
                        </div>
                        <div class="collapse-content bg-green-400">
                            <p>We process your refund within 5 business days. Once the refund is processed, the refunded amount will be returned to your original payment method within a few days. Exactly how long this process takes depends on your payment method.</p>
                            <p className='font-semibold my-2'>Credit card (Visa, Mastercard, American Express, Maestro and Diners Club)</p>
                            <span>Visa, Mastercard and Maestro take up to 2 working days.
                                American Express takes up to 3 working days.
                                Diners Club takes up to 5 working days.
                            </span>
                        </div>
                    </div>
                    <div class="collapse collapse-plus border border-base-300 bg-base-300 rounded-box">
                        <input type="checkbox" class="peer" />
                        <div class="collapse-title">
                            Do I have to be home for pick-up/delivery?
                        </div>
                        <div class="collapse-content bg-green-400">
                            <p>Nope. Taskers can pick up or deliver items to your home or work, a family member’s home, a designated locker –– you get the idea. Just be sure to communicate clearly in advance with your Tasker so he or she can make your life as easy as possible.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeneralQuestions;