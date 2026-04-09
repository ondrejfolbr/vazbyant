"use client"

import { create } from "zustand"

interface ProfileState {
  isDrawerOpen: boolean
  openDrawer: () => void
  closeDrawer: () => void
}

export const useProfileStore = create<ProfileState>()((set) => ({
  isDrawerOpen: false,
  openDrawer: () => set({ isDrawerOpen: true }),
  closeDrawer: () => set({ isDrawerOpen: false }),
}))
