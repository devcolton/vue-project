export interface UnitItems {
	[key: string]: UnitItemAttr;
	conditioner: UnitItemAttr;
	sunshade: UnitItemAttr;
	led: UnitItemAttr;
	ventilationFan: UnitItemAttr;
	gas: UnitItemAttr;
	floatingFan: UnitItemAttr;
	pump: UnitItemAttr;
}

export interface UnitItemAttr {
	name: string;
	isShow: boolean;
	temp: number;
	time: number;
	start: string;
	end: string;
}

export interface TimeRangeData {
	minTime: number;
	maxTime: number;
	timeStep: number;
	left: number;
	right: number;
	startTime: number;
	endTime: number;
}
