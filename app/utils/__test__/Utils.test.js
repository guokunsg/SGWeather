import { formatDate } from '../Utils'

describe('Utils', () => {
    it('test formatDate', () => {
        expect(formatDate(new Date('2018-09-04T14:00:00+08:00'))).toEqual('18-09-04 14:00')
    })
})
