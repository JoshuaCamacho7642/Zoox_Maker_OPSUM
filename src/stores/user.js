import { defineStore } from "pinia"

export const useUserStore = defineStore("useStore", {
		state: () => ({
				userData: "joshua.camacho@zooxsmart.com"
		}),
		getters: {
				minuscula (state) {
						return state.userData.toLowerCase();
				}
		},
		actions: {
				registeruser (name) {
						this.userData = name;
				}
		}
})