import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { UnitItems } from '@/interfaces/Unit.interface';
import { UNIT } from '@/utils/Enum';

const initStatusData = {
	CID: '',
	uid: 0,
	mode: 0,
	status: 0,
};
const initSettingData = {
	isShow: false,
	temp: 0,
	time: 0,
	start: '00:00',
	end: '23:59',
};

export const useUnitStore = defineStore('unit', () => {
	const unit = ref<UnitItems>({
		conditioner: {
			name: UNIT.CONDITIONER.name,
			status: initStatusData,
			...initSettingData,
		},
		sunshade: {
			name: UNIT.SUNSHADE.name,
			status: initStatusData,
			...initSettingData,
		},
		led: { name: UNIT.LED.name, status: initStatusData, ...initSettingData },
		ventilationFan: {
			name: UNIT.VENTILATION_FAN.name,
			status: initStatusData,
			...initSettingData,
		},
		gas: { name: UNIT.GAS.name, status: initStatusData, ...initSettingData },
		floatingFan: {
			name: UNIT.FLOATING_FAN.name,
			status: initStatusData,
			...initSettingData,
		},
		pump: { name: UNIT.PUMP.name, status: initStatusData, ...initSettingData },
	});
	const getUnit = computed(() => unit);
	const setIsShow = (type: string) => {
		for (const [key] of Object.entries(unit.value)) {
			if (key === type) {
				unit.value[type] = {
					...unit.value[type],
					isShow: true,
				};
			} else {
				unit.value[key] = {
					...unit.value[key],
					isShow: false,
				};
			}
		}
	};
	const setUnit = ({
		conditioner,
		sunshade,
		led,
		ventilationFan,
		gas,
		floatingFan,
		pump,
	}: UnitItems) => {
		unit.value.conditioner = conditioner;
		unit.value.sunshade = sunshade;
		unit.value.led = led;
		unit.value.ventilationFan = ventilationFan;
		unit.value.gas = gas;
		unit.value.floatingFan = floatingFan;
		unit.value.pump = pump;
	};
	const $reset = () => {
		unit.value.conditioner = {
			name: UNIT.CONDITIONER.name,
			status: initStatusData,
			...initSettingData,
		};
		unit.value.sunshade = {
			name: UNIT.SUNSHADE.name,
			status: initStatusData,
			...initSettingData,
		};
		unit.value.led = {
			name: UNIT.LED.name,
			status: initStatusData,
			...initSettingData,
		};
		unit.value.ventilationFan = {
			name: UNIT.VENTILATION_FAN.name,
			status: initStatusData,
			...initSettingData,
		};
		unit.value.gas = {
			name: UNIT.CONDITIONER.name,
			status: initStatusData,
			...initSettingData,
		};
		unit.value.floatingFan = {
			name: UNIT.FLOATING_FAN.name,
			status: initStatusData,
			...initSettingData,
		};
		unit.value.pump = {
			name: UNIT.PUMP.name,
			status: initStatusData,
			...initSettingData,
		};
	};

	return {
		unit,
		getUnit,
		setUnit,
		setIsShow,
		$reset,
	};
});
