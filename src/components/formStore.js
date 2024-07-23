import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useFormStore = create(
  devtools(
    persist(
      (set) => ({
        personalInfo: {
          name: "",
          email: "",
          phone: "",
        },

        setPersonalInfo: (info) => set({ personalInfo: info }),

        selectedPlan: 0,

        yearlyPlan: false,
        setSelectedPlan: (index) => set({ selectedPlan: index }),

        setYearlyPlan: (value) => set({ yearlyPlan: value }),

        selectedAddOns: [],
        setSelectedAddOns: (addOns) => set({ selectedAddOns: addOns }),

        currentStep: 1,
        setCurrentStep: (step) => set({ currentStep: step }),

        isConfirmed: false,
        setIsConfirmed: (confirmed) => set({ isConfirmed: confirmed }),
        resetConfirmation: () => set({ isConfirmed: false }),
      }),

      {
        name: "form-storage",
        storage: localStorage,
      },
    ),
  ),
);

export default useFormStore;
