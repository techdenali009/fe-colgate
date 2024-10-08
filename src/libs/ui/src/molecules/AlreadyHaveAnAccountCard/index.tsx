import React from 'react';
import { PrimaryButton } from '../PrimaryButton';
import { SecondaryButton } from  '../SecondaryButton';

const TwoCardsComponent: React.FC = () => {
  return (
    <div className="flex justify-center space-x-4 my-8">
      {/* Log In Card */}
      <div className="border-2 border-gray-500 rounded-3xl p-12 text-center w-64">
        <strong className="text-xl text-gray-600 font-semibold font-HeroNewBold mb-4">Already have an account?</strong>
        <p className="text-sm text-gray-500 mb-6">Log in to see pricing and to order.</p>
        <PrimaryButton className="py-2 px-6 w-full font-HeroNewBold">
          Log In
        </PrimaryButton>
      </div>

      {/* Join Card */}
      <div className="border-2 border-gray-500 rounded-3xl p-12 text-center w-64">
        <strong className="text-xl text-gray-600 font-semibold font-HeroNewBold mb-4">New to PCA?</strong>
        <p className="text-sm text-gray-500 mb-6">Register to save on products and receive subscription offers.</p>
        <SecondaryButton className="py-2 px-6 w-full font-HeroNewBold">
          Join
        </SecondaryButton>
      </div>
    </div>
  );
};

export default TwoCardsComponent;
