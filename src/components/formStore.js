import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useFormStore = create(
  devtools(
    persist(
      (set) => ({
        formData: {
          step: 1,
          name: "",
          email: "",
          phone: "",
          plan: "arcade",
          planType: "monthly",
          addons: [],
        },

        setFormData: (newData) => set((state) => ({ formData: { ...state.formData, ...newData } })),

        page: 0,
        setPage: (newPage) => set({ page: newPage }),

        error: {
          name: "",
          email: "",
          phone: "",
        },
        setError: (newError) => set((state) => ({ error: { ...state.error, ...newError } })),
      }),
      {
        name: "form-storage",
        storage: localStorage,
      },
    ),
  ),
);

export default useFormStore;
