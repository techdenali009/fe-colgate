import React from 'react';
import { PrimaryButton } from '../PrimaryButton';
import { SecondaryButton } from  '../SecondaryButton';
import './AlreadyHaveAnAccountCard.styles.scss'

const TwoCardsComponent: React.FC = () => {
  return (
    <div className='Product-detailspage'>
      <div className="twocards flex flex-col  lg:flex-row justify-center space-x-4 my-8 ">
        {/* Log In Card */}
        <div className="twocards-card-one border border-thin border-gray-500 rounded-3xl p-5 text-center w-[224px]">
          <strong className="text-xl text-gray-600 font-semibold font-HeroNewBold mb-4">Already have an account?</strong>
          <p className="text-sm text-gray-500 mt-2.5 "  style={{ marginBottom: '70px' }} >Log in to see pricing and to order.</p>
          <PrimaryButton className="py-2 px-6 w-full font-HeroNewBold">
            Log In
          </PrimaryButton>
        </div>

        {/* Join Card */}
        <div className="twocards-card-two border border-thin border-gray-500 rounded-3xl p-5 text-center w-[224px] ">
          <strong className="text-xl text-gray-600 font-semibold font-HeroNewBold mb-4">New to PCA?</strong>
          <p className="text-sm text-gray-500 mt-2.5 "  style={{  marginBottom: '70px' }} >Register to save on products and receive subscription offers.</p>
          <SecondaryButton className="py-2 px-6 w-full font-HeroNewBold border border-blue-600">
            Join
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default TwoCardsComponent;
