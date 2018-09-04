import { formatDate } from '../Utils'

describe('Utils', () => {
    it('test formatDate', () => {
        expect(formatDate(new Date(0))).toEqual('00-00-00 00:00')
    }
})