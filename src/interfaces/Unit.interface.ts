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
	status: UnitStatus;
	isShow: boolean;
	temp: number;
	time: number;
	start: string;
	end: string;
}

export interface UnitStatus {
	CID: string;
	uid: number;
	mode: number;
	status: number;
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
