import React, { useState } from 'react';
import { Check, Calculator, Download } from 'lucide-react';
import { pricingPlans } from '../data/cottages';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(pricingPlans[1]);
  const [calculatorValues, setCalculatorValues] = useState({
    downPayment: selectedPlan.downPayment,
    installmentMonths: selectedPlan.installments
  });

  const calculateMonthlyPayment = () => {
    const remaining = selectedPlan.totalPrice - calculatorValues.downPayment;
    return Math.round(remaining / calculatorValues.installmentMonths);
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transparent Pricing & Payment Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible payment options designed to make your dream cottage affordable. 
            Choose the plan that works best for your budget.
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                plan.isPopular ? 'ring-2 ring-blue-600' : ''
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {plan.totalPrice.toLocaleString()}
                </div>
                <div className="text-gray-600">PKR Total Price</div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between">
                  <span className="text-gray-600">Down Payment:</span>
                  <span className="font-semibold">PKR {plan.downPayment.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Monthly Installment:</span>
                  <span className="font-semibold">PKR {plan.monthlyAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-semibold">{plan.installments} months</span>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setSelectedPlan(plan)}
                className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${
                  plan.isPopular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                }`}
              >
                Select Plan
              </button>
            </div>
          ))}
        </div>

        {/* Payment Calculator */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <Calculator className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Payment Calculator</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Selected Plan: {selectedPlan.name}
                </label>
                <div className="text-2xl font-bold text-blue-600">
                  PKR {selectedPlan.totalPrice.toLocaleString()}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Down Payment (PKR)
                </label>
                <input
                  type="number"
                  value={calculatorValues.downPayment}
                  onChange={(e) => 
                    setCalculatorValues({
                      ...calculatorValues,
                      downPayment: parseInt(e.target.value) || 0
                    })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  min="0"
                  max={selectedPlan.totalPrice}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Installment Period (Months)
                </label>
                <input
                  type="number"
                  value={calculatorValues.installmentMonths}
                  onChange={(e) => 
                    setCalculatorValues({
                      ...calculatorValues,
                      installmentMonths: parseInt(e.target.value) || 1
                    })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  min="1"
                  max="60"
                />
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">Monthly Payment</div>
                  <div className="text-3xl font-bold text-blue-600">
                    PKR {calculateMonthlyPayment().toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Payment Plans?</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-3 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">Flexible Terms</div>
                  <div className="text-gray-600">Customize your payment schedule to fit your budget</div>
                </div>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-3 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">No Hidden Charges</div>
                  <div className="text-gray-600">Complete transparency in all pricing and fees</div>
                </div>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-3 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">Early Payment Discount</div>
                  <div className="text-gray-600">Save more with early payment options</div>
                </div>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-3 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">Secure Investment</div>
                  <div className="text-gray-600">Fully legal project with guaranteed returns</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                Book Your Cottage Now
              </button>
              <button className="w-full flex items-center justify-center border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
                <Download className="w-5 h-5 mr-2" />
                Download Payment Plan PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;