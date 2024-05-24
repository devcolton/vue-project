import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { UnitItemAttr, UnitItems } from '@/interfaces/Unit.interface';
import { UNIT } from '@/utils/Enum';

export const useUnitStore = defineStore('unit', () => {
	const unit = ref<UnitItems>({
		conditioner: {
			name: UNIT.CONDITIONER.name,
			isShow: false,
			temp: 0,
			time: 0,
			start: '00:00',
			end: '23:59',
		},
		sunshade: { name: UNIT.SUNSHADE.name } as UnitItemAttr,
		led: { name: UNIT.LED.name } as UnitItemAttr,
		ventilationFan: { name: UNIT.VENTILATION_FAN.name } as UnitItemAttr,
		gas: { name: UNIT.GAS.name } as UnitItemAttr,
		floatingFan: { name: UNIT.FLOATING_FAN.name } as UnitItemAttr,
		pump: { name: UNIT.PUMP.name } as UnitItemAttr,
	});
	const getUnit = computed(() => unit);
	const setIsShow = (type: string) => {
		unit.value[type] = {
			...unit.value[type],
			isShow: !unit.value[type].isShow,
		};
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
			isShow: false,
			temp: 0,
			time: 0,
			start: '00:00',
			end: '23:59',
		};
		unit.value.sunshade = {} as UnitItemAttr;
		unit.value.led = {} as UnitItemAttr;
		unit.value.ventilationFan = {} as UnitItemAttr;
		unit.value.gas = {} as UnitItemAttr;
		unit.value.floatingFan = {} as UnitItemAttr;
		unit.value.pump = {} as UnitItemAttr;
	};

	return {
		unit,
		getUnit,
		setUnit,
		setIsShow,
		$reset,
	};
});
