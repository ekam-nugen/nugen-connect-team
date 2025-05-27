import React from 'react';
import { StepThreeFeaturesContent } from './constants';
import {
  TStepThreeFeatureCategory,
  TStepThreeFeatureItem,
  StepThreeFeaturesProps,
} from './types';

export default function StepThreeFeatures({
  selectedFeatures,
  handleFeatureClick,
}: Readonly<StepThreeFeaturesProps>) {
  return (
    <div className="max-w-4xl mx-auto p-2 ">
      <h2 className="text-center text-xl font-semibold text-gray-dark mb-2">
        Let’s add the right features to your app
      </h2>
      <p className="text-center text-xs text-gray-muted mb-6 w-full">
        Select your preferred features so we can customize the platform to your
        needs:
      </p>

      <div className="space-y-8 w-full">
        {StepThreeFeaturesContent?.map((section: TStepThreeFeatureCategory) => (
          <div key={section.category} className="flex items-start gap-4">
            {/* Vertical category label */}
            <div className="w-6 flex items-center justify-center cursor-pointer ">
              <div className="-rotate-90 text-gray-muted text-sm font-semibold whitespace-nowrap border-2 py-2 px-4 mt-8 rounded-full">
                {section.category}
              </div>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full">
              {section?.features?.map((feature: TStepThreeFeatureItem) => {
                const isSelected = selectedFeatures?.includes(feature.label);
                return (
                  <div
                    key={feature.label}
                    className={`flex flex-col items-center justify-center space-y-3 py-2.5 px-8 border-2 rounded-lg cursor-pointer transition ${
                      isSelected &&
                      'bg-blue-100 border-primary text-primary-foreground font-bold shadow-md'
                    }`}
                    onClick={() => handleFeatureClick(feature.label)}
                  >
                    <span className="text-4xl">{feature.icon}</span>
                    <div className="text-center text-xs font-semibold text-gray-muted">
                      {feature.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
