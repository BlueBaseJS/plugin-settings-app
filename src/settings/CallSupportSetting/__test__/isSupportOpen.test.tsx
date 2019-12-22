import { isSupportOpen } from '../isSupportOpen';

// tslint:disable-next-line: no-var-requires
// const mockNow = require('jest-mock-now');

// function mockDateClass(mockDate: Date) {
// 	return class extends Date {
// 		constructor(date: any) {
// 			if (date) {
// 				return super(date) as any;
// 			}

// 			return mockDate;
// 		}
// 	};
// }

describe('CallSupportSetting', () => {
	describe('isSupportOpen', () => {
		it('should be open', () => {
			expect(isSupportOpen(new Date('23 Dec 2019 11:12:00 GMT'), [1, 2, 3, 4, 5], 3, 12)).toBe(
				true
			);
		});

		it('should be closed because of sunday', () => {
			expect(isSupportOpen(new Date('22 Dec 2019 11:12:00 GMT'), [1, 2, 3, 4, 5], 3, 12)).toBe(
				false
			);
		});

		it('should be closed before opening time', () => {
			expect(isSupportOpen(new Date('23 Dec 2019 2:12:00 GMT'), [1, 2, 3, 4, 5], 3, 12)).toBe(
				false
			);
		});

		it('should be closed after closing time', () => {
			expect(isSupportOpen(new Date('23 Dec 2019 12:12:00 GMT'), [1, 2, 3, 4, 5], 3, 12)).toBe(
				false
			);
		});

		it('should be closed because days is not an array', () => {
			expect(isSupportOpen(new Date('23 Dec 2019 12:12:00 GMT'), 'foo' as any, 3, 12)).toBe(false);
		});
	});
});
